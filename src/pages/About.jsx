import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Cpu, Coffee, Code, Zap, Database, Brain } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const data = [
    { month: 'Jan', code: 120, reading: 15, praying: 30, movies: 4 },
    { month: 'Feb', code: 132, reading: 20, praying: 35, movies: 3 },
    { month: 'Mar', code: 101, reading: 25, praying: 40, movies: 6 },
    { month: 'Apr', code: 134, reading: 18, praying: 45, movies: 5 },
    { month: 'May', code: 190, reading: 30, praying: 30, movies: 8 },
    { month: 'Jun', code: 230, reading: 35, praying: 50, movies: 4 },
    { month: 'Jul', code: 210, reading: 40, praying: 60, movies: 7 },
];

const About = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const gridColor = isDark ? '#333' : '#e2e8f0';
    const axisColor = isDark ? '#666' : '#94a3b8';
    const tooltipBg = isDark ? '#0a0a0a' : '#ffffff';
    const tooltipBorder = isDark ? '#333' : '#e2e8f0';

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-text-main to-secondary mb-6">
                        Behind the Code
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Exploring the intersection of human creativity and design.
                    </p>
                </motion.div>

                {/* Bio Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="../img/Emmanuel.png"
                            alt="Profile"
                            className="rounded-2xl shadow-2xl border border-border grayscale hover:grayscale-0 transition-all duration-500"
                            style={{ width: "500px" }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-text-muted text-lg leading-relaxed"
                    >
                        <p>
                            Hello! my name is Perez Emmanuel & I'm a <span className="text-primary font-bold">Full Stack Web Developer</span> and <span className="text-secondary font-bold">Graphic Designer</span> based in Lagos Nigeria.
                        </p>
                        <p>
                            My journey began as a child who had a passion for fixing broken toys, later on i discovered that i had a passion for building things, so i started learning how to code and design.
                        </p>
                        <p>
                            I specialize in building applications that are not just functional, but beautiful. Whether it's crafting pixel-perfect UIs, designing brand identities, or architecting scalable backends, I bring a holistic approach to every project.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-surface p-4 rounded-xl border border-border flex items-center gap-3">
                                <Code className="text-primary" />
                                <span>Technical Architecture</span>
                            </div>
                            <div className="bg-surface p-4 rounded-xl border border-border flex items-center gap-3">
                                <Zap className="text-secondary" />
                                <span>Creative Direction</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats / Philosophy */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        { title: "Continuous Learning", icon: <Brain size={32} />, desc: "Adapting to the ever-evolving tech and design landscape." },
                        { title: "Clean Code", icon: <Code size={32} />, desc: "Writing maintainable, scalable, and efficient software." },
                        { title: "Pixel Perfect", icon: <Database size={32} />, desc: "Obsessed with details, typography, and visual hierarchy." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface/30 p-8 rounded-2xl border border-border hover:bg-surface/50 transition-colors"
                        >
                            <div className="mb-4 text-primary">{item.icon}</div>
                            <h3 className="text-xl font-bold text-text-main mb-2">{item.title}</h3>
                            <p className="text-text-muted">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Viz */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-surface/20 p-8 rounded-3xl border border-border"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-text-main mb-2">Life Balance Metrics</h3>
                            <p className="text-text-muted">Harmonizing code, faith, and leisure.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#0affff]"></span>
                                <span className="text-sm text-text-muted">Code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#ffbd00]"></span>
                                <span className="text-sm text-text-muted">Reading</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#bd00ff]"></span>
                                <span className="text-sm text-text-muted">Praying</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#00ff9d]"></span>
                                <span className="text-sm text-text-muted">Movies</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                                <XAxis dataKey="month" stroke={axisColor} />
                                <YAxis stroke={axisColor} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder }}
                                />
                                <Line type="monotone" dataKey="code" stroke="#0affff" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="reading" stroke="#ffbd00" strokeWidth={3} dot={{ r: 4 }} />
                                <Line type="monotone" dataKey="praying" stroke="#bd00ff" strokeWidth={3} dot={{ r: 4 }} />
                                <Line type="monotone" dataKey="movies" stroke="#00ff9d" strokeWidth={3} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
