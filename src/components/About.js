import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiLightningBolt, HiAcademicCap, HiChip } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: <HiCode />, number: '15+', label: 'Projects Completed', color: '#22d3ee' },
    { icon: <HiLightningBolt />, number: '5+', label: 'Technologies', color: '#3b82f6' },
    { icon: <HiAcademicCap />, number: '3+', label: 'Years Learning', color: '#8b5cf6' },
    { icon: <HiChip />, number: '100%', label: 'Dedication', color: '#22d3ee' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 0',
        background: '#000',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        opacity: 0.3
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
              Get To Know Me
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
              About Me
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Text Content */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                I'm a passionate <span style={{ color: '#22d3ee', fontWeight: '600' }}>Full-Stack Developer</span> currently 
                pursuing my degree in IT at <span style={{ color: '#3b82f6', fontWeight: '600' }}>Sri Lanka Institute of Information Technology (SLIIT)</span>. 
                My journey in tech is driven by curiosity and a constant desire to learn and build innovative solutions.
              </p>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                I specialize in creating <span style={{ color: '#8b5cf6', fontWeight: '600' }}>robust web applications</span> with 
                a focus on backend architecture and emerging AI technologies. From concept to deployment, I enjoy crafting 
                solutions that solve real-world problems and deliver exceptional user experiences.
              </p>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, 
                or staying updated with the latest trends in <span style={{ color: '#22d3ee', fontWeight: '600' }}>software development</span> and 
                <span style={{ color: '#3b82f6', fontWeight: '600' }}> artificial intelligence</span>.
              </p>

              {/* Highlight Box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  marginTop: '1rem',
                  padding: '2rem',
                  background: 'rgba(34, 211, 238, 0.05)',
                  border: '1px solid rgba(34, 211, 238, 0.2)',
                  borderRadius: '1rem',
                  borderLeft: '4px solid #22d3ee'
                }}
              >
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#22d3ee',
                  marginBottom: '0.5rem'
                }}>
                  💡 Currently Focused On
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6'
                }}>
                  Building scalable backend systems, exploring AI/ML integrations, and mastering modern cloud architectures 
                  to create next-generation web applications.
                </p>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem'
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    padding: '2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '1rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = stat.color;
                    e.currentTarget.style.background = `${stat.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    fontSize: '2.5rem',
                    color: stat.color,
                    marginBottom: '1rem',
                    filter: `drop-shadow(0 0 10px ${stat.color})`
                  }}>
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}aa)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.5rem',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}>
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>

                  {/* Glow Effect */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at center, ${stat.color}20, transparent)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                  }} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
