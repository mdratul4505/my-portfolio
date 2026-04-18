import { FaGithub, FaLinkedin, FaFacebook, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase, SiExpress } from "react-icons/si";
import { useContext } from "react";
import { motion } from "framer-motion";
import { NavigateContext } from "../context/NavigateProvider";

const Banner = () => {
    const { homeRef, contactRef, scrollToSection } = useContext(NavigateContext);

    return (
        <section
            ref={homeRef}
            className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-transparent"
        >
            {/* Glowing Deep Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-700/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Orbital Rings and Nodes */}
            <div className="orbit-container">
                {/* Ring 1 - Inner */}
                <div className="orbit-ring orbit-ring-1">
                    <div className="orbit-icon text-cyan-400 text-2xl" title="React"><FaReact /></div>
                    <div className="orbit-icon pos-2 text-green-500 text-2xl" title="Node.js"><FaNodeJs /></div>
                </div>

                {/* Ring 2 - Middle */}
                <div className="orbit-ring orbit-ring-2">
                    <div className="orbit-icon text-green-400 text-2xl" title="MongoDB"><SiMongodb /></div>
                    <div className="orbit-icon pos-2 text-cyan-300 text-2xl" title="Tailwind CSS"><SiTailwindcss /></div>
                    <div className="orbit-icon pos-3 text-yellow-400 text-2xl" title="Firebase"><SiFirebase /></div>
                </div>

                {/* Ring 3 - Outer */}
                <div className="orbit-ring orbit-ring-3">
                    <div className="orbit-icon text-gray-300 text-2xl" title="Express"><SiExpress /></div>
                    <div className="orbit-icon pos-2 text-white text-2xl" title="GitHub"><FaGithub /></div>
                </div>
            </div>

            {/* Content Centered inside Orbits */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 flex flex-col items-center text-center mt-12"
            >
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 tracking-widest text-sm mb-4"
                >
                    HELLO I'M
                </motion.p>
                
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 tracking-tight"
                >
                    Ratul Hasan
                </motion.h1>
                <div className="text-gray-400 text-sm md:text-base font-light mb-6 uppercase tracking-widest">
                    MERN STACK DEVELOPER
                </div>

                <motion.h2 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black text-gradient-cyan drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] tracking-tighter"
                >
                    CREATOR
                </motion.h2>

                {/* Social Links under CREATOR */}
                <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 1 }}
                     className="mt-12 flex gap-4 z-20"
                >
                    <a href="https://github.com/mdratul4505" target="_blank" rel="noreferrer"
                        className="text-xl p-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-300 hover:text-white hover:border-cyan-500 glow-cyan-hover transition-all duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mdratul-hasan/" target="_blank" rel="noreferrer"
                        className="text-xl p-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-cyan-400 hover:text-white hover:border-cyan-500 glow-cyan-hover transition-all duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/cadet.ratul.2024" target="_blank" rel="noreferrer"
                        className="text-xl p-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-blue-400 hover:text-white hover:border-blue-500 glow-cyan-hover transition-all duration-300">
                        <FaFacebook />
                    </a>
                </motion.div>

                {/* Call To Action Buttons */}
                <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 1.2 }}
                     className="mt-8 flex flex-col sm:flex-row gap-5 z-20"
                >
                    <button
                        onClick={() => scrollToSection(contactRef)}
                        className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 px-8 py-3 rounded-full font-medium transition-all duration-300 glow-cyan-hover"
                    >
                        Reach Out
                    </button>
                    <a
                        href="https://drive.google.com/file/d/1dtjJHejP2jwqcsET0t2xJ8O8TtRHo03L/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,153,0,0.5)] flex items-center justify-center gap-2"
                    >
                        Resume & CV
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Banner;
