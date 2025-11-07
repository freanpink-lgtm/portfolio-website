import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Administrative Officer',
      company: 'Sripatum University',
      department: 'Office of the Secretariat',
      location: 'Bangkok, Thailand',
      period: 'October 2021 – Present',
      current: true,
      responsibilities: [
        'Coordinating academic affairs for graduate students',
        'Assist in verifying and coordinating student course registration',
        'Organize and maintain documents related to graduate students',
      ],
    },
    {
      title: 'Part-time Lecturer',
      company: 'Sripatum University',
      department: 'Information Technology Department',
      location: 'Bangkok, Thailand',
      period: 'Various Terms',
      current: true,
      responsibilities: [
        'Taught Information Technology for Career and Work',
        'Covered Looker Studio, Canva, and Google tools',
        'Guided students in Microsoft Office suite applications',
      ],
    },
    {
      title: 'Registrar Office Staff',
      company: 'Sripatum University',
      department: 'Registrar Office',
      location: 'Bangkok, Thailand',
      period: 'Past',
      current: false,
      responsibilities: [
        'Organized class and examination schedules for students',
        'Provided guidance on curricula and course registration',
        'Reviewed and tested registration system to prevent issues',
        'Prepared reports on student numbers and registration statistics',
      ],
    },
    {
      title: 'Part-Time Human Resources Officer',
      company: 'AOT Aviation Security Company Limited',
      department: 'Human Resources',
      location: 'Bangkok, Thailand',
      period: 'October 2020 – December 2020',
      current: false,
      responsibilities: [
        'Screened initial applications and scheduled interviews',
        'Recorded and updated employee information in database',
        'Organized and maintained personal documents',
      ],
    },
    {
      title: 'Intern',
      company: 'AOT Personal Data Protection Policy',
      department: 'Business Development and Marketing',
      location: 'Bangkok, Thailand',
      period: 'August 2019 – November 2019',
      current: false,
      responsibilities: [
        'Received and sent documents within and outside the company',
        'Entered document numbers into company system',
        'Scanned documents for electronic system input',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
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
              Work <span className="text-gradient">Experience</span>
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
              My professional journey across education, HR, and administrative roles
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <motion.div
                      className="glass rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Current Badge */}
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full mb-3">
                          Current Position
                        </span>
                      )}

                      {/* Job Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <HiBriefcase className="text-blue-600" />
                        {exp.title}
                      </h3>

                      {/* Company & Department */}
                      <div className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        {exp.department}
                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-col gap-2 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <HiCalendar className="text-indigo-600" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <HiLocationMarker className="text-indigo-600" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
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

export default Experience;
