import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Neon E-Commerce",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        description: "A futuristic shopping platform built with Next.js 14, Stripe, and Tailwind CSS.",
        tech: ["Next.js", "Stripe", "Zustand"],
        links: { demo: "#", repo: "#" }
    },
    {
        id: 2,
        title: "Fintech App Redesign",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        description: "Complete user experience overhaul for a mobile banking application focusing on accessibility.",
        tech: ["Figma", "Prototyping", "Design Systems"],
        links: { demo: "#", repo: "#" }
    },
    {
        id: 3,
        title: "Apex Brand Identity",
        category: "Graphic Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b7993125486?w=800&q=80",
        description: "Comprehensive visual identity system including logo, typography, and marketing assets.",
        tech: ["Illustrator", "Photoshop", "Branding"],
        links: { demo: "#", repo: "#" }
    },
    {
        id: 4,
        title: "SaaS Dashboard UI",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        description: "High-performance analytics dashboard with customizable widgets and dark mode.",
        tech: ["React", "Recharts", "Firebase"],
        links: { demo: "#", repo: "#" }
    },
    {
        id: 5,
        title: "Motion Art Series",
        category: "Graphic Design",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        description: "A collection of abstract 3D motion graphics exploring light and geometry.",
        tech: ["Blender", "After Effects", "Cinema 4D"],
        links: { demo: "#", repo: "#" }
    }
];

const TiltCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative group h-[400px] w-full rounded-xl bg-surface border border-border overflow-hidden"
        >
            <div
                style={{ transform: "translateZ(75px)" }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"

            >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 flex flex-col justify-end transform transition-all duration-300">
                <div style={{ transform: "translateZ(50px)" }}>
                    <div className="flex justify-between items-start mb-2 min-w-0">
                        <div className="min-w-0 pr-4">
                            <span className="text-primary text-xs font-bold tracking-wider uppercase mb-1 block">{project.category}</span>
                            <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors truncate">{project.title}</h3>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <a href={project.links.repo} className="text-text-muted hover:text-text-main transition-colors"><Github size={20} /></a>
                            <a href={project.links.demo} className="text-text-muted hover:text-text-main transition-colors"><ExternalLink size={20} /></a>
                        </div>
                    </div>

                    <p className="text-text-muted text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="text-xs px-2 py-1 rounded bg-surface/80 text-text-muted border border-border backdrop-blur-sm">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Web Development", "UI/UX Design", "Graphic Design"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-4 flex items-center gap-3">
                            <Layers className="text-primary" /> Selected Works
                        </h2>
                        <p className="text-text-muted max-w-xl">
                            Showcasing the synthesis of complex algorithms and immersive interfaces.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? "bg-primary text-background shadow-[0_0_15px_rgba(10,255,255,0.4)]"
                                    : "bg-surface text-text-muted hover:text-text-main hover:bg-surface/80"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
                >
                    {filteredProjects.map(project => (
                        <TiltCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
