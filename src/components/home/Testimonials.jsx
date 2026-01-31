import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        text: "Emmanuel quickly adapted to modern front-end technologies and consistently delivered clean, responsive interfaces. His attention to UX and ability to turn feedback into solid features made him a valuable contributor to our team.",
        name: "Colin Decorce",
        role: "Software Developer",
        company: "The Curve Africa"
    },
    {
        id: 2,
        text: "He brought strong creative direction and strategic thinking to Popla’s brand. His designs resonated with our Gen Z audience and elevated our visual storytelling across platforms..",
        name: "Omodi David",
        role: "Brand Consultant",
        company: "Popla"
    },
    {
        id: 3,
        text: "Emmanuel led backend development with precision and ownership, delivering a reliable platform that amplified alumni engagement and supported student scholarships",
        name: "David Onuche",
        role: "Software Engineer Lead",
        company: "OUIAA"
    },
    {
        id: 4,
        text: "Emmanuel consistently delivers thoughtful, user-centered designs. His creativity, attention to detail, and openness to iteration make him a strong design partner.",
        name: "Justus Adebayo",
        role: "Founder",
        company: "Tiaago"
    },
    {
        id: 5,
        text: "Godspower has played a key role in building and scaling UniCaba’s marketplace, contributing robust full-stack solutions with performance and usability in mind",
        name: "Perez Emmanuel",
        role: "C.E.O",
        company: "Unicaba"
    }
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="min-w-[350px] p-8 rounded-2xl bg-surface/40 border border-border backdrop-blur-md mx-4 hover:border-primary/30 transition-colors">
            <p className="text-text-muted italic mb-6">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-background text-lg">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 className="text-text-main font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-text-muted">{testimonial.role} at {testimonial.company}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-main to-text-muted mb-4">
                        Client Success
                    </h2>
                </motion.div>
            </div>

            <div className="flex relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
