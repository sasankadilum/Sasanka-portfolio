import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      position: 'relative',
      background: '#000',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '3rem 0',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.1) 1px, transparent 0)`,
        backgroundSize: '30px 30px',
        opacity: 0.3
      }} />

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
              border: 'none',
              borderRadius: '50%',
              color: '#fff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <HiArrowUp />
          </motion.button>

          {/* Logo */}
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'Space Grotesk, sans-serif',
            background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {'<SD />'}
          </div>

          {/* Quick Links */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const element = document.getElementById(link.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent)'
          }} />

          {/* Copyright */}
          <div style={{
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '0.5rem'
            }}>
              Designed & Built with <span style={{ color: '#22d3ee' }}>❤️</span> by{' '}
              <span style={{
                background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '600'
              }}>
                Sasanka Dilum Chamuditha
              </span>
            </p>
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.4)'
            }}>
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Tech Stack */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.4)'
          }}>
            <span>Built with</span>
            <span style={{ color: '#22d3ee' }}>React</span>
            <span>•</span>
            <span style={{ color: '#3b82f6' }}>Framer Motion</span>
            <span>•</span>
            <span style={{ color: '#8b5cf6' }}>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
