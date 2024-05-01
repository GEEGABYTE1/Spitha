import React from 'react';

interface LinkComponent1Props {
    url: string;
    text: string;
}


const Link1Component: React.FC<LinkComponent1Props> = ({url, text}) => {
    return <div><a href={url}>{text}</a></div>;
}


export default Link1Component;