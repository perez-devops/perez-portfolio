import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';

const commands = {
    help: "Available commands: help, clear, whoami, contact, skills, secret",
    whoami: "Visitor - Curious Mind",
    contact: "Email: hello@futurist.dev",
    skills: "React, Node.js, Three.js, Graphic Design, UI/UX, Motion",
    secret: "You found the hidden glitch! 01001000 01001001",
    clear: "CLEAR"
};

const Console = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        "Welcome to the Dev.OS Terminal.",
        "Type 'help' to see available commands."
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '`' || e.key === '~') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const output = commands[cmd] || `Command not found: ${cmd}`;

            if (cmd === 'clear') {
                setHistory([]);
            } else {
                setHistory(prev => [...prev, `> ${input}`, output]);
            }
            setInput("");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 left-0 w-full h-1/2 bg-black/90 backdrop-blur-md border-b border-primary/50 z-[10000] font-mono text-green-500 shadow-2xl"
                >
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <Terminal size={16} />
                            <span className="text-sm">Dev.OS Terminal</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:text-white">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="p-4 h-[calc(100%-40px)] overflow-y-auto" onClick={() => inputRef.current?.focus()}>
                        {history.map((line, i) => (
                            <div key={i} className="mb-1">{line}</div>
                        ))}
                        <div className="flex items-center gap-2">
                            <span className="text-primary">{'>'}</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent border-none outline-none flex-grow text-green-500"
                                autoFocus
                            />
                        </div>
                        <div ref={bottomRef}></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Console;
