import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiMail, HiPhone, HiLocationMarker, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Nichamon</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 h-20">
              <TypeAnimation
                sequence={[
                  'Administrative Officer',
                  2000,
                  'Data Analyst',
                  2000,
                  'IT Professional',
                  2000,
                  'Creative Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Administrative Officer with expertise in Information Technology, Data Analytics,
              and Creative Design. Passionate about leveraging technology to improve operations
              and create impactful solutions.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <a
                href="mailto:khana.ncm@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <HiMail className="text-xl" />
                <span className="text-sm">khana.ncm@gmail.com</span>
              </a>
              <a
                href="tel:+66952515258"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <HiPhone className="text-xl" />
                <span className="text-sm">+66 95 251 5258</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#portfolio"
                className="px-8 py-3 glass rounded-full font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload />
                View Portfolio
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ y: -5 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ y: -5 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <motion.div
              className="relative w-80 h-80 rounded-full overflow-hidden glass p-2"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold">
                NP
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-blue-400/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-400/20 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
