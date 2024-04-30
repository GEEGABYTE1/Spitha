import React, {useCallback, useMemo} from 'react';

import InfiniteLoader from './InfiniteLoader';
import {useQueueState} from './useQueueState';


interface MyComponentProps {
    fetchData: () => Promise<any>;
    initialData?: any[];
    threshold?: number;
}


const MyComponent: React.FC<MyComponentProps> = ({fetchData, initialData = [], threshold=0.8}) => {
    const [data, enqueueDataUpdate] = useQueueState(initialData);

    const loadMore = useCallback(async () => {
        const newData = await fetchData();
        enqueueDataUpdate(prevData => [...prevData, ...newData]);
    }, [enqueueDataUpdate, fetchData]);

    const memoizedLoadMore = useMemo(() => loadMore, [loadMore]);


    return (
        <InfiniteLoader loadMore={memoizedLoadMore} threshold={threshold} />

    )
}

export default MyComponent;