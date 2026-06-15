import { motion } from 'framer-motion';
import { Target, Lightbulb, Workflow, Users, Sparkles, Rocket, TrendingUp, Cpu, Code2, Zap, Mic2, Bot } from 'lucide-react';

const Project = () => {
    // Title Animation (Bouncy Pop-up)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } }
    };

    // Card Animation (Scroll trigger)
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const projectCards = [
        { title: "Problem Statement", icon: Target, text: "DHH individuals face persistent accessibility barriers in daily information and entertainment, often relying on cumbersome hardware or manual services.", bg: "from-sky-50 to-sky-100/50", border: "border-sky-100", iconColor: "text-sky-500", titleColor: "text-sky-900" },
        { title: "The Solution", icon: Lightbulb, text: "A multi-modal mobile application providing a 100% software-defined environment, including a Live Radio Module, Curated TV Module, and AI Chatbot.", bg: "from-purple-50 to-purple-100/50", border: "border-purple-100", iconColor: "text-purple-500", titleColor: "text-purple-900" },
        { title: "Agile Methodology", icon: Workflow, text: "Employs an iterative cycle of planning, design, development, testing, deployment, and review to refine application functionality.", bg: "from-yellow-50 to-yellow-100/50", border: "border-yellow-100", iconColor: "text-yellow-500", titleColor: "text-yellow-900" },
        { title: "User-Centric Testing", icon: Users, text: "Conducted qualitative usability evaluations and semi-structured interviews with 5 targeted bilingual participants from the DHH community.", bg: "from-sky-50 to-sky-100/50", border: "border-sky-100", iconColor: "text-sky-500", titleColor: "text-sky-900" },
        { title: "Novelty", icon: Sparkles, text: "Features 100% software-defined infrastructure, unprecedented spatial control over captions, and an AI Chatbot tethered directly to video subject matter.", bg: "from-purple-50 to-purple-100/50", border: "border-purple-100", iconColor: "text-purple-500", titleColor: "text-purple-900" },
        { title: "Commercial Potential", icon: Rocket, text: "Built on a scalable, decoupled cross-platform Flutter/Python architecture, well-equipped to support education, business, and daily entertainment.", bg: "from-yellow-50 to-yellow-100/50", border: "border-yellow-100", iconColor: "text-yellow-500", titleColor: "text-yellow-900" },
        { title: "Impact", icon: TrendingUp, text: "Achieved a 100% user acceptance rate, significantly reducing visual fatigue by prioritizing WCAG standards and transforming passive consumption into interactive learning.", bg: "from-sky-50 to-sky-100/50", border: "border-sky-100", iconColor: "text-sky-500", titleColor: "text-sky-900" },
        { title: "Technology Stack", icon: Cpu, isTech: true, bg: "from-purple-50 to-purple-100/50", border: "border-purple-100", iconColor: "text-purple-500", titleColor: "text-purple-900" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-700 relative py-20 overflow-hidden">
            <motion.div animate={{ y: [0, -40, 0], x: [0, 30, 0], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10 md:left-40 w-64 h-64 bg-sky-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0" />
            <motion.div animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-40 right-10 md:right-40 w-72 h-72 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight font-['Fredoka'] mb-8">
                        {["Project", "Overview"].map((word, index) => (
                            <motion.span key={index} variants={wordVariants} className={`inline-block mr-4 ${index === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500' : ''}`}>
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectCards.map((item, i) => (
                        <motion.div
                            key={i}
                            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            className={`bg-gradient-to-br ${item.bg} p-8 rounded-[2rem] shadow-sm border-2 ${item.border} text-center flex flex-col items-center`}
                        >
                            <item.icon size={40} className={`${item.iconColor} mb-4`} />
                            <h3 className={`text-2xl font-bold ${item.titleColor} mb-4 font-['Fredoka']`}>{item.title}</h3>
                            {item.isTech ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full mt-2">
                                    {[{ name: 'Flutter', icon: <Code2 /> }, { name: 'FASTAPI', icon: <Zap /> }, { name: 'Whisper AI', icon: <Mic2 /> }, { name: 'Deepgram', icon: <Workflow /> }, { name: 'Gemini', icon: <Bot /> }].map((tech) => (
                                        <div key={tech.name} className="flex flex-col items-center gap-2">
                                            <div className="text-slate-500">{tech.icon}</div>
                                            <span className="font-bold text-slate-700 text-xs">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-slate-600 font-medium leading-relaxed">{item.text}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;