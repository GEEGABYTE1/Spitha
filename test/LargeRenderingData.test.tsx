import React from 'react';
import {shallow} from 'enzyme';
import MyComponent from '../src/MyComponent';

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
        <MyComponent fetchData={() => Promise.resolve()} style={{ color: `#${i}${i}${i}` }}>
          <h1>{`Test Component ${i + 1}`}</h1>
          <a href={`https://example.com/${i + 1}`}>Visit Test Component {i + 1}</a>
          <img src="image.jpg" alt="Image" />;
        </MyComponent>
      );
})



describe('Test Components', () => {
  let componentsTime = 0;
  let myComponentsTime = 0;
  let count = 0;

  components.forEach((Component, index) => {
    it(`renders TestComponent${index + 1} without crashing`, () => {
      const renderingTime = measureRenderingTime(<Component />);
      console.log(`Rendering Time for TestComponent${index + 1}: ${renderingTime} milliseconds`);

      componentsTime += renderingTime;
      count++;
    });
  });

  MyComponents.forEach((Component, index) => {
    it(`renders MyComponent${index + 1} without crashing`, () => {
      const renderingTime = measureRenderingTime(<Component />);
      console.log(`Rendering Time for MyComponent${index + 1}: ${renderingTime} milliseconds`);

      myComponentsTime += renderingTime;
      count++;
    });
  });

  afterAll(() => {
    
    const percentageIncrease = ((componentsTime - myComponentsTime) / myComponentsTime) * 100;
    console.log(`Average Percentage Increase of Data Rendering with MyComponent: ${percentageIncrease}%`);
  });
});


const measureRenderingTime = (component: React.ReactElement) => {
    const start = performance.now();
    shallow(component as any); // Use shallow rendering for performance testing
    const end = performance.now();
    return end - start;
};


