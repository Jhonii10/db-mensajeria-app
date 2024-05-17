import { clsx } from 'clsx';
import React from 'react';

const Button = ({children,className, ...rest}) => {
    return (
        <button 
            {...rest} 
            className={clsx('flex h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-gray-1000 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
            className
            )} 
            >
            {children}
        </button>
    );
}

export default Button;
