import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, MonitorPlay, MessageSquare, Captions, Eye } from 'lucide-react';

// Import your video assets
import radioDemo from '../assets/videos/radio_demo.mp4';
import tvCaptionDemo from '../assets/videos/tv_caption.mp4';
import tvNoCaptionDemo from '../assets/videos/tv_no_caption.mp4';
import uploadDemo from '../assets/videos/upload_demo.mp4';

const Demo = () => {
    const [activeTab, setActiveTab] = useState('radio');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-700 relative py-20 px-6 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl opacity-70 z-0" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl opacity-70 z-0" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-bold text-slate-800 font-['Fredoka'] mb-8">
                        {["Live", "Demo"].map((word, i) => (
                            <motion.span key={i} variants={wordVariants} className={`inline-block mr-4 ${i === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500' : ''}`}>
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {[{ id: 'radio', label: 'Live Radio', icon: Radio }, { id: 'tv', label: 'Curated TV', icon: MonitorPlay }, { id: 'uploads', label: 'My Uploads', icon: MessageSquare }].map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all duration-300 border-2 ${activeTab === tab.id ? 'bg-sky-700 text-white border-sky-700 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:bg-sky-50'}`}>
                            <tab.icon size={20} /> {tab.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} className="max-w-5xl mx-auto">

                        {/* RADIO TAB */}
                        {activeTab === 'radio' && (
                            <div className="space-y-8">
                                <div className="w-full max-w-[300px] mx-auto aspect-[9/16] bg-slate-900 rounded-[2rem] shadow-lg flex items-center justify-center border-4 border-sky-100 overflow-hidden">
                                    <video controls className="w-full h-full object-cover">
                                        <source src={radioDemo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="bg-sky-50 p-10 rounded-[2rem] border-2 border-sky-100 text-center">
                                    <h2 className="text-3xl font-bold text-sky-900 mb-4 font-['Fredoka']">Live Radio: Real-Time Transcription</h2>
                                    <p className="text-sky-800 leading-relaxed max-w-2xl mx-auto">Our Radio module aggregates a curated selection of English-only channels, providing a seamless listening experience. The platform delivers real-time, high-accuracy transcription for live broadcasts and utilizes advanced speaker diarization to automatically separate and identify different speakers, ensuring clarity even in multi-host discussions. This module is uniquely powerful because it transforms passive, inaccessible audio streams into fully readable, interactive text in real-time, effectively bridging the accessibility gap for the DHH community without the need for additional, bulky hardware.</p>
                                </div>
                            </div>
                        )}

                        {/* TV TAB */}
                        {activeTab === 'tv' && (
                            <div className="space-y-16">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="w-full max-w-[300px] mx-auto aspect-[9/16] bg-slate-900 rounded-[2rem] shadow-lg flex items-center justify-center border-4 border-purple-100 overflow-hidden">
                                        <video controls className="w-full h-full object-cover">
                                            <source src={tvCaptionDemo} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="bg-purple-50 p-8 rounded-[2rem] border-2 border-purple-100">
                                        <Captions size={40} className="text-purple-500 mb-4" />
                                        <h3 className="font-bold text-2xl text-purple-900 mb-2 font-['Fredoka']">With Caption Scripts</h3>
                                        <p className="text-purple-800">This module redefines accessibility by putting the user in complete control of their viewing experience. Users can interact directly with the transcript—simply scrolling to any line of text automatically seeks the video to that exact moment. Beyond navigation, the interface is fully customizable; users can seamlessly adjust caption size, change text colors for optimal contrast, and drag the caption box anywhere within the video frame to avoid obscuring important on-screen graphics. Additionally, the built-in translation function breaks down language barriers, making content globally accessible and truly personalized.</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="order-2 md:order-1 bg-purple-50 p-8 rounded-[2rem] border-2 border-purple-100">
                                        <Eye size={40} className="text-purple-500 mb-4" />
                                        <h3 className="font-bold text-2xl text-purple-900 mb-2 font-['Fredoka']">Clean View</h3>
                                        <p className="text-purple-800">A distraction-free, horizontal viewing experience designed for users who prefer standard media consumption without an active script overlay. We have integrated intuitive navigation controls, allowing users to easily skip ahead or rewind by 10 seconds with a single tap, ensuring they never miss a critical moment. Additionally, users can dynamically adjust playback speed to suit their preferred pacing, providing a flexible and personalized viewing environment that adapts to their specific needs.</p>
                                    </div>
                                    <div className="order-1 md:order-2 w-full aspect-video bg-slate-900 rounded-[2rem] shadow-lg flex items-center justify-center border-4 border-purple-100 overflow-hidden">
                                        <video controls className="w-full h-full object-cover">
                                            <source src={tvNoCaptionDemo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* UPLOADS TAB (Vertical) */}
                        {activeTab === 'uploads' && (
                            <div className="space-y-8">
                                <div className="w-full max-w-[300px] mx-auto aspect-[9/16] bg-slate-900 rounded-[2rem] shadow-lg flex items-center justify-center border-4 border-yellow-100 overflow-hidden">
                                    <video controls className="w-full h-full object-cover">
                                        <source src={uploadDemo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="bg-yellow-50 p-10 rounded-[2rem] border-2 border-yellow-100 text-center">
                                    <h2 className="text-3xl font-bold text-yellow-900 mb-4 font-['Fredoka']">My Uploads & Context-Aware AI Chat</h2>
                                    <p className="text-yellow-800 leading-relaxed max-w-2xl mx-auto">This module empowers users with complete creative and analytical control over their media. Users can either upload existing video files or capture new content directly within the app. Once uploaded, the system allows for personalized naming of files and generates an automatic, high-accuracy transcript of the video content. Beyond simple playback, our integrated AI chatbot is tethered directly to the video's subject matter; it acts as an intelligent assistant, allowing users to ask specific questions about the video, request concise summaries, or explore deeper insights into the content they are watching.</p>
                                </div>
                            </div>
                        )}

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Demo;