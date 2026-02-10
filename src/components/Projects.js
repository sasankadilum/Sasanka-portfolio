import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiSpringboot, SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'Salon Diamond System',
      description: 'Comprehensive salon management system featuring advanced booking engine, real-time inventory tracking, smart cart management, and payment integration. Built with scalable architecture for seamless operations.',
      image: '💎', // Replace with actual image path
      tech: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'PostgreSQL', icon: <FaDatabase />, color: '#336791' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' }
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      github: 'https://github.com/sasankadilum/Project-2-2',
      demo: '#'
    },
    {
      title: 'HomeStock',
      description: 'Intelligent stock management system for home inventory with real-time tracking, automated alerts, barcode scanning, and detailed analytics. Simplifies household item management with intuitive UI.',
      image: '📦',
      tech: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' }
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      github: 'https://github.com/sasankadilum/HomeStockProject',
      demo: '#'
    },
    {
      title: 'Dish Craft',
      description: 'Feature-rich recipe and dish management platform for chefs and home cooks. Includes recipe sharing, ingredient calculation, meal planning, nutritional information, and community features.',
      image: '🍳',
      tech: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' }
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      github: 'https://github.com/sasankadilum/Dish-Craft',
      demo: '#'
    },
    {
      title: 'Event Management System',
      description: 'Enterprise-grade event management solution with participant tracking, automated scheduling, ticketing system, attendance management, and comprehensive analytics dashboard.',
      image: '🎯',
      tech: [
        { name: 'Java', icon: '☕', color: '#007396' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' }
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      github: '#',
      demo: '#'
    // },
    // {
    //   title: 'AI Task Manager',
    //   description: 'Smart task management application powered by AI for intelligent task prioritization, deadline predictions, productivity insights, and automated workflow suggestions.',
    //   image: '🤖',
    //   tech: [
    //     { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    //     { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    //     { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' }
    //   ],
    //   gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    //   github: '#',
    //   demo: '#'
    // },
    // {
    //   title: 'Real-Time Chat App',
    //   description: 'Modern real-time messaging application with WebSocket integration, group chats, file sharing, voice messages, message encryption, and user presence indicators.',
    //   image: '💬',
    //   tech: [
    //     { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    //     { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    //     { name: 'Socket.io', icon: '⚡', color: '#010101' }
    //   ],
    //   gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    //   github: '#',
    //   demo: '#'
    // }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '6rem 0',
        background: '#000',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div ref={ref} style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              style={{
                display: 'inline-block',
                color: '#22d3ee',
                fontSize: '0.95rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem'
              }}
            >
              Portfolio
            </motion.span>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Featured Projects
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Some of my recent work that showcases my skills and creativity
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                style={{
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.borderColor = 'rgba(34, 211, 238, 0.5)';
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {/* Project Image/Icon */}
                <div style={{
                  position: 'relative',
                  height: '250px',
                  background: project.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  {/* Replace with actual image: <img src={project.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
                  <span style={{
                    fontSize: '5rem',
                    opacity: 0.9
                  }}>
                    {project.image}
                  </span>
                  
                  {/* Overlay on Hover */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '1.25rem',
                        textDecoration: 'none',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '1.25rem',
                        textDecoration: 'none',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: '#fff',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '1.5rem'
                  }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 1rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '9999px',
                          fontSize: '0.85rem',
                          color: tech.color,
                          fontWeight: '500'
                        }}
                      >
                        <span style={{ fontSize: '1rem' }}>{tech.icon}</span>
                        {tech.name}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '0.75rem'
                  }}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        textAlign: 'center',
                        background: 'transparent',
                        border: '1px solid #22d3ee',
                        borderRadius: '0.75rem',
                        color: '#22d3ee',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#22d3ee';
                        e.currentTarget.style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#22d3ee';
                      }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                        border: 'none',
                        borderRadius: '0.75rem',
                        color: '#fff',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
                      }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
