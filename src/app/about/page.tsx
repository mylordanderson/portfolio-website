'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function About() {
  const skills = [
    { name: 'Frontend', icon: Code, technologies: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { name: 'Design', icon: Palette, technologies: ['Figma', 'Adobe XD', 'Framer Motion', 'CSS3', 'Sass'] },
    { name: 'Mobile', icon: Smartphone, technologies: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { name: 'DevOps', icon: Globe, technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD'] },
    { name: 'Tools', icon: Zap, technologies: ['Git', 'VS Code', 'Webpack', 'Jest', 'Cypress'] },
  ];

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications, mentoring junior developers, and implementing best practices.',
      achievements: ['Improved app performance by 40%', 'Led team of 5 developers', 'Reduced deployment time by 60%']
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed full-stack applications from scratch, working closely with design and product teams.',
      achievements: ['Built 3 major features', 'Implemented CI/CD pipeline', 'Increased user engagement by 25%']
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions Ltd.',
      period: '2019 - 2020',
      description: 'Focused on creating responsive and accessible user interfaces using modern frontend technologies.',
      achievements: ['Improved accessibility scores', 'Reduced bundle size by 30%', 'Implemented design system']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      year: '2015 - 2019',
      description: 'Specialized in Software Engineering and Web Development'
    },
    {
      degree: 'Full-Stack Web Development',
      school: 'Tech Bootcamp',
      year: '2019',
      description: 'Intensive 6-month program covering modern web technologies'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google UX Design Certificate', issuer: 'Google', year: '2022' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2021' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                My <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  My journey into web development started during my computer science studies, 
                  where I discovered my passion for creating digital solutions that make a real impact.
                </p>
                <p>
                  Over the past 5+ years, I've had the privilege of working with amazing teams 
                  and building applications that serve thousands of users. I believe in the power 
                  of technology to solve complex problems and create meaningful connections.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community through 
                  blog posts and mentoring.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-amber-500 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">5+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {skill.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey and the impact I've made along the way
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center text-blue-500 mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{job.company}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">
                Education & <span className="gradient-text">Certifications</span>
              </h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-blue-500 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{edu.school}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.year}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Professional Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {cert.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {cert.year}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with passionate people. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <Button href="/contact" size="lg">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

