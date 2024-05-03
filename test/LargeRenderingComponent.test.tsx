import React from 'react';
import { shallow } from 'enzyme';
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


function renderData(data: React.ReactNode) {
    if (typeof data === 'string' || typeof data === 'number') {
        return <p>{data}</p>;
    } else {
        return data;
    }
}


let count = 0;
let norm_component = 0 
let mycomponent = 0


describe('Test Components', () => {
    components.forEach((Component, index) => {
        it(`renders TestComponent${index + 1} without crashing`, () => {
            const renderingTime = measureRenderingTime(<Component />);
            console.log(`Rendering Time for TestComponent${index + 1}: ${renderingTime} milliseconds`);

            console.log('----------------MyComponent Renders------------');
            const renderingTimeMyComponent = measureRenderingTime(<MyComponent fetchData={() => Promise.resolve()}><Component /></MyComponent>);
            console.log(`Rendering Time of Component with MyComponent: ${renderingTimeMyComponent}`);

            norm_component += renderingTime
            mycomponent += renderingTimeMyComponent 
            count += 1;
           
        });
    });

    afterAll(() => {
        const averagePercentageIncrease = ((norm_component - mycomponent) / norm_component ) * 100;
        console.log(`Average Percentage Increase of Component Rendering with MyComponent: ${averagePercentageIncrease}%`);
    });
});




const measureRenderingTime = (component: React.ReactElement) => {
    const start = performance.now();
    shallow(component as any); 
    const end = performance.now();
    return end - start;
};