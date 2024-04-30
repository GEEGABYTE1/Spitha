import {useState, useRef, useEffect, useCallback} from 'react';

type UpdateFunction<T> = (prev: T) => T; 

export function useQueueState<T>(initialValue: T): [T, (updateFn: UpdateFunction<T>) => void] {
    const [state, setState] = useState<T>(initialValue);
    const queue = useRef<UpdateFunction<T>[]>([]);

    const processQueue = useCallback(() => {
        setState(prev => {
            let newState = prev;
            while (queue.current.length > 0) {
                const update = queue.current.shift();
                if (update) {
                    newState = update(newState);
                }
            }

            return newState;
        })
    }, [])

    useEffect(() => {
        if (queue.current.length > 0) {
            setTimeout(processQueue, 0);
        }
    }, [processQueue]);

    const enqueueState = useCallback((updateFn: updateFunction<T>) => {
        queue.current.push(updateFn);
    }, [])
    
    return [state, enqueueState];
}