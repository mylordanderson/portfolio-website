'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Palette, Zap, Github, Linkedin, Mail } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const skills = [
    { name: 'AI Integration', icon: Code, description: 'Next.js, AI APIs, Machine Learning' },
    { name: 'Modern Web Development', icon: Palette, description: 'React, TypeScript, Tailwind CSS' },
    { name: 'Innovation & Learning', icon: Zap, description: 'Continuous Growth, Problem Solving' },
  ];

  const featuredProjects = [
    {
      title: 'AI-Powered Chat Assistant',
      description:
        'An intelligent chat application built with Next.js and OpenAI API, featuring real-time conversations, context awareness, and natural language processing capabilities.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      title: 'Smart Portfolio Dashboard',
      description:
        'A dynamic portfolio management system with AI-driven insights, real-time analytics, and automated reporting features for investment tracking.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Chart.js', 'MongoDB', 'AI Analytics'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Next.js Learning Platform',
      description:
        'An interactive learning platform focused on Next.js development, featuring AI-powered code suggestions, progress tracking, and personalized learning paths.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'AI Integration', 'Prisma', 'PostgreSQL', 'Framer Motion'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];

  return (
    <div className="pt-16 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/70 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,197,253,0.15),transparent_70%)]" />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10 px-6"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold">
              Hi, I'm <span className="text-blue-400">Anderson Ghany</span>
            </h1>

            <p className="text-xl mt-4 text-gray-300">
              AI Developer & Next.js Engineer building intelligent web applications.
            </p>

            <p className="max-w-xl mt-4 text-gray-400">
              I specialize in modern web development and AI integration,
              creating fast, scalable, and smart digital experiences.
            </p>
     
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              href="/projects"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-400/60 transition-all duration-300 hover:scale-105"
            >
              Discover My Work
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border border-blue-400 text-blue-300 hover:bg-blue-500/10 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </motion.div>
          <div className="flex justify-center gap-6 mt-8 text-blue-300">
           <a href="https://github.com" target="_blank" className="hover:text-white transition">
              <Github size={26} />
          </a>

          <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">
            <Linkedin size={26} />
            </a>

            <a href="mailto:your@email.com" className="hover:text-white transition">
          <Mail size={26} />
          </a>
              </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <a
              href="/about"
              className="inline-flex items-center text-blue-200 hover:text-white transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:bg-white/10"
            >
              <span className="mr-2 font-medium">Scroll to learn more</span>
              <ArrowDown className="animate-bounce" />
            </a>
          </motion.div>
        </div>
  
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-10"
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>
          <p className="text-lg text-blue-100/90 mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm Anderson Ghany, a passionate programmer diving deep into AI and
            Next.js development. I love exploring how artificial intelligence
            can enhance web applications and turning complex problems into
            simple, beautiful, and intelligent solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/60 p-6 rounded-xl shadow-lg border border-blue-900/40 backdrop-blur-sm hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-blue-400 mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] mx-auto" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-300">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Tech Stack */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            My <span className="text-blue-400">Tech Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Python",
              "OpenAI API",
              "MongoDB"
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gray-800/60 border border-blue-900/40 rounded-xl py-4 font-semibold hover:scale-105 transition"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>
      </section>
      {/* Featured Projects */}
      <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-10"
          >
            Featured <span className="text-blue-400">Projects</span>
          </motion.h2>
          <p className="text-lg text-blue-100/90 mb-16 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Button
              href="/projects"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-400/60 transition-all duration-300 hover:scale-105"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 text-center relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's Work Together
        </motion.h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Have a project in mind? I'd love to collaborate and learn together.
          Let's explore how AI and Next.js can bring your ideas to life.
        </p>
        <Button
          href="/contact"
          variant="secondary"
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-400/60 transition-all duration-300 hover:scale-105"
        >
          Start a Conversation
        </Button>
      </section> 
    </div>

     
  );
}
