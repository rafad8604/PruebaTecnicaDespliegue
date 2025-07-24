import React from 'react';

interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({className = "", title}) => {
    return(
        <h1 className={`bg-gradient-to-l from-orange-500 to-orange-300 rounded-full text-2xl w-full h-11 text-white font-serif font-light flex items-center ${className}`}>
        {title}
        </h1>
    )
}

export default Title;