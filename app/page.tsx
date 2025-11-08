"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // form handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://formspree.io/f/xzzbbgyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Network error. Try later.");
    }
  };

  return (
    <main
      className={`${dark ? "bg-gray-900 text-white" : "bg-white text-gray-800"} min-h-screen flex flex-col transition-colors duration-500`}
    >
      {/* 🌐 Navbar */}
      <nav
        className={`flex items-center justify-between px-6 py-4 shadow-md sticky top-0 z-50 ${
          dark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <h1 className="text-2xl font-extrabold text-blue-600">Hoori Media</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Right-side buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden px-3 py-2 border rounded text-gray-600 dark:text-gray-300"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-100 dark:bg-gray-800 py-4 space-y-3 shadow">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* 🦋 Hero */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-blue-700 mb-4"
        >
          Empower Your Digital Presence
        </motion.h2>
        <p className="text-lg max-w-2xl mb-8 text-gray-600 dark:text-gray-300">
          We craft stunning websites and digital experiences that elevate your brand.
        </p>
        <a
          href="#contact"
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* 💼 Services */}
      <section id="services" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-center">
        <h3 className="text-4xl font-bold mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Web Design", desc: "Modern, responsive designs that engage visitors." },
            { title: "Web Development", desc: "Fast, scalable, high-performance web apps." },
            { title: "Branding & Marketing", desc: "Creative campaigns to grow your reach." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-white dark:bg-gray-700 shadow-lg rounded-2xl hover:shadow-xl transition"
            >
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">{s.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧑‍💼 About */}
      <section id="about" className="py-20 px-6 text-center">
        <h3 className="text-4xl font-bold mb-8">About Us</h3>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          Hoori Media is a creative digital agency dedicated to designing and developing modern web
          experiences. We combine design, technology, and strategy to build brands that stand out.
        </p>
      </section>

      {/* 💬 Testimonials */}
      <section className="py-20 px-6 bg-blue-50 dark:bg-gray-800 text-center">
        <h3 className="text-4xl font-bold mb-10">What Our Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Sarah Lee", text: "They transformed our website into a modern masterpiece!" },
            { name: "James Carter", text: "Amazing design, great communication, and fast delivery!" },
            { name: "Mina Patel", text: "The best team for digital branding and web strategy!" },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md"
            >
              <p className="italic mb-4 text-gray-600 dark:text-gray-300">“{t.text}”</p>
              <h5 className="font-semibold text-blue-600">{t.name}</h5>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📩 Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-4xl font-bold mb-8">Get in Touch</h3>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-sm">{status}</p>}
      </section>

      {/* ⚓ Footer */}
      <footer className="text-center py-6 bg-blue-600 text-white">
        <p>© {new Date().getFullYear()} Hoori Media. All rights reserved.</p>
      </footer>
    </main>
  );
}
