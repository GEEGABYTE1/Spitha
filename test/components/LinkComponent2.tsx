import React from 'react';

interface LinkComponent2Props {
    url: string;
    text: string;
    className?:string;
}

const LinkComponent2: React.FC<LinkComponent2Props> = ({url, text, className}) => {
    return <div><a href={url} className={className}>{text}</a></div>
}

export default LinkComponent2;