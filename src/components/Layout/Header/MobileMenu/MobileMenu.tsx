import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Vorlaxen from '@/assets/images/logos/Vorlaxen.png';
import NavMobile from './MobileNav';
import { motion, AnimatePresence } from 'framer-motion';

type MobileMenuProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const slideInVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: '0%', opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
};

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Blur Layer */}
                    <motion.div
                        id="mobile-navigation"
                        className="fixed inset-0 z-40 backdrop-blur-md bg-black/40 dark:bg-white/10"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />

                    {/* Slide-in Menu Panel */}
                    <motion.div
                        className="fixed inset-y-0 left-0 z-50 w-4/6 h-screen bg-white dark:bg-black bg-opacity-85 dark:bg-opacity-85 flex flex-col items-center px-4 py-6"
                        variants={slideInVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <Link to="/" className="flex items-center gap-4 text-xl font-semibold text-black dark:text-white mb-6">
                            <img
                                loading="lazy"
                                src={Vorlaxen}
                                alt="PulseID Logo"
                                className="w-36 h-8 object-cover"
                            />
                        </Link>

                        <NavMobile />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
