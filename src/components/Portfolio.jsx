import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiCamera, HiChartBar, HiDesktopComputer } from 'react-icons/hi';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: HiDesktopComputer },
    { id: 'data', name: 'Data Analytics', icon: HiChartBar },
    { id: 'creative', name: 'Creative', icon: HiCamera },
    { id: 'web', name: 'Web Projects', icon: HiCode },
  ];

  const projects = [
    {
      id: 1,
      title: 'Student Registration Dashboard',
      category: 'data',
      description: 'Interactive Power BI dashboard for tracking student registration statistics and trends',
      tags: ['Power BI', 'Data Analytics', 'Excel'],
      color: 'from-blue-500 to-cyan-500',
      icon: '📊',
    },
    {
      id: 2,
      title: 'Academic Performance Analytics',
      category: 'data',
      description: 'Comprehensive analysis of academic performance using Looker Studio',
      tags: ['Looker Studio', 'Data Visualization', 'SQL'],
      color: 'from-green-500 to-emerald-500',
      icon: '📈',
    },
    {
      id: 3,
      title: 'University Logo Redesign',
      category: 'creative',
      description: 'Modern logo designs for university departments and events',
      tags: ['Logo Design', 'Canva', 'Branding'],
      color: 'from-purple-500 to-pink-500',
      icon: '🎨',
    },
    {
      id: 4,
      title: 'Event Photography Portfolio',
      category: 'creative',
      description: 'Professional photography for university events and ceremonies',
      tags: ['Photography', 'Photo Editing', 'Adobe Photoshop'],
      color: 'from-orange-500 to-red-500',
      icon: '📷',
    },
    {
      id: 5,
      title: 'Promotional Video Content',
      category: 'creative',
      description: 'Engaging video content for social media and university promotions',
      tags: ['Videography', 'Filmora', 'Video Editing'],
      color: 'from-indigo-500 to-purple-500',
      icon: '🎬',
    },
    {
      id: 6,
      title: 'Course Management System',
      category: 'web',
      description: 'Web-based system for managing course registrations and schedules',
      tags: ['React', 'JavaScript', 'UI/UX'],
      color: 'from-blue-600 to-indigo-600',
      icon: '💻',
    },
    {
      id: 7,
      title: 'Educational Infographics',
      category: 'creative',
      description: 'Informative and visually appealing infographics for student guides',
      tags: ['Infographic Design', 'Canva', 'Visual Design'],
      color: 'from-teal-500 to-green-500',
      icon: '📋',
    },
    {
      id: 8,
      title: 'Data Automation Scripts',
      category: 'data',
      description: 'Python scripts for automating data collection and reporting',
      tags: ['Python', 'Automation', 'Data Processing'],
      color: 'from-yellow-500 to-orange-500',
      icon: '🤖',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              My <span className="text-gradient">Portfolio</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Showcase of my work across data analytics, creative design, and web development
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'glass text-gray-700 hover:shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="text-xl" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="glass rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="text-5xl mb-4">{project.icon}</div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-4">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-600">
              These are sample projects. Actual portfolio items can be added with real images and links.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
