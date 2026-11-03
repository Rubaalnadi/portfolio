import { BriefcaseBusiness } from 'lucide-react';
import '../styles/experience.css';

const experiences = [
  {
    company: 'Link Solution',
    role: 'Frontend Developer',
    period: 'May 2025 — Present',
    description:
      'Developing responsive and dynamic web applications, with a focus on building interactive interfaces and delivering smooth user experiences.',
    project:
      'Contributing to Dadan, a video creation and sharing platform, using React and Redux. Working with REST APIs, screen sharing, camera integration, and application performance optimization.',
    technologies: [
      'React.js',
      'TypeScript',
      'Redux',
      'REST APIs',
    ],
  },
  {
    company: 'Image Technology (ITEC)',
    role: 'Frontend Developer',
    period: 'Jan 2024 — Apr 2025',
    description:
      'Developed and maintained scalable web applications, focusing on frontend architecture, usability, accessibility, and maintainable code.',
    project:
      'Worked on DocuTrack, building interactive user interfaces with React, TypeScript, and React Query. Collaborated with UI/UX designers and backend developers to integrate REST APIs.',
    technologies: [
      'React.js',
      'TypeScript',
      'React Query',
      'REST APIs',
    ],
  },
  {
    company: 'Rhinosoft',
    role: 'Frontend Developer',
    period: 'Sep 2022 — 2023',
    description:
      'Contributed to the development and enhancement of a Learning Management System (LMS), supporting different user roles and educational workflows.',
    project:
      'Developed features for administrator, student, and instructor portals, including course configuration, enrollment, exams, assignments, certificates, discussions, and authentication.',
    technologies: [
      'Vue 3',
      'Nuxt.js',
      'Pinia',
      'Vuetify',
      'Bootstrap',
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="experience-heading">
          <p className="section-label">04 / EXPERIENCE</p>

          <h2>
            My professional
            <span> journey.</span>
          </h2>

          <p>
            Three professional experiences building web
            applications, solving problems, and growing
            across different frontend technologies.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <article
              className="experience-item"
              key={experience.company}
            >
              <div className="timeline-marker">
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="experience-card">
                <div className="experience-card-top">
                  <div className="experience-company-icon">
                    <BriefcaseBusiness size={20} />
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <h3>{experience.company}</h3>
                <h4>{experience.role}</h4>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-project">
                  <span>PROJECT & CONTRIBUTIONS</span>
                  <p>{experience.project}</p>
                </div>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}