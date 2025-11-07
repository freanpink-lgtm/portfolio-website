import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiCanva, SiFigma, SiPython, SiJavascript, SiReact
} from 'react-icons/si';
import {
  HiCamera, HiVideoCamera, HiChartBar, HiLightBulb,
  HiPresentationChartLine, HiCode, HiTable, HiPhotograph
} from 'react-icons/hi';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Creative Skills',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Logo Design', level: 85, icon: HiLightBulb },
        { name: 'Photography', level: 90, icon: HiCamera },
        { name: 'Videography', level: 88, icon: HiVideoCamera },
        { name: 'Photo Editing', level: 85, icon: HiPhotograph },
        { name: 'Video Editing', level: 80, icon: HiVideoCamera },
      ],
    },
    {
      title: 'Technical Skills',
      color: 'from-blue-500 to-indigo-500',
      skills: [
        { name: 'Data Analytics', level: 85, icon: HiChartBar },
        { name: 'PowerBI', level: 80, icon: HiPresentationChartLine },
        { name: 'Python', level: 70, icon: SiPython },
        { name: 'JavaScript', level: 65, icon: SiJavascript },
        { name: 'React', level: 70, icon: SiReact },
      ],
    },
    {
      title: 'Tools & Software',
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'Canva', level: 95, icon: SiCanva },
        { name: 'Figma', level: 75, icon: SiFigma },
        { name: 'PowerPoint', level: 90, icon: HiPresentationChartLine },
        { name: 'Excel', level: 88, icon: HiTable },
        { name: 'Looker Studio', level: 82, icon: HiChartBar },
      ],
    },
    {
      title: 'Soft Skills',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Creative Thinking', level: 90, icon: HiLightBulb },
        { name: 'Presentation', level: 88, icon: HiPresentationChartLine },
        { name: 'Data Interpretation', level: 85, icon: HiChartBar },
        { name: 'Communication', level: 92, icon: HiCode },
        { name: 'Problem Solving', level: 87, icon: HiLightBulb },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-50/30">
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
              Skills & <span className="text-gradient">Expertise</span>
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
              A diverse skill set combining creativity, technical expertise, and analytical thinking
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="glass rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`} />
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 1,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
