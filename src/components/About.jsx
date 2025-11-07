import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiBriefcase, HiSparkles } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: HiBriefcase, value: '3+', label: 'Years Experience' },
    { icon: HiAcademicCap, value: '2', label: 'Degrees' },
    { icon: HiSparkles, value: '10+', label: 'Skills' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Quick Stats</h3>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                        <stat.icon className="text-2xl" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-800">
                Transforming Ideas into Reality
              </h3>

              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  I'm <span className="font-semibold text-blue-600">Nichamon Pamorn</span>,
                  an Administrative Officer at Sripatum University with a passion for
                  technology and innovation. With a Master's degree in Information Technology
                  and a Bachelor's in Airline Business, I bring a unique blend of administrative
                  excellence and technical expertise.
                </p>

                <p className="leading-relaxed">
                  My journey started in the aviation industry, where I developed strong
                  organizational and communication skills. Recognizing the transformative
                  power of technology, I pursued advanced studies in IT, focusing on
                  data analytics and digital transformation.
                </p>

                <p className="leading-relaxed">
                  Today, I leverage my diverse background to streamline academic operations,
                  implement data-driven solutions, and create engaging educational content.
                  I'm proficient in tools like Power BI, Looker Studio, and various creative
                  software, enabling me to turn complex data into actionable insights.
                </p>

                <p className="leading-relaxed">
                  Beyond my professional work, I'm passionate about{' '}
                  <span className="font-semibold text-indigo-600">
                    photography, videography, and design
                  </span>
                  , which allows me to express creativity and attention to detail in everything I do.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
