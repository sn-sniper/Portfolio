import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Animate skill bars
    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        const percentage = skill.dataset.percentage;
        gsap.fromTo(skill, 
          { width: '0%' },
          {
            width: `${percentage}%`,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skill,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const skills = [
    { name: 'React & JavaScript', percentage: 90 },
    { name: 'CSS & Tailwind', percentage: 85 },
    { name: 'GSAP & Animations', percentage: 80 }
  ];

  const stats = [
    { number: '15+', label: 'Projects' },
    { number: '2+', label: 'Years Exp' },
    { number: '10+', label: 'Happy Clients' }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-[hsl(231,98%,65%)] to-[hsl(188,94%,43%)] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              I'm a passionate frontend developer with 2+ years of experience creating responsive, 
              user-friendly web applications. I specialize in React, JavaScript, and modern CSS frameworks, 
              always staying updated with the latest web technologies and best practices.
            </p>
            
            <p className="text-lg leading-relaxed">
              My journey in web development started with curiosity about how websites work, and has evolved 
              into a genuine passion for crafting seamless user experiences. I believe in writing clean, 
              maintainable code and collaborating effectively with design and backend teams.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills & Technologies</h3>
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div 
                      ref={el => skillsRef.current[index] = el}
                      data-percentage={skill.percentage}
                      className="bg-gradient-to-r from-[hsl(231,98%,65%)] to-[hsl(262,83%,70%)] h-2 rounded-full"
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Coding workspace setup" 
                className="rounded-xl w-full h-auto shadow-lg object-cover"
              />
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold text-[hsl(231,98%,65%)]">{stat.number}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
