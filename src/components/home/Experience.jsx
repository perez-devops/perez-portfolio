import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Front-end Developer Intern",
        company: "The Curve Africa",
        period: "2021-2023",
        description: "I learned and implemented the latest web development technologies and frameworks, including React, Node.js, and PostgreSQL. I also gained experience in responsive design and user experience (UX) design.",
        tech: ["React", "Node.js", "PostgreSQL", "User Testing"]
    },
    {
        id: 2,
        role: "Brand Strategist/Designer",
        company: "Popla",
        period: "2023-2024",
        description: "Popla is a Gen Z music brand. Whose focus is becoming a bridge between the music industry and the Gen Z audience.",
        tech: ["Adobe Premiere", "Adobe After Effects", "Adobe Photoshop", "User Testing"]
    },
    {
        id: 3,
        role: "Senior Backend Developer",
        company: "Oduduwa University Alumni Association",
        period: "2025",
        description: "Spear headed the backend team to create Oduduwa University Alumni Association web application which created a voice for the Alumni and lead to student scholarship",
        tech: ["React", "Express.js", "Node.js", "PostgreSQL"]
    },

    {
        id: 3,
        role: "Graphic Designer",
        company: "Tiaago",
        period: "2025-Present",
        description: "I have been learning and implementing the latest graphic design technologies and frameworks, including Photoshop, Illustrator, and Principle. I also gained experience in responsive design and user experience (UX) design.",
        tech: ["Photoshop", "Illustrator", "Principle", "User Testing"]
    },
    {
        id: 4,
        role: "Senior Fullstack Developer",
        company: "UniCaba",
        period: "2026 - present",
        description: "Unicaba is a campus marketplace for students to buy and sell goods and services. I have been learning and implementing the latest web development technologies and frameworks, including React, Node.js, and PostgreSQL. I also gained experience in responsive design and user experience (UX) design.",
        tech: ["React", "Node.js", "PostgreSQL", "Data Processing and Management"]
    },

];

const ExperienceCard = ({ exp, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
        >
            {/* Timeline Line/Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#0affff]"></div>

            {/* Content */}
            <div className="w-full md:w-5/12 ml-12 md:ml-0 pl-4 md:pl-0">
                <div className="bg-surface/50 p-6 rounded-xl border border-border hover:border-primary/50 transition-colors backdrop-blur-sm group-hover:bg-surface/80">
                    <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Briefcase size={16} className="shrink-0" />
                        <h3 className="font-bold text-xl truncate">{exp.role}</h3>
                    </div>
                    <div className={`flex items-center gap-2 text-text-muted text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Calendar size={14} className="shrink-0" />
                        <span className="shrink-0">{exp.period}</span>
                        <span className="mx-2 shrink-0">|</span>
                        <span className="truncate">{exp.company}</span>
                    </div>
                    <p className="text-text-muted mb-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.tech.map(t => (
                            <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);

    return (
        <section className="py-20 relative" ref={containerRef}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
                        Professional Journey
                    </h2>
                    <p className="text-text-muted">
                        Evolution through code, design, and innovation.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
