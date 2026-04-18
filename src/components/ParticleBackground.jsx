import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 60 beautiful random glowing floating particles
    const newParticles = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, // 1px to 4px
      x: Math.random() * 100, // 0 to 100vw
      y: Math.random() * 100, // 0 to 100vh
      duration: Math.random() * 15 + 15, // 15s to 30s
      delay: Math.random() * 5,
      // Randomly assign cyan or orange glow
      color: Math.random() > 0.7 ? "bg-orange-400 shadow-[0_0_12px_#ff9900]" : "bg-cyan-400 shadow-[0_0_12px_#00f0ff]",
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030303]">
      
      {/* Floating Sparkle Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full mix-blend-screen opacity-0 ${p.color}`}
          style={{ width: p.size, height: p.size, left: `${p.x}vw`, top: `${p.y}vh` }}
          animate={{
            y: ["0vh", "-30vh"], // Float upwards slowly
            x: ["0vw", `${Math.random() > 0.5 ? 5 : -5}vw`], // Drift left or right
            opacity: [0, 0.8, 0], // Twinkle
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
      
      {/* Large Ambient Glowing Nebulas */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-cyan-900/30 rounded-full blur-[150px]"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.5, 0.2],
          x: [0, -60, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-orange-900/20 rounded-full blur-[150px]"
      />
    </div>
  );
};

export default ParticleBackground;
