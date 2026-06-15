import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Globe, Award, Sparkles } from 'lucide-react';

const Home = () => {
    // Bouncy animation for the words
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 10 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-700 overflow-hidden relative">

            {/* INTERACTIVE BACKGROUND: Floating Pastel Blobs */}
            <motion.div
                animate={{ y: [0, -40, 0], x: [0, 30, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 md:left-40 w-64 h-64 bg-sky-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"
            />
            <motion.div
                animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-40 right-10 md:right-40 w-72 h-72 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-80 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-100/40 rounded-full mix-blend-multiply filter blur-3xl z-0"
            />

            {/* Hero Section */}
            <header className="relative w-full px-6 py-16 md:py-24 flex flex-col items-center text-center z-10">
                <div className="max-w-4xl flex flex-col items-center">

                    {/* Interactive Interactive Badge */}
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        className="bg-white border-2 border-sky-200 text-sky-800 px-6 py-2.5 rounded-full text-sm font-bold mb-8 shadow-md uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-colors hover:bg-sky-50 font-['Fredoka']"
                    >
                        <Sparkles size={16} className="text-yellow-500" /> Built for the DHH Community
                    </motion.div>

                    {/* Staggered Bouncing Headline */}
                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight mb-8 tracking-tight font-['Fredoka']"
                    >
                        {["Hear", "the", "world,"].map((word, index) => (
                            <motion.span key={index} variants={wordVariants} className="inline-block mr-4">
                                {word}
                            </motion.span>
                        ))}
                        <br />
                        {["your", "way."].map((word, index) => (
                            <motion.span
                                key={index}
                                variants={wordVariants}
                                className={`inline-block mr-4 ${word === 'way.' ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500' : 'text-sky-500'}`}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed"
                    >
                        EchoVision provides fully customizable, spatial captions and real-time AI context, completely dismantling media barriers without requiring external hardware.
                    </motion.p>

                </div>
            </header>

            {/* The DHH Data Section */}
            <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 font-['Fredoka']">Why EchoVision Matters</h2>
                    <p className="mt-4 text-slate-600 font-medium text-lg">The data behind the accessibility gap.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Data Cards (Animated on Scroll) */}
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-sky-50 to-sky-100/50 p-8 rounded-[2rem] shadow-sm border-2 border-sky-100 text-center flex flex-col items-center">
                        <Globe size={40} className="text-sky-500 mb-4" />
                        <h3 className="text-5xl font-bold text-sky-900 mb-2 font-['Fredoka']">430M+</h3>
                        <p className="text-sky-800 font-medium leading-relaxed">People worldwide require rehabilitation for disabling hearing loss.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 rounded-[2rem] shadow-sm border-2 border-purple-100 text-center flex flex-col items-center">
                        <Users size={40} className="text-purple-500 mb-4" />
                        <h3 className="text-5xl font-bold text-purple-900 mb-2 font-['Fredoka']">1 in 4</h3>
                        <p className="text-purple-800 font-medium leading-relaxed">Projected individuals will have some degree of hearing loss by 2050.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-8 rounded-[2rem] shadow-sm border-2 border-yellow-100 text-center flex flex-col items-center">
                        <Award size={40} className="text-yellow-500 mb-4" />
                        <h3 className="text-5xl font-bold text-yellow-900 mb-2 font-['Fredoka']">100%</h3>
                        <p className="text-yellow-800 font-medium leading-relaxed">User acceptance rate achieved during our targeted DHH field testing.</p>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Home;