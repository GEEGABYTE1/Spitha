import React from 'react'; 

interface LinkComponent3Props {
    url: string;
    text: string;
}

const LinkComponent3: React.FC<LinkComponent3Props> = ({url, text}) => {
    return <div><a href={url} target="_blank" rel="noopener noreferrer">{text}</a></div>
}

export default LinkComponent3