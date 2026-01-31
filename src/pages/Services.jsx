import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const packages = [
    {
        name: "MVP Starter",
        price: "$5,000+",
        description: "Perfect for startups looking to launch their first product.",
        features: [
            "Custom React/Next.js Application",
            "Responsive Design",
            "Basic SEO Optimization",
            "Authentication (Auth0/Firebase)",
            "Database Setup (PostgreSQL/Mongo)",
            "Deployment (Vercel/Netlify)"
        ],
        highlight: false
    },
    {
        name: "Enterprise Scale",
        price: "$15,000+",
        description: "Robust solutions for established businesses needing scalability.",
        features: [
            "Everything in MVP Starter",
            "Microservices Architecture",
            "Advanced Analytics Dashboard",
            "CI/CD Pipeline Integration",
            "Performance Optimization",
            "Automated Testing Suite",
            "Priority Support"
        ],
        highlight: true
    },
    {
        name: "Brand & Identity",
        price: "$8,000+",
        description: "Complete visual identity systems to make your brand unforgettable.",
        features: [
            "Logo Design & Branding Kit",
            "UI/UX Design Systems (Figma)",
            "Marketing Collateral Design",
            "Social Media Assets",
            "Motion Graphics & Animation",
            "Design Consultation"
        ],
        highlight: false
    }
];

const Services = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-text-main to-secondary mb-6">
                        Service Packages
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Transparent pricing for world-class engineering and creative design solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${pkg.highlight ? 'border-primary bg-primary/5 shadow-[0_0_30px_rgba(10,255,255,0.1)]' : 'border-border bg-surface/30'} flex flex-col`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-text-main mb-2">{pkg.name}</h3>
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                                {pkg.price}
                            </div>
                            <p className="text-text-muted mb-8 flex-grow">
                                {pkg.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                                        <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${pkg.highlight ? 'bg-primary text-background hover:bg-text-main hover:text-background' : 'bg-surface text-text-main hover:bg-surface/80 border border-border'}`}>
                                Get Started <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border text-center"
                >
                    <h3 className="text-2xl font-bold text-text-main mb-4">Need a Custom Solution?</h3>
                    <p className="text-text-muted mb-8 max-w-2xl mx-auto">
                        We understand that every project is unique. Let's discuss your specific requirements and build a tailored plan for your success.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-3 bg-text-main text-background font-bold rounded-lg hover:bg-text-main/80 transition-colors">
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
