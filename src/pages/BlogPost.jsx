import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { posts } from '../data/posts';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-text-main">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Post not found</h2>
                    <Link to="/blog" className="text-primary hover:underline">Return to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-24 pb-12 px-6 bg-background">
            <div className="container mx-auto max-w-4xl">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-text-muted hover:text-text-main mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to Blog
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-surface rounded-3xl overflow-hidden border border-border"
                >
                    <div className="h-[400px] w-full relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                            <div className="flex gap-2 mb-4">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary backdrop-blur-md border border-primary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-6 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-primary" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-primary" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 text-text-muted leading-relaxed text-lg whitespace-pre-line">
                        {post.content}
                    </div>
                </motion.div>
            </div>
        </article>
    );
};

export default BlogPost;
