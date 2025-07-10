import { motion } from "framer-motion";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Work", id: "work" },
    { name: "Contact", id: "contact" },
  ];

  const services = [
    "Frontend Development",
    "React Applications",
    "UI/UX Implementation",
    "Performance Optimization",
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/sn-sniper" },
    {
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/hassan-assaad-62634b26a/",
    },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold mb-4">
              Hassan_A<span className="text-[hsl(188,94%,43%)]">.</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Frontend Developer passionate about creating beautiful, functional
              web experiences. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[hsl(231,98%,65%)] transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.preventDefault()}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-300">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Hassan Assaad. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
