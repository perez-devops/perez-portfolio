import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Terminal, Copy, Check } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [copied, setCopied] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipient = "godspoweremmanuel304@gmail.com";
        const subject = `Portfolio Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        setFormData({ name: '', email: '', message: '' });
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    const contactInfo = [
        { icon: <Mail size={20} />, label: "Email", value: "godspoweremmanuel304@gmail.com" },
        { icon: <Phone size={20} />, label: "Phone", value: "(+234) 811 048 1225" },
        { icon: <MapPin size={20} />, label: "Location", value: "Lagos, Nigeria" }
    ];

    return (
        <section className="py-24 bg-surface/50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        Ready to start a project? Let's build something extraordinary.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-text-main mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-center justify-between bg-background/50 p-4 rounded-xl border border-border hover:border-primary/50 transition-all group">
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div className="text-primary p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-background transition-colors shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm text-text-muted">{info.label}</p>
                                            <p className="text-text-main font-medium truncate md:whitespace-normal md:break-all">{info.value}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard(info.value, info.label)}
                                        className="text-text-muted hover:text-text-main transition-colors"
                                    >
                                        {copied === info.label ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Terminal Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-border shadow-2xl font-mono text-sm"
                    >
                        {/* Terminal Header */}
                        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Terminal size={12} />
                                <span>contact.sh</span>
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-4 md:p-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-500 mb-1">
                                        <span className="text-secondary">const</span> <span className="text-primary">name</span> =
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='"Your Name"'
                                        className="w-full bg-transparent border-b border-gray-700 text-white focus:outline-none focus:border-primary py-1 placeholder-gray-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 mb-1">
                                        <span className="text-secondary">const</span> <span className="text-primary">email</span> =
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='"email@example.com"'
                                        className="w-full bg-transparent border-b border-gray-700 text-white focus:outline-none focus:border-primary py-1 placeholder-gray-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 mb-1">
                                        <span className="text-secondary">await</span> <span className="text-primary">sendMessage</span>(
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='"Your message goes here..."'
                                        rows="4"
                                        className="w-full bg-transparent border-b border-gray-700 text-white focus:outline-none focus:border-primary py-1 placeholder-gray-600 resize-none"
                                        required
                                    ></textarea>
                                    <div className="text-gray-500">);</div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-primary/10 border border-primary/20 text-primary py-3 rounded hover:bg-primary hover:text-black transition-all flex items-center justify-center gap-2 font-bold"
                                >
                                    <Send size={16} />
                                    <span>Execute Send</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
