'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Card from './Card';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${featured ? 'sm:col-span-2 lg:col-span-2' : ''}`}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="h-full flex flex-col">
        <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6 shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
            {featured ? 'Featured' : 'Project'}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200/50 dark:border-blue-700/50"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            {liveUrl && (
              <Button
                href={liveUrl}
                variant="primary"
                size="sm"
                className="flex-1"
              >
                <ExternalLink size={14} className="mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">View Project</span>
              </Button>
            )}
            {githubUrl && (
              <Button
                href={githubUrl}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                <Github size={14} className="mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">View Code</span>
              </Button>
            )}
          </div>
        </div>
      </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
