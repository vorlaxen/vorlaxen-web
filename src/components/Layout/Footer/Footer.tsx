import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logos/Vorlaxen.png';
import FooterNavigation from './Nav/FooterNav';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white dark:bg-black">
            <div className="mx-auto max-w-screen-2xl px-4 py-10 md:py-12 lg:py-14 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                    <div className="flex-shrink-0 mb-8 md:mb-0">
                        <Link to="/" className="flex items-center gap-3" aria-label="Home - Vorlaxen">
                            <img
                                src={Logo}
                                alt="Vorlaxen Logo"
                                loading="lazy"
                                className="w-64 h-24 object-cover"
                            />
                        </Link>
                    </div>
                    <div className="flex-grow" />
                    <FooterNavigation />
                </div>

                <hr className="border-neutral-200 dark:border-neutral-700/20 mt-4" />
                <p className="text-sm text-gray-500 dark:text-neutral-400 text-center mt-2">
                    © {currentYear}{' '}
                    <a
                        href="https://vorlaxen.com"
                        className="hover:underline underline-offset-4 transition-colors duration-200 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vorlaxen
                    </a>
                    . All rights reserved. 
                    <p className='text-center mt-1.5'>Unauthorized use or reproduction of this content is prohibited.</p>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
