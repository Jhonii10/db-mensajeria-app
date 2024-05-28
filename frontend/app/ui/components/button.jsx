import { clsx } from 'clsx';
import React from 'react';

const Button = ({children,className,pending, ...rest}) => {
    
    return (
        <button 
            {...rest}
            type={pending ? 'button' : 'submit'}
            disabled={pending}
            className={clsx('flex h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-gray-1000 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
            className
            )} 
            >
            {pending ? (
                <div className='w-full flex justify-center'>
        <svg
          className="animate-spin ml-2 h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg></div>
      ):children}
        </button>
    );
}

export default Button;
