import React from 'react';
import { shallow } from 'enzyme';
import fs from 'fs';
import MyComponent from '../src/MyComponent';

type TestComponent = React.FC;

const components: TestComponent[] = Array.from({ length: 100 }, (_, i) => {
    return () => (
        <div style={{ color: `#${i}${i}${i}` }}>
            <h1>{`Test Component ${i + 1}`}</h1>
            <a href={`https://example.com/${i + 1}`}>Visit Test Component {i + 1}</a>
            <img src="image.jpg" alt="Image" />;
        </div>
    );
});

const measureRenderingTime = (component: React.ReactElement): number => {
    const start = performance.now();
    shallow(component as any); // Cast the component to 'any' type
    const end = performance.now();
    return end - start;
};

const renderingData:any = [];

describe('Test Components', () => {
    let componentsTime = 0;
    let myComponentsTime = 0;
    components.forEach((Component, index) => {
        it(`renders TestComponent${index + 1} without crashing`, () => {
            const renderingTime = measureRenderingTime(<Component />);
            const renderingTimeMyComponent = measureRenderingTime(<MyComponent fetchData={() => Promise.resolve()}><Component /></MyComponent>);

            renderingData.push({
                component: `TestComponent${index + 1}`,
                normalRenderingTime: renderingTime,
                myComponentRenderingTime: renderingTimeMyComponent
            });
            componentsTime += renderingTime
            myComponentsTime += renderingTimeMyComponent
            console.log(`Rendering Time for TestComponent${index + 1}: ${renderingTime} milliseconds`);
            console.log(`Rendering Time of Component with MyComponent: ${renderingTimeMyComponent} milliseconds`);
        });
    });

    afterAll(() => {

        const markdown = [
            '# Rendering Times for Native Data of Normal Components vs Spitha',
            '| Component | Time (milliseconds) |',
            '|-----------|---------------------|'
          ];
          renderingData.forEach((data: { component: string; normalRenderingTime: string; myComponentRenderingTime: string; }) => {
            markdown.push(`| ${data.normalRenderingTime} | ${data.myComponentRenderingTime} |`);
          });
          markdown.push(`Average Percentage Increase: ${((componentsTime - myComponentsTime ) / (componentsTime)) * 100}`)
      
          fs.writeFileSync('RenderingComponentDataTest10.md', markdown.join('\n'));
          console.log('Markdown file created with rendering times.');
        });


});
