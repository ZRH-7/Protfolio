import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light'>
            <Layout className='py-8 flex items-center justify-between dark:text-light'>
                <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
                <div className='flex items-center'>
                    Build with <span className='text-primary text-2xl px-2 dark:text-primaryDark'>&#9825;</span>
                    <Link href="http://tcoderbd.com" target='_blank' className='underline underline-offset-2 hover:no-underline'>tCoderBD</Link>
                </div>
                <Link className='text-right underline underline-offset-2 hover:no-underline' href="mailto:touhidul.sadeek@gmail.com">Say hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer