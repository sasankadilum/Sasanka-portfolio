import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiSpringboot, SiJava, SiPython,
  SiMongodb, SiMysql, SiPostgresql, SiRedis, SiFirebase,
  SiGit, SiGithub, SiDocker, SiVisualstudiocode, SiPostman,
  SiTensorflow, SiPytorch
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // Use Font Awesome for Java
import { VscCode } from 'react-icons/vsc'; // Use VS Code icons for VS Code

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      color: '#22d3ee',
      skills: [
        { name: 'React', icon: <SiReact />, level: 90, color: '#61DAFB' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 88, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92, color: '#06B6D4' },
        { name: 'HTML5', icon: <SiHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, level: 90, color: '#1572B6' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      color: '#3b82f6',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, level: 85, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, level: 85, color: '#000000' },
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 80, color: '#6DB33F' },
        { name: 'Java', icon: <FaJava />, level: 82, color: '#007396' },
        { name: 'Python', icon: <SiPython />, level: 78, color: '#3776AB' }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: '🗄️',
      color: '#8b5cf6',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 88, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, level: 85, color: '#4479A1' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80, color: '#336791' },
        { name: 'Redis', icon: <SiRedis />, level: 75, color: '#DC382D' },
        { name: 'Firebase', icon: <SiFirebase />, level: 82, color: '#FFCA28' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      color: '#22d3ee',
      skills: [
        { name: 'Git', icon: <SiGit />, level: 92, color: '#F05032' },
        { name: 'GitHub', icon: <SiGithub />, level: 90, color: '#181717' },
        { name: 'Docker', icon: <SiDocker />, level: 75, color: '#2496ED' },
        { name: 'VS Code', icon: <VscCode />, level: 95, color: '#007ACC' },
        { name: 'Postman', icon: <SiPostman />, level: 88, color: '#FF6C37' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      id="skills"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 0',
        background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          borderRadius: '50%'
        }}
      />

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
              My Expertise
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
              Skills & Technologies
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                style={{
                  padding: '2rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = category.color;
                  e.currentTarget.style.background = `${category.color}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                }}
              >
                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem',
                  paddingBottom: '1rem',
                  borderBottom: `2px solid ${category.color}30`
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#fff',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}>
                    {category.title}
                  </h3>
                  <span style={{
                    fontSize: '2rem',
                    filter: `drop-shadow(0 0 10px ${category.color})`
                  }}>
                    {category.icon}
                  </span>
                </div>

                {/* Skills List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      {/* Skill Info */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}>
                          <span style={{
                            fontSize: '1.5rem',
                            color: skill.color,
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            {skill.icon}
                          </span>
                          <span style={{
                            fontSize: '0.95rem',
                            fontWeight: '500',
                            color: '#fff'
                          }}>
                            {skill.name}
                          </span>
                        </div>
                        <span style={{
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: 'rgba(255, 255, 255, 0.5)'
                        }}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div style={{
                        width: '100%',
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                            borderRadius: '9999px',
                            position: 'relative',
                            boxShadow: `0 0 10px ${skill.color}50`
                          }}
                        >
                          {/* Shimmer Effect */}
                          <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                            animation: 'shimmer 2s infinite'
                          }} />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Background Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '200px',
                  height: '200px',
                  background: `radial-gradient(circle, ${category.color}15, transparent)`,
                  filter: 'blur(40px)',
                  opacity: 0.5,
                  pointerEvents: 'none'
                }} />
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: '3rem',
              padding: '2rem',
              background: 'rgba(34, 211, 238, 0.05)',
              border: '1px solid rgba(34, 211, 238, 0.2)',
              borderRadius: '1rem',
              textAlign: 'center'
            }}
          >
            <p style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#22d3ee',
              marginBottom: '1rem'
            }}>
              🚀 Also Exploring
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              {[
                { name: 'TensorFlow', icon: <SiTensorflow /> },
                { name: 'PyTorch', icon: <SiPytorch /> },
                { name: 'GraphQL', icon: '🔷' },
                { name: 'Kubernetes', icon: '☸️' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Microservices', icon: '🔧' }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '9999px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{tech.icon}</span>
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
