import React, { useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaPalette, FaVideo, FaShieldAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type BadgeProps = { text: string; direction: number };
const Badge: React.FC<BadgeProps> = ({ text, direction }) => (
    <motion.span
        layout
        initial={{ opacity: 0, x: 10 * direction, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -10 * direction, scale: 0.9 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0
        border-gray-300 dark:border-neutral-700
        bg-white dark:bg-black text-gray-800 dark:text-white
        transition-colors duration-200"
    >
        {text}
    </motion.span>
);

type CardProps = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    badges: string[];
    direction: number;
};
const Card: React.FC<CardProps> = ({ icon, title, subtitle, description, badges, direction }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative p-4 rounded-lg border border-gray-200 dark:border-neutral-800 
                   bg-white dark:bg-black
                   hover:shadow-md transition-all"
    >
        <div className="flex items-center gap-4 mb-2">
            <div className="flex-shrink-0 w-12 h-12 rounded-md flex items-center justify-center">
                {icon}
            </div>
            <div className="text-start">
                <h5 className="font-medium text-gray-900 dark:text-white">{title}</h5>
                <p className="text-sm pl-1.5 text-gray-600 dark:text-neutral-300">{subtitle}</p>
            </div>
        </div>
        <p className="text-sm text-gray-700 dark:text-neutral-400 text-start mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
            <AnimatePresence>
                {badges.map((b) => (
                    <Badge key={b} text={b} direction={direction} />
                ))}
            </AnimatePresence>
        </div>
    </motion.div>
);

interface Card {
    icon: JSX.Element;
    title: string;
    subtitle: string;
    description: string;
    badges: string[];
}

const BadgeSection: React.FC = () => {
    const [tab, setTab] = useState<"education" | "experience">("education");
    const [direction, setDirection] = useState(1);
    const { t: tPages } = useTranslation('pages');

    const educationCards: Card[] = [
        {
            icon: <FaGraduationCap size={28} className="text-indigo-500" />,
            title: tPages("about.badge.tabs.education.0.title"),
            subtitle: tPages("about.badge.tabs.education.0.subtitle"),
            description: tPages("about.badge.tabs.education.0.description"),
            badges: tPages("about.badge.tabs.education.0.badges", { returnObjects: true }) as string[],
        },
        {
            icon: <FaLaptopCode size={28} className="text-green-500" />,
            title: tPages("about.badge.tabs.education.1.title"),
            subtitle: tPages("about.badge.tabs.education.1.subtitle"),
            description: tPages("about.badge.tabs.education.1.description"),
            badges: tPages("about.badge.tabs.education.1.badges", { returnObjects: true }) as string[],
        },
        {
            icon: <FaPalette size={28} className="text-pink-500" />,
            title: tPages("about.badge.tabs.education.2.title"),
            subtitle: tPages("about.badge.tabs.education.2.subtitle"),
            description: tPages("about.badge.tabs.education.2.description"),
            badges: tPages("about.badge.tabs.education.2.badges", { returnObjects: true }) as string[],
        },
    ];

    const experienceCards: Card[] = [
        {
            icon: <FaVideo size={28} className="text-red-500" />,
            title: tPages("about.badge.tabs.experience.0.title"),
            subtitle: tPages("about.badge.tabs.experience.0.subtitle"),
            description: tPages("about.badge.tabs.experience.0.description"),
            badges: tPages("about.badge.tabs.experience.0.badges", { returnObjects: true }) as string[],
        },
        {
            icon: <FaShieldAlt size={28} className="text-blue-500" />,
            title: tPages("about.badge.tabs.experience.1.title"),
            subtitle: tPages("about.badge.tabs.experience.1.subtitle"),
            description: tPages("about.badge.tabs.experience.1.description"),
            badges: tPages("about.badge.tabs.experience.1.badges", { returnObjects: true }) as string[],
        },
    ];

    const cards = tab === "education" ? educationCards : experienceCards;

    const handleTabChange = (newTab: "education" | "experience") => {
        if (newTab !== tab) {
            setDirection(newTab === "education" ? -1 : 1);
            setTab(newTab);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-start mb-4">{tPages("about.badge.title")}</h3>
            <p className="text-gray-700 dark:text-neutral-300 text-start mb-6">
                {tPages("about.badge.subtitle")}
            </p>

<<<<<<< HEAD
            <div className="flex border-b border-neutral-400 dark:border-neutral-200 mb-6 will-change-transform transition-all transform">
                <button
                    className={`px-4 py-2 font-medium ${tab === "education" ? "text-gray-900 dark:text-white border-b-2 border-neutral-700 dark:border-neutral-200" : "text-gray-500 dark:text-neutral-400"}`}
=======
            <div className="flex border-b border-neutral-400 dark:border-white mb-6 will-change-transform transition-all transform">
                <button
                    className={`px-4 py-2 font-medium ${tab === "education" ? "text-gray-900 dark:text-white border-b-2 border-neutral-700 dark:border-white" : "text-gray-500 dark:text-neutral-400"}`}
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
                    onClick={() => handleTabChange("education")}
                >
                    {tPages("about.badge.tabnames.education")}
                </button>
                <button
<<<<<<< HEAD
                    className={`px-4 py-2 font-medium ${tab === "experience" ? "text-gray-900 dark:text-white border-b-2 border-neutral-700 dark:border-neutral-200" : "text-gray-500 dark:text-neutral-400"}`}
=======
                    className={`px-4 py-2 font-medium ${tab === "experience" ? "text-gray-900 dark:text-white border-b-2 border-neutral-700 dark:border-white" : "text-gray-500 dark:text-neutral-400"}`}
>>>>>>> 21d5e6f26547dcd89c2455a5082e1d1604b994fc
                    onClick={() => handleTabChange("experience")}
                >
                    {tPages("about.badge.tabnames.experience")}
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <AnimatePresence initial={false} mode="popLayout">
                    {cards.map((c, i) => (
                        <Card key={i} {...c} direction={direction} />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default BadgeSection;
