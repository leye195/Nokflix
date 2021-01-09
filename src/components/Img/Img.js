import React from 'react';

const Img = ({className,src, alt = ''}) => {
    const [ name, ext ] = src.split('.');
    return <img className={className} src={`/images/${name}.${ext}`} alt={alt}/> 
};

export default Img;
