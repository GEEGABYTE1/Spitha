import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Spitha from '../src/MyComponent';
import SimpleComponent from './SimpleComponent';
import TestComponent from './SimpleComponenWithProp';
import {render} from '@testing-library/react'

const measureRenderingTime = (component: React.ReactElement): number => {
    const start = performance.now();
    shallow(component as any); // Cast the component to 'any' type
    const end = performance.now();
    return end - start;
};

describe('SimpleComponent', () => {
    it('renders without crashing', () => {
        const renderingTime = measureRenderingTime(<SimpleComponent />);
        console.log(`Rendering time for SimpleComponent: ${renderingTime} milliseconds`);
    });
});

describe('MyComponent', () => {
    it('renders without crashing', () => {
        const renderingTime = measureRenderingTime(
            <Spitha fetchData={() => Promise.resolve([])} />
        );
        console.log(`Rendering time: ${renderingTime} milliseconds`);
    });

    it('renders with custom data', () => {
        const renderingTime = measureRenderingTime(
            <Spitha
                fetchData={() => Promise.resolve([])}
                initialData={["hello world"]}
                threshold={0.8}
            />
        );
        console.log(`Rendering time with custom data: ${renderingTime} milliseconds`);
    });

    describe('TestComponent', () => {
        it('renders without crashing', () => {
            const renderingTime = measureRenderingTime(<TestComponent message="Hello, world!" />);
            console.log(`Rendering time for TestComponent: ${renderingTime} milliseconds`);
        });
    });
    
   



    
});


