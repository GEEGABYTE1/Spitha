import { useState, useRef, useEffect, useCallback } from 'react';

type UpdateFunction<T> = (prev: T) => T;

class PriorityQueue<T> {
    private elements: { priority: number; value: T }[];

    constructor() {
        this.elements = [];
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    enqueue(element: T, priority: number): void {
        this.elements.push({ priority, value: element });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue(): T | undefined {
        return this.elements.shift()?.value;
    }

    peek(): T | undefined {
        return this.elements[0]?.value;
    }

    size(): number {
        return this.elements.length;
    }
}

export function useQueueState<T>(initialValue: T): [T, (updateFn: UpdateFunction<T>) => void] {
    const [state, setState] = useState<T>(initialValue);
    const updateQueue = useRef<PriorityQueue<UpdateFunction<T>>>(new PriorityQueue<UpdateFunction<T>>());

    useEffect(() => {
        const applyBatchedUpdates = () => {
            setState(prevState => {
                let newState = prevState;
                const batchSize = Math.min(updateQueue.current.size(), 10); 
                for (let i = 0; i < batchSize; i++) {
                    const updateFn = updateQueue.current.dequeue();
                    if (updateFn) {
                        newState = updateFn(newState);
                    }
                }
                return newState;
            });
        };

        
    }, []);

    const enqueueState = useCallback((updateFn: UpdateFunction<T>) => {
        updateQueue.current.enqueue(updateFn, 0); 
    }, []);

    return [state, enqueueState];
}
