
import { ArrowUpRight, Code2, Layers3, Lightbulb } from 'lucide-react';
import '../styles/about.css';

const qualities = [
  {
    icon: Code2,
    title: 'Clean Development',
    description: 'Writing maintainable and reusable code.',
  },
  {
    icon: Layers3,
    title: 'Real-world Solutions',
    description: 'Building applications that solve actual problems.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Exploring better ways to build digital products.',
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-heading">
          <p className="section-label">03 / ABOUT ME</p>
          <h2>
            More than just
            <span> writing code.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-main">
            <p className="about-eyebrow">A LITTLE INTRODUCTION</p>

            <h3>
              I'm a Frontend Developer who enjoys turning ideas
              into <span>meaningful digital experiences.</span>
            </h3>

            <p className="about-description">
              With around 4 years of experience in frontend
              development, I enjoy building responsive,
              user-focused applications and solving real-world
              problems through thoughtful development.
            </p>

            <p className="about-description">
              My experience spans React and Vue.js ecosystems,
              with a strong focus on JavaScript, TypeScript,
              component architecture, and creating interfaces
              that are both functional and intuitive.
            </p>

            <a href="#experience" className="about-link">
              More about my journey
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="about-qualities">
            {qualities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="quality-card" key={item.title}>
                  <div className="quality-number">
                    0{index + 1}
                  </div>

                  <div className="quality-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>

                  <ArrowUpRight
                    className="quality-arrow"
                    size={17}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}