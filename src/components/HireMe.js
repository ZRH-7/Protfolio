import React from 'react';
import { DevText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden lg:bottom-auto lg:-top-2 lg:left-auto lg:right-0 lg:absolute'>
            <div className='w-48 h-48 flex items-center justify-center relative lg:w-24 lg:h-24'>
                <DevText className={"fill-dark animate-spin-slow dark:fill-light"} />
                <Link className='absolute transition-all left-[50%] translate-x-[-50%] bg-dark text-light shadow-lg border border-solid border-dark w-20 h-20 rounded-full flex items-center justify-center font-semibold hover:bg-light hover:text-dark shadow-dark/25 dark:text-dark dark:bg-light dark:border-light dark:hover:bg-dark dark:hover:text-light dark:shadow-light/25 lg:w-10 lg:h-10 lg:text-[10px]' href={'mailto:touhidul.sadeek@gmail.com'}>Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe