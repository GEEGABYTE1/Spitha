import React from 'react';

interface TestComponentProps {
    message: string;
}


const TestComponent: React.FC<TestComponentProps> = ({message}) => {
    return <div>`{message}`</div>;
}


export default TestComponent;