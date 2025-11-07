import { motion } from 'framer-motion';
import { HiHeart, HiArrowUp } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-50/30 to-indigo-100/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Nichamon Pamorn</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Administrative Officer & IT Professional passionate about data analytics,
              creative design, and digital transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a
                  href="mailto:khana.ncm@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  khana.ncm@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+66952515258"
                  className="hover:text-blue-600 transition-colors"
                >
                  +66 95 251 5258
                </a>
              </li>
              <li>Bangkok, Thailand</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300/50 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-gray-600 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Nichamon Pamorn. Made with{' '}
            <HiHeart className="inline text-red-500 animate-pulse" /> and React
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="px-4 py-2 glass rounded-full flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium">Back to Top</span>
            <HiArrowUp className="text-lg" />
          </motion.button>
        </div>

        {/* Tech Stack Badge */}
        <motion.div
          className="text-center mt-8 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Built with React, Vite, Tailwind CSS & Framer Motion
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
