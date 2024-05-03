import React from 'react';
import { shallow } from 'enzyme';
import LinkComponent1 from './components/LinkComponent1';
import LinkComponent2 from './components/LinkComponent2';
import LinkComponent3 from './components/LinkComponent3';
import Spitha from '../src/MyComponent';


const measureRenderingTime = (component: React.ReactElement): number => {
    const start = performance.now();
    shallow(component as any); // Cast the component to 'any' type
    const end = performance.now();
    return end - start;
};

describe('Link Components', () => {
    it('LinkComponent1 renders a basic link without crashing', () => {
        const renderingTime = measureRenderingTime (
            <LinkComponent1 url="https://example.com" text="Visit Example" />
        )
        console.log(`Rendering Time for LinkComponent1: ${renderingTime} milliseconds`)
    });

    it('LinkComponent2 renders a styled link without crashing', () => {
        const renderingTime = measureRenderingTime (
            <LinkComponent2 url="https://example.com" text="Visit Styled Example" className="custom-class" />
        )
        console.log(`Rendering Time for LinkComponent2: ${renderingTime} milliseconds`)
    });

    it('LinkComponent3 renders an external link without crashing', () => {
        const renderingTime = measureRenderingTime (
            <LinkComponent2 url="https://example.com" text="Visit Styled Example" className="custom-class" />
        )
        console.log(`Rendering Time for LinkComponent2: ${renderingTime} milliseconds`)
    });
});


describe('MyComponent with Links', () => {
    it('renders MyComponent with LinkComponent1 without crashing', () => {
        const renderingTime = measureRenderingTime(
            <Spitha fetchData={() => Promise.resolve()}>
                <div>Some text</div>
                <img src="image.jpg" alt="Image" />
                <a href="https://example.com">Link</a>
            </Spitha>
        );
        console.log(`Rendering time for MyComponent with LinkComponent1: ${renderingTime} milliseconds`);
    });

    it('renders MyComponent with LinkComponent2 without crashing', () => {
        const renderingTime = measureRenderingTime(
            <Spitha fetchData={() => Promise.resolve([])}>
                <LinkComponent3 url="https://external.com" text="Go to External" />
            </Spitha>
        );
        console.log(`Rendering time for MyComponent with LinkComponent2: ${renderingTime} milliseconds`);
    });

    it('renders MyComponent with LinkComponent3 without crashing', () => {
        const renderingTime = measureRenderingTime(
            <Spitha fetchData={() => Promise.resolve([])}>
                <LinkComponent3 url="https://external.com" text="Go to External" />
            </Spitha>
        );
        console.log(`Rendering time for MyComponent with LinkComponent3: ${renderingTime} milliseconds`);
    });
})

