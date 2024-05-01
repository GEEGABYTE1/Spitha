import React, { useCallback, useMemo, useState } from 'react';
import { debounce } from 'lodash'; // Assuming lodash is added to your project
import InfiniteLoader from './InfiniteLoader';
import { useQueueState } from './useQueueState';

const useDebouncedEffect = (effect, delay, deps) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps || [], delay]);
};

const MyComponent = React.memo(({ fetchData, initialData = [], threshold = 0.8 }) => {
    const [data, enqueueDataUpdate] = useQueueState(initialData);

    // Memoized update function
    const updateData = useCallback((newData) => {
        enqueueDataUpdate(prevData => [...prevData, ...newData]);
    }, [enqueueDataUpdate]);

    // Debouncing the fetch data function
    const debouncedLoadMore = useCallback(debounce(async () => {
        const newData = await fetchData();
        updateData(newData);
    }, 300), [fetchData, updateData]);

    // useMemo for dependencies that seldom change
    const loadMore = useMemo(() => debouncedLoadMore, [debouncedLoadMore]);

    return (
        <InfiniteLoader loadMore={loadMore} threshold={threshold}>
            <h1>Hello</h1>
        </InfiniteLoader>
    );
});

export default MyComponent;
