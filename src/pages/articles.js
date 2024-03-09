import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import image1 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import image2 from '../../public/images/articles/smooth scrolling in reactjs.png'
import image3 from '../../public/images/articles/create modal component in react using react portals.png'
import image4 from '../../public/images/articles/todo list app built using react redux and framer motion.png'
import image5 from '../../public/images/articles/What is Redux with easy explanation.png'
import image6 from '../../public/images/articles/What is higher order component in React.jpg'
import { TransitionEffect } from '@/components/TransitionEffect'


const FreamerImage = motion(Image);

const FeaturedArticle = ({ image, title, time, summery, link }) => {
    return (
        <li className='relative w-full rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:bg-dark dark:border-light'>
            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light"></div>
            <Link href={link} target="_blank" className="w-full block cursor-pointer overflow-hidden rounded-lg">
                <FreamerImage src={image} alt={title} className="w-full h-auto" whileHover={{ scale: 1.1, transition: { duration: 1 } }} />
            </Link>
            <div className="mt-4 flex w-full flex-col items-start justify-between">
                <Link href={link} target="_blank" className="hover:underline">
                    <h2 className="my-2 text-left w-full text-2xl font-bold dark:text-light">{title}</h2>
                </Link>
                <p className='text-sm mb-2 dark:text-light'>{summery}</p>
                <span className='text-primary font-semibold dark:text-primaryDark'>{time} min read</span>
            </div>
        </li>
    )
}

const MovingImage = ({ title, image, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function hundleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function hundleMouseLeave() {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link
            className='relative'
            href={link}
            target='_blank'
            onMouseMove={hundleMouse}
            onMouseLeave={hundleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline dark:text-light'>{title}</h2>
            <FreamerImage
                ref={imgRef}
                src={image}
                alt={title}
                className='w-96 h-auto hidden absolute rounded-lg z-10'
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>
    )
}

const ArticleList = ({ image, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className='border border-dark rounded-xl p-4 py-6 w-full relative flex items-center justify-between bg-light text-dark border-r-4 border-b-4 my-4 dark:border-light dark:bg-dark dark:text-light md:flex-col md:items-start'
        >
            <MovingImage image={image} title={title} link={link} />
            <span className='text-primary font-semibold min-w-max pl-4 dark:text-primaryDark md:mt-2 md:pl-0'>{date}</span>
        </motion.li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Articles | tCoderBD</title>
                <meta name="description" content="" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World!" className='!text-8xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 lg:grid-cols-1'>
                        <FeaturedArticle image={article1} title='Build A Custom Pagination Component In Reactjs From Scratch' summery='Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.' time='9' link='/' />
                        <FeaturedArticle image={article2} title='Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens' summery='Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.' time='15' link='/' />
                    </ul>
                    <h2 className='font-bold text-4xl text-center mt-32 mb-16 dark:text-light'>All Articles</h2>
                    <ul>
                        <ArticleList image={image1} title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" date="January 27, 2023" link="/" />
                        <ArticleList image={image2} title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers" date="January 30, 2023" link="/" />
                        <ArticleList image={image3} title="Creating An Efficient Modal Component In React Using Hooks And Portals" date="January 29, 2023" link="/" />
                        <ArticleList image={image4} title="Build A Fabulous Todo List App With React, Redux And Framer-Motion" date="January 28, 2023" link="/" />
                        <ArticleList image={image5} title="Redux Simplified: A Beginner's Guide For Web Developers" date="January 31, 2023" link="/" />
                        <ArticleList image={image6} title="What Is Higher Order Component (Hoc) In React?" date="January 4, 2023" link="/" />
                    </ul>
                </Layout>
            </main>
        </>
    )
}
export default articles