import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
  Globe,
  BriefcaseBusiness,
} from "lucide-react";
import "../styles/hero.css";

const technologies = ["React", "TypeScript", "JavaScript", "Redux"];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="hero-intro">
              <span className="status-dot" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="section-label">
              HELLO, I'M RUBA — FRONTEND DEVELOPER
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h1 className="hero-title">
              Building digital
              <span>
                experiences<span className="title-dot">.</span>
              </span>
            </h1>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="hero-description">
              I turn ideas into thoughtful, interactive and meaningful web
              experiences through clean code and creative problem-solving.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="hero-tech-stack">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="hero-actions">
              <a href="#work" className="primary-button">
                Explore my work <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="secondary-button">
                Let's connect
              </a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
           <div className="hero-socials">
  <a
    href="https://github.com/Rubaalnadi"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <Globe size={19} />
  </a>

  <a
    href="https://www.linkedin.com/in/ruba-alnadi/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <BriefcaseBusiness size={19} />
  </a>

  <span className="hero-location">
    <span /> AMMAN, JORDAN
  </span>
</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            x: { duration: 1, delay: 0.2 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="visual-decoration decoration-one" />
          <div className="visual-decoration decoration-two" />

          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>developer.tsx</span>
              <Code2 size={16} />
            </div>

            <div className="code-content">
              <div className="code-line">
                <span className="code-number">01</span>
                <span>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">02</span>
                <span className="code-indent">
                  name: <span className="code-green">'Ruba'</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">03</span>
                <span className="code-indent">
                  role: <span className="code-green">'Frontend Developer'</span>
                  ,
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">04</span>
                <span className="code-indent">
                  passion: <span className="code-green">'Building things'</span>
                  ,
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">05</span>
                <span className="code-indent">
                  focus: [<span className="code-green">'React'</span>,{" "}
                  <span className="code-green">'TypeScript'</span>]
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">06</span>
                <span>{"}"};</span>
              </div>

              <div className="code-line code-comment">
                <span className="code-number">07</span>
                <span>// Always learning, always building.</span>
              </div>
            </div>

            <div className="code-card-footer">
              <Sparkles size={15} />
              <span>Turning ideas into reality</span>
            </div>
          </div>

          <div className="floating-badge">
            <span className="floating-icon">
              <Code2 size={19} />
            </span>
            <div>
              <strong>Clean Code</strong>
              <span>Thoughtful solutions</span>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#work" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}
