<<<<<<< HEAD
import { type RefObject } from 'react'
import { Trans } from 'react-i18next'
import AnimatedTagline from './TaglineRender'
import { motion, useScroll, useTransform, useViewportScroll, type Variants } from "framer-motion"
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
=======
import { useEffect, useRef, type RefObject } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import AnimatedTagline from './TaglineRender'
import { MdEmail } from "react-icons/md"
import { motion, useAnimation, useInView, useScroll, useTransform, useViewportScroll, type Variants } from "framer-motion"
import clsx from 'clsx'
import smartScrollTo from '@/components/Common/SmartScroll'
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { IoIosContact } from 'react-icons/io'

const StatusBadge = () => (
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-300/50 dark:bg-neutral-950/50 border border-neutral-300/20 mb-4 select-none">
        <span className='relative flex h-2 w-2'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-sm dark:text-neutral-400">Software Developer</span>
    </div>
)
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc

const HeroTitle = () => (
    <h1 className="text-[5rem] sm:text-[5.8rem] font-medium tracking-tight text-gray-900 dark:text-neutral-200 leading-tight drop-shadow-sm min-h-[5rem]">
        <Trans
            i18nKey="home.hero.title"
            ns="pages"
            components={{
                1: (<span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 dark:from-cyan-300 dark:via-violet-300 dark:to-fuchsia-400" />)
            }}
        />
    </h1>
)

const HeroSubtitle = () => (
    <p className='text-lg sm:text-xl dark:text-neutral-400 max-w-lg mx-auto text-center leading-relaxed mt-12'>
        <Trans
            i18nKey="home.hero.subtitle"
            ns="pages"
            components={{
                1: (<span className="text-black dark:text-white font-medium" />)
            }}
        />
    </p>
)

<<<<<<< HEAD
=======
const CTA = ({ scroll }: any) => {
    const { t: tPages } = useTranslation("pages")
    return (
        <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            className={clsx(
                'inline-flex items-center gap-4 px-14 py-3 rounded-xl mt-12 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer select-none',
                'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
            )}
            onClick={() => smartScrollTo({ to: scroll + 100 })}
        >
            <IoIosContact className="w-6 h-6" />
            <span className="font-semibold text-lg tracking-wide">{tPages("home.hero.cta")}</span>
        </motion.div>
    )
}

>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
const LinksList: { name: string; icon: any; to: string }[] = [
    {
        name: "Github",
        icon: <FaGithub />,
        to: "https://github.com/vorlaxen"
    },
    {
        name: "Youtube",
        icon: <FaYoutube />,
        to: "https://www.youtube.com/@vorlaxen"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        to: "https://www.instagram.com/vorlaxen"
    },
    {
        name: "X",
        icon: <FaTwitter />,
        to: "https://www.x.com/vorlaxen"
    }
]

const Links = () => {
    return (
        <div className='flex items-center justify-center gap-10 max-w-xs mt-8 select-none'>
            {LinksList.map((link, i) => (
                <button
                    key={i}
                    className='flex items-center justify-center text-2xl 
                               transition-all duration-300 hover:drop-shadow-2xl hover:scale-110'
                    onClick={() => window.open(link.to, "_blank")}
                >
                    {link.icon}
                </button>
            ))}
        </div>
    );
};

interface HeroProps {
    scrollToRef: RefObject<HTMLDivElement | null>;
}

const HeroSection = ({ scrollToRef }: HeroProps) => {
    const { scrollY } = useScroll();

<<<<<<< HEAD
    const scale = useTransform(scrollY, [0, 300], [1, 0.80]);
=======
    const scale = useTransform(scrollY, [0, 300], [1, 0.92]);
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const initialAnimation: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
<<<<<<< HEAD
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.95, ease: 'easeOut' } }
=======
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
    };

    return (
        <motion.section
            variants={initialAnimation}
            initial="hidden"
            animate="visible"
            style={{ scale, opacity }}
            className="w-full relative min-h-screen flex flex-col items-center text-center overflow-hidden mt-24 will-change-transform"
        >
<<<<<<< HEAD
            <HeroTitle />
            <AnimatedTagline />
            <HeroSubtitle />
=======
            <StatusBadge />
            <HeroTitle />
            <AnimatedTagline />
            <HeroSubtitle />
            <CTA scroll={scrollToRef?.current?.scrollHeight} />
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
            <Links />
        </motion.section>
    )
}


export default HeroSection
