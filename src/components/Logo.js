import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <motion.div className='flex items-center justify-between mt-2'>
            <MotionLink
                href="/"
                className='w-16 h-16 flex items-center justify-center rounded-full bg-dark text-light font-bold border-solid border-transparent border-2 dark:border-light'
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: {
                        duration: 1,
                        repeat: Infinity
                    }
                }}
            >TCBD</MotionLink>
        </motion.div >
    )
}

export default Logo