import React, { ReactNode, useRef, useEffect, useState, useCallback } from 'react';

interface InfiniteLoaderProps {
    loadMore: () => Promise<void>;
    threshold?: number;
    children?: ReactNode;
}

const InfiniteLoader: React.FC<InfiniteLoaderProps> = ({ loadMore, threshold = 0.8, children }) => {
    const loadingRef = useRef<HTMLDivElement>(null);
    const [isFetching, setIsFetching] = useState(false);

    const handleObserver = useCallback((entities: IntersectionObserverEntry[]) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setIsFetching(true);
        }
    }, []);

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

    useEffect(() => {
        if (isFetching) {
            loadMore().then(() => setIsFetching(false));
        }
    }, [isFetching, loadMore]);

    return (
        <div ref={loadingRef}>
            {isFetching && <p>Loading more...</p>}
        </div>
    );
};

export default InfiniteLoader;
