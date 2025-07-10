import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });

  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mwpbgkdr");

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
      });
    }

    if (Array.isArray(state.errors) && state.errors.length > 0) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }, [state.succeeded, state.errors, toast]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const pricingPlans = [
    {
      name: "Basic Website",
      price: "$200 - $800",
      description: "Perfect for small businesses",
      features: [
        "Responsive Design",
        "Up to 5 Pages",
        "Contact Form",
        "SEO Optimization",
        "30 Days Support",
      ],
      popular: true,
    },
    {
      name: "Pro Application",
      price: "$800 - $2,000",
      description: "For growing businesses",
      features: [
        "React Application",
        "Custom Animations",
        "API Integration",
        "Database Setup",
        "90 Days Support",
      ],
      popular: false,
    },
    {
      name: "Custom Solution",
      price: "$2,000+",
      description: "Enterprise solutions",
      features: [
        "Full-Stack Solution",
        "Advanced Features",
        "Team Collaboration",
        "Deployment & DevOps",
        "Ongoing Maintenance",
      ],
      popular: false,
    },
  ];

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "assaadhassan00021@gmail.com",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+961 71 881 429",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Badaro, Beirut, Lebanon",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/sn-sniper" },
    {
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/hassan-assaad-62634b26a/",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-[hsl(231,98%,65%)] to-[hsl(188,94%,43%)] bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Choose the perfect plan for your
            project
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`glass rounded-2xl p-8 relative ${
                plan.popular ? "border-2 border-[hsl(231,98%,65%)]/50" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[hsl(231,98%,65%)] to-[hsl(262,83%,70%)] px-4 py-2 rounded-full text-white text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-[hsl(231,98%,65%)] mb-2">
                  {plan.price}
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Have a project in mind? I'd love to hear about it. Let's discuss
                how we can bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[hsl(231,98%,65%)] to-[hsl(262,83%,70%)] rounded-lg flex items-center justify-center">
                    <i className={`${info.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-[hsl(231,98%,65%)] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass border border-slate-300 dark:border-slate-600 focus:border-[hsl(231,98%,65%)] focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg glass border border-slate-300 dark:border-slate-600 focus:border-[hsl(231,98%,65%)] focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium mb-2"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg glass border border-slate-300 dark:border-slate-600 focus:border-[hsl(231,98%,65%)] focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select a project type</option>
                  <option value="basic">Basic Website</option>
                  <option value="pro">Pro Application</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg glass border border-slate-300 dark:border-slate-600 focus:border-[hsl(231,98%,65%)] focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="200-800">$200 - $800</option>
                  <option value="800-2000">$800 - $2,000</option>
                  <option value="2000+">$2,000+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg glass border border-slate-300 dark:border-slate-600 focus:border-[hsl(231,98%,65%)] focus:outline-none transition-colors duration-300"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-[hsl(231,98%,65%)] to-[hsl(262,83%,70%)] px-8 py-4 rounded-full text-white font-medium transition-all duration-300 shadow-lg disabled:opacity-50"
                whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                whileTap={{ scale: state.submitting ? 1 : 0.98 }}
              >
                {state.submitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane ml-2"></i>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
