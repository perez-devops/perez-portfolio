import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from '../../context/ThemeContext';

const data = [
    { subject: 'Frontend', A: 140, fullMark: 150 },
    { subject: 'Backend', A: 120, fullMark: 150 },
    { subject: 'UI/UX Design', A: 135, fullMark: 150 },
    { subject: 'Graphic Design', A: 130, fullMark: 150 },
    { subject: 'Motion', A: 110, fullMark: 150 },
    { subject: 'Strategy', A: 100, fullMark: 150 },
];

const Skills = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const gridColor = isDark ? '#333' : '#e2e8f0';
    const textColor = isDark ? '#9ca3af' : '#64748b';
    const strokeColor = isDark ? '#0affff' : '#0891b2';
    const tooltipBg = isDark ? '#0a0a0a' : '#ffffff';
    const tooltipBorder = isDark ? '#333' : '#e2e8f0';

    return (
        <section className="py-20 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                        Creative & Technical Arsenal
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        A unique blend of artistic vision and engineering precision.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Radar Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-[400px] w-full bg-background/50 rounded-2xl border border-border p-4 backdrop-blur-sm"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                <PolarGrid stroke={gridColor} />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: textColor, fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                <Radar
                                    name="Skills"
                                    dataKey="A"
                                    stroke={strokeColor}
                                    strokeWidth={3}
                                    fill={strokeColor}
                                    fillOpacity={0.3}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, color: textColor }}
                                    itemStyle={{ color: strokeColor }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Skill Categories */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                Full Stack Development
                            </h3>
                            <div className="space-y-4">
                                {['React & Next.js', 'Express.js & Node.js', 'Three.js & WebGL', "Git & GitHub version control", "PostgreSQL & MongoDB"].map((skill, i) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="h-10 bg-background/50 rounded-lg flex items-center px-4 border-l-2 border-primary hover:bg-background transition-colors"
                                    >
                                        <span className="text-text-muted">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                Graphic Design
                            </h3>
                            <div className="space-y-4">
                                {['Adobe Photoshop & Illustrator', 'Figma & UI/UX', 'Motion Graphics'].map((skill, i) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="h-10 bg-background/50 rounded-lg flex items-center px-4 border-l-2 border-secondary hover:bg-background transition-colors"
                                    >
                                        <span className="text-text-muted">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
