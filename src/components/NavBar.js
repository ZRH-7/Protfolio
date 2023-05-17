import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';
import DarkSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block w-0 bg-dark absolute dark:bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? '!w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return (
        <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}
            <span className={`h-[1px] inline-block w-0 bg-light absolute dark:bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? '!w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const router = useRouter();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backgroundColor = scrollPosition > 50 ? 'bg-light dark:bg-dark shadow-md' : 'transparent';

    return (
        <header className={`w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light lg:px-3 sticky top-0 z-50 ${backgroundColor}`}>

            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`transition-all duration-300 ease-out bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`transition-all duration-300 ease-out bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`transition-all duration-300 ease-out bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title='Home' className='mr-4' />
                    <CustomLink href="/about" title='About' className='mx-4' />
                    <CustomLink href="/projects" title='Projects' className='mx-4' />
                    <CustomLink href="/articles" title='Articles' className='ml-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a
                        className='w-6 mr-3'
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ y: -2 }}
                        href="/" target={"_blank"}><TwitterIcon /></motion.a>
                    <motion.a
                        className='w-6 mx-3'
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ y: -2 }}
                        href="/" target={"_blank"}><GithubIcon /></motion.a>
                    <motion.a
                        className='w-6 mx-3'
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ y: -2 }}
                        href="/" target={"_blank"}><LinkedInIcon /></motion.a>
                    <motion.a
                        className='w-6 mx-3'
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ y: -2 }}
                        href="/" target={"_blank"}><PinterestIcon /></motion.a>
                    <motion.a
                        className='w-6 ml-3'
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ y: -2 }}
                        href="/" target={"_blank"}><DribbbleIcon /></motion.a>

                    <DarkSwitcher />
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }} className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32'>
                        <nav className='flex items-center flex-col justify-center mb-8'>
                            <CustomMobileLink href="/" title='Home' toggle={handleClick} />
                            <CustomMobileLink href="/about" title='About' toggle={handleClick} />
                            <CustomMobileLink href="/projects" title='Projects' toggle={handleClick} />
                            <CustomMobileLink href="/articles" title='Articles' toggle={handleClick} />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap'>
                            <motion.a
                                className='w-6 mr-3 sm:mx-1'
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ y: -2 }}
                                href="/" target={"_blank"}><TwitterIcon /></motion.a>
                            <motion.a
                                className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ y: -2 }}
                                href="/" target={"_blank"}><GithubIcon /></motion.a>
                            <motion.a
                                className='w-6 mx-3 sm:mx-1'
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ y: -2 }}
                                href="/" target={"_blank"}><LinkedInIcon /></motion.a>
                            <motion.a
                                className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ y: -2 }}
                                href="/" target={"_blank"}><PinterestIcon /></motion.a>
                            <motion.a
                                className='w-6 ml-3 sm:mx-1'
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ y: -2 }}
                                href="/" target={"_blank"}><DribbbleIcon /></motion.a>

                            <DarkSwitcher className="sm:mx-1" />
                        </nav>
                    </motion.div>
                    : null
            }

            <div className='absolute left-[50%] top-[3px] md:top-[-3px] translate-x-[-50%] z-50 lg:top-0'>
                <Logo />
            </div>

        </header >
    )
}

export default NavBar