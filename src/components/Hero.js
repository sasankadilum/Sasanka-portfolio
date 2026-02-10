import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import MeImg from '../img/me.jpeg';
const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/sasankadilum', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/sasanka-dilum-606038334', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:sasankadilumkumarasinghe@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#000'
      }}
    >
      {/* Animated Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.3
        }} />

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            borderRadius: '50%'
          }}
        />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.5rem',
                background: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                borderRadius: '9999px',
                marginBottom: '2rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span style={{
                width: '8px',
                height: '8px',
                background: '#22d3ee',
                borderRadius: '50%',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                boxShadow: '0 0 10px #22d3ee'
              }} />
              <span style={{ color: '#22d3ee', fontSize: '0.875rem', fontWeight: '500' }}>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '900',
                marginBottom: '1rem',
                lineHeight: '1.2',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              Hi, I'm{' '}
              <span style={{
                background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 80px rgba(34, 211, 238, 0.5)'
              }}>
                Sasanka Dilum
              </span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              <Typewriter
                options={{
                  strings: [
                    'Full-Stack Developer',
                    'Backend Specialist',
                    'AI Enthusiast',
                    'Problem Solver',
                    'Tech Innovator'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.8',
                marginBottom: '2rem',
                maxWidth: '600px'
              }}
            >
              IT Undergraduate @ <span style={{ color: '#22d3ee', fontWeight: '600' }}>SLIIT</span> | 
              Crafting innovative digital solutions with modern web technologies. 
              Passionate about backend architecture and AI-driven innovations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
                }}
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                style={{
                  padding: '1rem 2rem',
                  background: 'transparent',
                  color: '#22d3ee',
                  border: '2px solid #22d3ee',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <FaDownload /> Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '1.25rem',
                    textDecoration: 'none',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(34, 211, 238, 0.2)';
                    e.currentTarget.style.borderColor = '#22d3ee';
                    e.currentTarget.style.color = '#22d3ee';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{ position: 'relative' }}>
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  background: 'conic-gradient(from 0deg, #22d3ee, #3b82f6, #8b5cf6, #22d3ee)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  opacity: 0.6
                }}
              />
              
              {/* Profile Image Container */}
              <div style={{
                position: 'relative',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                padding: '8px',
                background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
                boxShadow: '0 0 60px rgba(34, 211, 238, 0.4)'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  border: '4px solid #000'
                }}>
                  {/* Placeholder for profile image */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(139, 92, 246, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '6rem',
                    color: '#22d3ee',
                    fontWeight: 'bold'
                  }}>
                     <img
                        src={MeImg}
                        alt="Sasanka Dilum"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              {[
                { icon: '⚛️', top: '10%', left: '-10%', delay: 0 },
                { icon: '🔥', top: '20%', right: '-10%', delay: 2 },
                { icon: '💻', bottom: '10%', left: '-10%', delay: 4 },
                { icon: '🚀', bottom: '20%', right: '-10%', delay: 6 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: item.top,
                    bottom: item.bottom,
                    left: item.left,
                    right: item.right,
                    fontSize: '2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    padding: '1rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        <HiArrowDown style={{
          fontSize: '2rem',
          color: '#22d3ee',
          filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))'
        }} />
      </motion.div>
    </section>
  );
};

export default Hero;
