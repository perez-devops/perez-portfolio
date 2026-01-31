import { motion } from 'framer-motion';
import { Layout, Server, Brain, Globe, Shield, PenTool, Palette } from 'lucide-react';

const services = [
    {
        icon: <Layout size={32} />,
        title: "Full Stack Development",
        description: "Building robust, scalable web applications using React, Node.js, and modern databases."
    },
    {
        icon: <Palette size={32} />,
        title: "UI/UX Design",
        description: "Creating intuitive, user-centric interfaces with high-fidelity prototypes and seamless interactions."
    },
    {
        icon: <PenTool size={32} />,
        title: "Graphic Design",
        description: "Crafting visual identities, logos, and marketing materials using Photoshop and Illustrator."
    },
    {
        icon: <Brain size={32} />,
        title: "Brand Strategy",
        description: "Developing cohesive brand voices and visual systems that resonate with target audiences."
    },
    {
        icon: <Server size={32} />,
        title: "API Architecture",
        description: "Designing secure and efficient RESTful APIs to power your digital ecosystem."
    },
    {
        icon: <Globe size={32} />,
        title: "Motion Design",
        description: "Adding life to interfaces and brands through engaging 2D/3D motion graphics."
    }
];

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 bg-surface rounded-2xl border border-white/5 hover:border-primary/50 transition-colors overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
                <div className="mb-6 text-primary p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
};

const ServicesSection = () => {
    return (
        <section className="py-24 bg-surface/30 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Capabilities
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Delivering high-impact solutions across the full technology spectrum.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
