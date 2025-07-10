import { motion } from "framer-motion";
import { assets } from "@/lib/assets.ts";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce platform design built with Next, featuring product filtering, cart management, and payment integration.",
      image: assets.ecom,
      tags: ["React", "Next"],
    },
    {
      id: 2,
      title: "Dash",
      description: "A web based car driving game",
      image: assets.dash,
      tags: ["HTML", "CSS", "JS"],
    },
    {
      id: 3,
      title: "961 Dashboard",
      description:
        "A responsive admin dashboard template with functionality, built with React and Next.",
      image: assets.ninesix,
      tags: ["React", "Next"],
    },
    {
      id: 4,
      title: "AOU Library",
      description:
        "AOU Library is an application for managing library resources, built with React, Express, and Electron for desktop support.",
      image: assets.aou,
      tags: ["React", "Express", "Electron"],
    },
    {
      id: 5,
      title: "Enigma Chat",
      description:
        "A real-time secure chat application with user authentication, message encryption, and group chats, works on both web and desktop.",
      image: assets.enigma,
      tags: [
        "React",
        "Framer Motion",
        "Vite",
        "Tailwind CSS",
        "Express",
        "Socket.io",
        "PostgreSQL",
        "GSAP",
        "Electron",
      ],
    },
    {
      id: 6,
      title: "Flex Fit Zone",
      description:
        "A fitness website with workout plans, nutrition guides, and a community forum, built with React CRA.",
      image: assets.ffz,
      tags: ["React", "Express", "Sqlite"],
    },
    {
      id: 7,
      title: "Plexus Sphere",
      description:
        "A 3D interactive website showcasing a rotating sphere with dynamic lighting and shadows, built with Three.js and React.",
      image: assets.plexus,
      tags: ["React", "Three.js"],
    },
    {
      id: 8,
      title: "Hotel Booking Design",
      description:
        "A modern hotel booking website design with room listings, booking functionality, and user reviews.",
      image: assets.hbd,
      tags: ["HTML", "CSS"],
    },
    {
      id: 9,
      title: "andPartners",
      description:
        "A functional dashboard for andPartners agency users to track their insurance policies, claims, and other legal documents.",
      image: assets.andp,
      tags: ["React", "Vite", "Express", "MS SQL", "Tailwind CSS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="work"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-[hsl(231,98%,65%)] to-[hsl(188,94%,43%)] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Showcasing my recent projects and the technologies I've worked with
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[hsl(231,98%,65%)]/20 text-[hsl(231,98%,65%)] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <div className="flex justify-between items-center">
                  <a
                    href={project.demo}
                    className="text-[hsl(231,98%,65%)] hover:text-[hsl(262,83%,70%)] transition-colors duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="text-slate-500 hover:text-[hsl(231,98%,65%)] transition-colors duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-github mr-2"></i>Code
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/sn-sniper?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="glass px-8 py-4 rounded-full font-medium transition-all duration-300 border border-[hsl(231,98%,65%)]/30 hover:border-[hsl(231,98%,65%)]/60">
              View All Projects
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
