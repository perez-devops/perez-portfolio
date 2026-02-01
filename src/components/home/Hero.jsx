import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Database, Code } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        sphereRef.current.position.y = Math.sin(t / 1.5) / 10;
        sphereRef.current.rotation.z = t / 5;
    });

    return (
        <Sphere visible args={[1, 100, 200]} scale={2.5} ref={sphereRef}>
            <MeshDistortMaterial
                color="#0affff"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0}
                metalness={1}
                wireframe
            />
        </Sphere>
    );
};

const Hero = () => {
    const [typingState, setTypingState] = useState("hidden");
    const [skillIndex, setSkillIndex] = useState(0);
    const skills = [
        "Full Stack Developer",
        "Graphic Designer",
        "UI/UX Designer",
        "Brand Strategist"
    ];

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setTypingState("visible");
        }, 500);
        return () => clearTimeout(startTimeout);
    }, []);

    useEffect(() => {
        let timeout;
        if (typingState === "visible") {
            timeout = setTimeout(() => {
                setTypingState("exit");
            }, 3000);
        } else if (typingState === "exit") {
            timeout = setTimeout(() => {
                setSkillIndex((prev) => (prev + 1) % skills.length);
                setTypingState("visible");
            }, 800);
        }
        return () => clearTimeout(timeout);
    }, [typingState]);

    return (
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background py-20 md:py-0">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 5, 2]} intensity={1} />
                    <AnimatedSphere />
                    <OrbitControls enableZoom={false} autoRotate />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-6 text-center select-none pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pointer-events-auto"
                >
                    <h2 className="text-secondary font-mono text-xl md:text-2xl mb-4 tracking-widest uppercase font-bold">
                        Hi There!
                    </h2>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-text-main tracking-tight">
                        My name is <span className="text-primary">Godspower Emmanuel</span>.
                    </h1>

                    <div className="h-20 md:h-24 flex items-center justify-center">
                        <span className="text-3xl md:text-5xl font-bold text-text-muted mr-4">I am a</span>
                        <motion.span
                            key={skillIndex} // Key change triggers re-render for new text
                            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                            initial="hidden"
                            animate={typingState}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.08,
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        staggerChildren: 0.05,
                                        staggerDirection: -1
                                    }
                                }
                            }}
                        >
                            {Array.from(skills[skillIndex]).map((char, i) => (
                                <motion.span
                                    key={`${skillIndex}-${i}`}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 },
                                        exit: { opacity: 0, x: 10 }
                                    }}
                                    className="inline-block"
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </motion.span>
                    </div>

                    <p className="text-text-muted max-w-2xl mx-auto mb-10 text-lg mt-4">
                        Bridging the gap between functional code and stunning visuals.
                        Crafting immersive digital experiences through creative design and robust engineering.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row gap-4 justify-center items-center pointer-events-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <Link to="/contact" className="px-8 py-4 bg-primary text-background font-bold rounded-full flex items-center gap-2 hover:bg-text-main hover:text-background transition-all shadow-[0_0_20px_rgba(10,255,255,0.3)] hover:shadow-[0_0_40px_rgba(10,255,255,0.5)]">
                        Start a Project <ArrowRight size={20} />
                    </Link>
                    <button className="px-8 py-4 border border-border text-text-main font-bold rounded-full flex items-center gap-2 hover:bg-text-main/10 transition-all backdrop-blur-sm">
                        Download CV <Download size={20} />
                    </button>
                </motion.div>

                <motion.div
                    className="mt-16 flex gap-6 justify-center text-text-muted pointer-events-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <a href="https://github.com/perez-devops" className="hover:text-primary transition-colors"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/emmanuel-godspower-933ba0290/" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Database size={24} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Code size={24} /></a>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-text-muted">
                <span className="text-sm font-mono">SCROLL</span>
            </div>
        </section>
    );
};

export default Hero;
