import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold font-mono text-primary tracking-tighter z-50 relative">
                        Perez<span className="text-text-main">.portfolio</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={twMerge(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    location.pathname === link.path ? "text-primary" : "text-text-muted"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-surface/50 text-text-main transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-text-main z-50 relative focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={twMerge(
                                    "text-2xl font-bold transition-colors hover:text-primary",
                                    location.pathname === link.path ? "text-primary" : "text-text-muted"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
