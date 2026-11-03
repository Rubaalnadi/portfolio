
import {
  Code2,
  Layers3,
  Database,
  Wrench,
} from 'lucide-react';
import '../styles/skills.css';

const skillGroups = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive interfaces.',
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Vue 3',
      'Next.js',
      'Nuxt.js',
      'HTML',
      'CSS',
      'Bootstrap',
      'Tailwind CSS',
      'jQuery',
    ],
  },
  {
    icon: Layers3,
    title: 'State & Data Management',
    description: 'Managing application state and API data.',
    skills: [
      'Redux',
      'React Query',
      'Pinia',
      'Vuex',
      'NgRx',
    ],
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Working with server-side technologies and APIs.',
    skills: [
      'REST APIs',
      'Node.js',
      'Express.js',
      'Firebase',
      'Firestore',
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Workflow',
    description: 'Tools that support collaborative development.',
    skills: [
      'Git',
      'GitHub',
      'TypeScript',
      'Responsive Design',
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <p className="section-label">05 / SKILLS & TECHNOLOGIES</p>

          <h2>
            My technical
            <span> toolkit.</span>
          </h2>

          <p>
            Technologies and tools I use to transform ideas
            into functional and scalable web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <span>
                    0{index + 1}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
