import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const floatingRef = useRef(null);
  const bgElementsRef = useRef([]);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    // Background floating elements
    bgElementsRef.current.forEach((el, index) => {
      gsap.set(el, { 
        rotation: Math.random() * 360,
        scale: 0 
      });
      gsap.to(el, {
        scale: 1,
        duration: 2,
        delay: index * 0.2,
        ease: "back.out(1.7)"
      });
      gsap.to(el, {
        rotation: "+=360",
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    });

    // Floating animation for profile image
    gsap.to(floatingRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div 
        ref={el => bgElementsRef.current[0] = el}
        className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/20 rounded-full filter blur-3xl"
      ></div>
      <div 
        ref={el => bgElementsRef.current[1] = el}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full filter blur-3xl"
      ></div>

      <motion.div 
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <motion.div 
          ref={floatingRef}
          variants={itemVariants}
          className="mb-8"
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200" 
            alt="Alex Chen - Frontend Developer" 
            className="w-32 h-32 mx-auto rounded-full border-4 border-[hsl(231,98%,65%)]/50 shadow-2xl object-cover"
          />
        </motion.div> */}

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-foreground">Hi, I'm{' '}</span>
          <span className="bg-gradient-to-r from-[hsl(231,98%,65%)] to-[hsl(188,94%,43%)] bg-clip-text text-transparent">
            Hassan Assaad
          </span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
        >
          Frontend Developer crafting beautiful, interactive experiences with modern web technologies
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-[hsl(231,98%,65%)] to-[hsl(262,83%,70%)] px-8 py-4 rounded-full text-white font-medium transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('work')}
            className="glass px-8 py-4 rounded-full font-medium transition-all duration-300 border border-[hsl(231,98%,65%)]/30 hover:border-[hsl(231,98%,65%)]/60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-8 text-3xl text-slate-400 dark:text-slate-500"
        >
          {[
            { icon: 'fab fa-react', color: 'hover:text-blue-500' },
            { icon: 'fab fa-js-square', color: 'hover:text-yellow-500' },
            { icon: 'fab fa-html5', color: 'hover:text-orange-500' },
            { icon: 'fab fa-css3-alt', color: 'hover:text-blue-600' },
            { icon: 'fab fa-git-alt', color: 'hover:text-red-500' }
          ].map((tech, index) => (
            <motion.i
              key={index}
              className={`${tech.icon} ${tech.color} transition-colors duration-300 cursor-pointer`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <i className="fas fa-chevron-down text-2xl text-slate-400 dark:text-slate-500"></i>
      </motion.div>
    </section>
  );
};

export default Hero;
