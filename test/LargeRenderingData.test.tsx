import React from 'react';
import { shallow } from 'enzyme';
import fs from 'fs';
import Spitha from '../src/MyComponent';

type TestComponent = React.FC;
type MyComponentTest = React.FC;

const components: TestComponent[] = Array.from({ length: 100 }, (_, i) => {
  return () => (
    <div style={{ color: `#${i}${i}${i}` }}>
      <h1>{`Test Component ${i + 1}`}</h1>
      <a href={`https://example.com/${i + 1}`}>Visit Test Component {i + 1}</a>
      <img src="image.jpg" alt="Image" />;
    </div>
  );
});

const MyComponents: MyComponentTest[] = Array.from({length: 100}, (_, i) => {
  return () => (
    <Spitha fetchData={() => Promise.resolve()} style={{ color: `#${i}${i}${i}` }}>
      <h1>{`Test Component ${i + 1}`}</h1>
      <a href={`https://example.com/${i + 1}`}>Visit Test Component {i + 1}</a>
      <img src="image.jpg" alt="Image" />;
    </Spitha>
  );
});

const renderingData:any = [];

const measureRenderingTime = (component: React.ReactElement) => {
  const start = performance.now();
  shallow(component as any); // Use shallow rendering for performance testing
  const end = performance.now();
  return end - start;
};

describe('Test Components', () => {
  let componentsTime = 0;
  let myComponentsTime = 0;

  components.forEach((Component, index) => {
    it(`renders TestComponent${index + 1} without crashing`, () => {
      const renderingTime = measureRenderingTime(<Component />);
      console.log(`Rendering Time for TestComponent${index + 1}: ${renderingTime} milliseconds`);

      componentsTime += renderingTime;
      renderingData.push({
        component: `TestComponent${index + 1}`,
        time: renderingTime
      });
    });
  });

  MyComponents.forEach((Component, index) => {
    it(`renders MyComponent${index + 1} without crashing`, () => {
      const renderingTime = measureRenderingTime(<Component />);
      console.log(`Rendering Time for MyComponent${index + 1}: ${renderingTime} milliseconds`);

      myComponentsTime += renderingTime;
      renderingData.push({
        component: `MyComponent${index + 1}`,
        time: renderingTime
      });
    });
  });

  afterAll(() => {
    const markdown = [
      '# Rendering Times for Native Data of Normal Components vs Spitha',
      '| Component | Time (milliseconds) |',
      '|-----------|---------------------|'
    ];
    renderingData.forEach((data: { component: string; time: string; }) => {
      markdown.push(`| ${data.component} | ${data.time} |`);
    });
    markdown.push(`Average Percentage Increase: ${((componentsTime - myComponentsTime ) / (componentsTime)) * 100}`)

    //fs.writeFileSync('RenderingNativeDataTest10.md', markdown.join('\n'));
    console.log('Markdown file created with rendering times.');
  });
});
