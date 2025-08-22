import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import Nav from './Nav/Nav';
import { throttle } from 'lodash';
import { Link } from 'react-router-dom';
import { CgClose, CgMenu } from 'react-icons/cg';
import Logo from '@/assets/images/logos/VorlaxenSmall.png'
import MobileMenu from './MobileMenu/MobileMenu';
<<<<<<< HEAD
import { useTheme } from '@/hooks/useTheme';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
=======
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc

const SCROLL_THRESHOLD = 30;

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [IsOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
<<<<<<< HEAD
    const { toggleTheme, theme } = useTheme();
=======
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc

    useEffect(() => {
        const handleScroll = throttle(() => {
            setScrolled(window.scrollY > SCROLL_THRESHOLD);
        }, 100);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            role="banner"
            className={clsx(
                "sticky top-0 left-0 z-[1200] w-full min-h-[64px] transition-shadow duration-300",
<<<<<<< HEAD
                scrolled && "bg-neutral-200/20 dark:bg-black/25 backdrop-blur-md border-b dark:border-neutral-900"
=======
                scrolled && "bg-neutral-200/50 dark:bg-black/25 backdrop-blur-md border-b dark:border-neutral-900"
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
            )}
        >
            <div className="container mx-auto w-full max-w-screen-xl flex items-center justify-between h-full px-4 sm:px-6 lg:px-0 py-2.5 ">
                <div className="flex-shrink-0">
                    <Link to="/" className="flex items-center gap-4" aria-label="Home - Vorlaxen">
                        <img
                            loading="lazy"
                            src={Logo}
                            alt="Vorlaxen Logo"
<<<<<<< HEAD
                            className="w-8 h-8 object-cover invert dark:invert-0"
=======
                            className="w-8 h-8 object-cover"
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
                        />
                    </Link>
                </div>

                <Nav />

                <div className="flex items-center gap-4">
                    <button
<<<<<<< HEAD
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="flex h-10 w-10 items-center justify-center rounded-full transition duration-300 text-neutral-500 hover:text-black dark:hover:text-white"
                    >
                        {theme === 'light' ? <MdDarkMode size={22} /> : <MdLightMode size={22} />}
=======
                        className="hidden md:flex items-center justify-center h-10 w-32 px-4 rounded-2xl transition duration-300 dark:text-neutral-300 text-neutral-600 hover:text-black dark:hover:text-white font-normal text-sm"
                        aria-label="Sign in"
                    >

>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
                    </button>

                    <button
                        onClick={() => setIsOpenMobileMenu(!IsOpenMobileMenu)}
                        aria-label={IsOpenMobileMenu ? "Close mobile menu" : "Open mobile menu"}
                        aria-expanded={IsOpenMobileMenu}
                        aria-controls="mobile-navigation"
                        className={clsx(
                            'absolute right-4 top-4 z-50 flex md:hidden h-10 w-10 rounded-lg transition duration-300',
                            'font-semibold text-3xl',
                            'items-center justify-center',
                            'text-neutral-400 hover:text-black dark:hover:text-white'
                        )}
                    >
                        {IsOpenMobileMenu ? <CgClose /> : <CgMenu />}
                    </button>
                </div>
            </div>

            <MobileMenu
                isOpen={IsOpenMobileMenu}
                setIsOpen={setIsOpenMobileMenu}
                aria-hidden={!IsOpenMobileMenu}
            />
        </header>
    )
}

export default React.memo(Header);
