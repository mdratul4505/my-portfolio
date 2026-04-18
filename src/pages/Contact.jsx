import { useContext, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { NavigateContext } from "../context/NavigateProvider";

const Contact = () => {
  const { contactRef } = useContext(NavigateContext);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = new FormData(form.current);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    try {
      const response = await fetch("https://formspree.io/f/xblnkvdp", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for reaching out.",
          icon: "success",
          background: "#0a0a0a",
          color: "#ffffff",
          confirmButtonColor: "#06b6d4",
        });
        e.target.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        background: "#0a0a0a",
        color: "#ffffff",
        confirmButtonColor: "#06b6d4",
      });
    }
  };

  return (
    <section
      ref={contactRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20"
    >
      {/* Section Header */}
      <div className="mb-16 text-center md:text-left">
        <p className="text-gray-400 tracking-[0.2em] text-xs font-semibold mb-2 uppercase">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Contact Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a]/40 backdrop-blur-md border border-zinc-800/50 p-8 rounded-3xl shadow-2xl space-y-6 w-full hover:border-cyan-500/30 transition-all duration-500"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Let’s Connect
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Have a project in mind or just want to say hello? I’m always open to new ideas and collaborations.
          </p>

          <div className="text-gray-300 space-y-4 text-sm md:text-base pt-4 border-t border-zinc-800">
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs tracking-wider uppercase mb-1">Email</span>
              <span className="text-gray-200 hover:text-cyan-400 transition-colors">dev.ratul.coder@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs tracking-wider uppercase mb-1">WhatsApp</span>
              <span className="text-gray-200">+880 1985-435655</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-xl">
            <a href="https://github.com/mdratul4505" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111] border border-zinc-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 glow-cyan-hover transition-all duration-300">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/cadet.ratul.2024" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111] border border-zinc-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 glow-cyan-hover transition-all duration-300">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/mdratul-hasan/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111] border border-zinc-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 glow-cyan-hover transition-all duration-300">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/8801985435655" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111] border border-zinc-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 glow-cyan-hover transition-all duration-300">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a]/40 backdrop-blur-md border border-zinc-800/50 p-8 rounded-3xl shadow-2xl space-y-6 w-full hover:border-cyan-500/30 transition-all duration-500"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-500 text-xs tracking-wider uppercase">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full p-3 rounded-xl bg-[#111] border border-zinc-800 text-white placeholder:text-zinc-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-500 text-xs tracking-wider uppercase">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full p-3 rounded-xl bg-[#111] border border-zinc-800 text-white placeholder:text-zinc-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-500 text-xs tracking-wider uppercase">Your Message</label>
            <textarea
              name="message"
              required
              placeholder="How can I help you?"
              className="w-full p-3 h-32 rounded-xl bg-[#111] border border-zinc-800 text-white placeholder:text-zinc-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 resize-none transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
