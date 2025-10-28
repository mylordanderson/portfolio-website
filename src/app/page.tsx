'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Palette, Zap } from 'lucide-react';
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
      description: 'An intelligent chat application built with Next.js and OpenAI API, featuring real-time conversations, context awareness, and natural language processing capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      title: 'Smart Portfolio Dashboard',
      description: 'A dynamic portfolio management system with AI-driven insights, real-time analytics, and automated reporting features for investment tracking.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Chart.js', 'MongoDB', 'AI Analytics'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Next.js Learning Platform',
      description: 'An interactive learning platform focused on Next.js development, featuring AI-powered code suggestions, progress tracking, and personalized learning paths.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'AI Integration', 'Prisma', 'PostgreSQL', 'Framer Motion'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 dark:from-indigo-950 dark:via-purple-950 dark:to-blue-950" />
        
        {/* Secondary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-indigo-600/30 dark:from-blue-700/40 dark:via-purple-700/30 dark:to-indigo-700/40" />
        
        {/* Tertiary gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-500/10 to-blue-500/20 dark:via-purple-400/15 dark:to-blue-400/25" />
        
        {/* Animated gradient orbs with modern colors */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/25 to-indigo-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-2xl animate-bounce delay-3000" />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl animate-bounce delay-4000" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">
                <span className="text-white drop-shadow-2xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Anderson Ghany
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-6 sm:mb-8 drop-shadow-lg font-medium">
                Programmer & AI Enthusiast
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-12 max-w-3xl mx-auto drop-shadow-md leading-relaxed px-2">
                I'm learning to build with AI and Next.js, creating innovative solutions that bridge the gap between 
                artificial intelligence and modern web development. Passionate about exploring the future of 
                technology and building applications that make a real impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <Button href="/projects" size="lg" className="w-full sm:w-auto min-w-[200px]">
                View My Work
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]">
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <a href="#about" className="inline-flex items-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20">
                <span className="mr-2 font-medium">Scroll to learn more</span>
                <ArrowDown className="animate-bounce" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              I'm Anderson Ghany, a passionate programmer diving deep into AI and Next.js development. 
              I love exploring how artificial intelligence can enhance web applications and 
              turning complex problems into simple, beautiful, and intelligent solutions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Card className="text-center h-full">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                        className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Here are some of my recent projects that showcase my skills and passion for development.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className={`${project.featured ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button href="/projects" size="lg">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-500 to-amber-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Have a project in mind? I'd love to collaborate and learn together. Let's explore how AI and Next.js can bring your ideas to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button href="/contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}