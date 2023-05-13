import React from 'react';
import { DevText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-48 h-48 flex items-center justify-center relative'>
                <DevText className={"fill-dark animate-spin-slow dark:fill-light"} />
                <Link className='absolute transition-all left-[50%] translate-x-[-50%] bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full flex items-center justify-center font-semibold hover:bg-light hover:text-dark dark:text-dark dark:bg-light dark:border-light dark:hover:bg-dark dark:hover:text-light' href={'mailto:touhidul.sadeek@gmail.com'}>Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe