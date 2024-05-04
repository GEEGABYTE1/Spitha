import React, { ReactNode, useRef, useEffect, useState, useCallback } from 'react';

interface InfiniteLoaderProps {
    loadMore: () => Promise<void>;
    threshold?: number;
    children?: ReactNode;
    prop?:any;
    style?:React.CSSProperties
}

const InfiniteLoader: React.FC<InfiniteLoaderProps> = ({ loadMore, threshold = 0.8, children, prop }) => {
    const loadingRef = useRef<HTMLDivElement>(null);
    const [isFetching, setIsFetching] = useState(false);

    const handleObserver = useCallback((entities: IntersectionObserverEntry[]) => {
        const target = entities[0];
        if (target.isIntersecting && !isFetching) {
            setIsFetching(true);
            loadMore().then(() => setIsFetching(false)).catch(() => setIsFetching(false));
        }
    }, [isFetching, loadMore]);  

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold
        });

        if (loadingRef.current) {
            observer.observe(loadingRef.current);
        }

        return () => {
            if (loadingRef.current) {
                observer.unobserve(loadingRef.current);
            }
        };
    }, [handleObserver, threshold]);

    return (
        <div>
            <div ref={loadingRef}>{prop}</div>
            {isFetching && <div>Loading...</div>}
            {children} 
        </div>
    );
};

export default InfiniteLoader;
