import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNavSections } from './FooterNavItems';

const FooterNav: React.FC = () => {
    return (
        <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 max-w-xl flex-grow w-full mx-auto md:mx-0"
        >
            {FooterNavSections.map((section) => (
                <div key={section.title} className="flex flex-col">
                    <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white uppercase">
                        {section.title}
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-neutral-400 text-sm">
                        {section.items.map(({ label, href, external }) => (
                            <li key={label}>
                                {external ? (
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline underline-offset-2 transition-colors duration-200"
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <Link
                                        to={href}
                                        className="hover:underline underline-offset-2 transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
};

export default FooterNav;