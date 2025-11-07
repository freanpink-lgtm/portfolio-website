import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiCalendar, HiStar } from 'react-icons/hi';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Master's Degree",
      field: 'Master of Science in Information Technology',
      school: 'Sripatum University',
      faculty: 'Faculty of Information Technology',
      period: '2023 - 2024',
      icon: '🎓',
      highlights: [
        'Specialized in Data Analytics and Digital Transformation',
        'Completed advanced coursework in IT management',
        'Applied technology solutions to educational operations',
      ],
      color: 'from-blue-600 to-indigo-600',
    },
    {
      degree: "Bachelor's Degree",
      field: 'College of Tourism and Hospitality',
      program: 'Airline Business Program',
      school: 'Sripatum University',
      period: '2016 - 2020',
      icon: '✈️',
      highlights: [
        'Developed strong organizational and communication skills',
        'Gained expertise in customer service excellence',
        'Built foundation in business operations and management',
      ],
      color: 'from-purple-600 to-pink-600',
    },
  ];

  const certifications = [
    {
      name: 'AI Basics: Overview of AI',
      issuer: 'CRA Training Program',
      icon: '🤖',
    },
    {
      name: 'Digital Marketing on Smartphones',
      issuer: 'Sales Promotion Course',
      icon: '📱',
    },
    {
      name: 'Infographic Design',
      issuer: 'Design Training',
      icon: '🎨',
    },
    {
      name: 'Cloud Basics: Development and Concepts',
      issuer: 'Cloud Training',
      icon: '☁️',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-transparent">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Education & <span className="text-gradient">Certifications</span>
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
              Academic achievements and professional development
            </motion.p>
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${edu.color} opacity-5 rounded-full -mr-32 -mt-32`} />

                <div className="relative">
                  {/* Icon and Degree */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{edu.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                      </div>
                      <div className={`text-xl font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                        {edu.field}
                      </div>
                      {edu.program && (
                        <div className="text-lg text-gray-600 mb-2">{edu.program}</div>
                      )}
                      {edu.faculty && (
                        <div className="text-gray-600 mb-2">{edu.faculty}</div>
                      )}
                      <div className="text-gray-700 font-medium">{edu.school}</div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <HiCalendar className="text-xl" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {edu.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 + idx * 0.1 }}
                      >
                        <HiStar className={`text-xl mt-0.5 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent flex-shrink-0`} />
                        <span className="text-gray-600">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="max-w-4xl mx-auto">
            <motion.h3
              className="text-3xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              Certifications & <span className="text-gradient">Training</span>
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-6 flex items-start gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
