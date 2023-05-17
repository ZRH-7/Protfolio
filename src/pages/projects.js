import Layout from "@/components/Layout"
import Head from "next/head"
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/Icons"
import Project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import Project2 from '../../public/images/projects/portfolio-cover-image.jpg'
import Project3 from '../../public/images/projects/nft-collection-website-cover-image.jpg'
import Project4 from '../../public/images/projects/fashion-studio-website.jpg'
import Project5 from '../../public/images/projects/agency-website-cover-image.jpg'
import Project6 from '../../public/images/projects/devdreaming.jpg'

const FreamerImage = motion(Image);

const FeaturedProject = ({ type, title, summery, image, link, github }) => {
    return (
        <motion.article initial={{ y: 200 }} viewport={{ once: true }} whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }} className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl border-r-8 border-b-8 dark:border-light dark:bg-dark md:p-6 md:flex-col">
            {/* <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark"></div> */}
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg md:w-full md:mb-5">
                <FreamerImage src={image} alt={title} className="w-full h-auto" whileHover={{ scale: 1.1, transition: { duration: 1 } }} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 md:w-full">
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
                <Link href={link} target="_blank" className="hover:underline">
                    <h2 className="my-2 text-left w-full text-4xl font-bold dark:text-light">{title}</h2>
                </Link>
                <p className="w-full my-2 font-medium text-dark dark:text-light">{summery}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon className='dark:filter dark:brightness-100' /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light py-2 px-6 font-semibold border-solid border-dark border-[2px] transition hover:text-dark hover:bg-light dark:bg-light dark:text-dark dark:border-light dark:hover:text-light dark:hover:bg-dark">Visit Project</Link>
                </div>
            </div>
        </motion.article>
    )
}

const Project = ({ title, type, image, link, github }) => {
    return (
        <motion.article initial={{ y: 200 }} viewport={{ once: true }} whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }} className="relative w-full rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl border-r-8 border-b-8 dark:border-light dark:bg-dark">
            {/* <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark"></div> */}
            <Link href={link} target="_blank" className="w-full block cursor-pointer overflow-hidden rounded-lg">
                <FreamerImage src={image} alt={title} className="w-full h-auto" whileHover={{ scale: 1.1, transition: { duration: 1 } }} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </Link>
            <div className="mt-4 flex w-full flex-col items-start justify-between">
                <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
                <Link href={link} target="_blank" className="hover:underline">
                    <h2 className="my-2 text-left w-full text-4xl font-bold dark:text-light">{title}</h2>
                </Link>
                <div className="flex w-full items-center  justify-between">
                    <Link href={link} target="_blank" className="text-lg font-medium underline hover:no-underline dark:text-light">Visit</Link>
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                </div>
            </div>
        </motion.article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects | tCoderBD</title>
                <meta name="description" content="" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="py-16">
                    <AnimatedText className="!text-8xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl" text='Imagination Trumps Knowledge!' />
                    <div className="grid grid-cols-12 gap-24 md:gap-12">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Crypto Screener Application"
                                summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                image={Project1}
                                link="/"
                                type="Featured Project"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-12">
                            <Project
                                title="NFT collection Website"
                                image={Project3}
                                link="/"
                                type="Website Template"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-12">
                            <Project
                                title="Fashion Studio Website"
                                image={Project4}
                                link="/"
                                type="Website"
                                github="/"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="React Portfolio Website"
                                summery="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                                image={Project2}
                                link="/"
                                type="Portfolio Website"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Agency Website Template"
                                image={Project5}
                                link="/"
                                type="Website Template"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Blog Website"
                                image={Project6}
                                link="/"
                                type="DevDreaming"
                                github="/"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}
export default projects