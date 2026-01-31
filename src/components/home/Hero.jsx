import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Database, Code } from 'lucide-react';
import { useRef } from 'react';

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
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
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
            <div className="relative z-10 container mx-auto px-6 text-center select-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-mono text-lg mb-4 tracking-widest uppercase">
                        Full Stack Developer & Graphic Designer
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-text-main via-primary to-secondary">
                        The Perez Emmanuel<br />Building the Future.
                    </h1>
                    <p className="text-text-muted max-w-2xl mx-auto mb-10 text-lg">
                        Bridging the gap between functional code and stunning visuals.
                        Crafting immersive digital experiences through creative design and robust engineering.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <button className="px-8 py-4 bg-primary text-background font-bold rounded-full flex items-center gap-2 hover:bg-text-main hover:text-background transition-all shadow-[0_0_20px_rgba(10,255,255,0.3)] hover:shadow-[0_0_40px_rgba(10,255,255,0.5)]">
                        Start a Project <ArrowRight size={20} />
                    </button>
                    <button className="px-8 py-4 border border-border text-text-main font-bold rounded-full flex items-center gap-2 hover:bg-text-main/10 transition-all backdrop-blur-sm">
                        Download CV <Download size={20} />
                    </button>
                </motion.div>

                <motion.div
                    className="mt-16 flex gap-6 justify-center text-text-muted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <a href="#" className="hover:text-primary transition-colors"><Github size={24} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
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
