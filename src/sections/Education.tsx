
import {
  GraduationCap,
  Award,
  Code2,
} from 'lucide-react';

import '../styles/education.css';

const certifications = [
  {
    icon: Code2,
    title: 'Immersive Full-Stack Web Development',
    provider: 'Bootcamp',
    description:
      '700+ hours of hands-on coding, building projects, and solving problems.',
    label: '700+ HOURS',
  },
  {
    icon: Award,
    title: 'Complete Responsive Web Development',
    provider: 'Udemy',
    description:
      'A comprehensive learning path covering responsive web development.',
    label: 'CERTIFICATE',
  },
  {
    icon: Code2,
    title: 'JavaScript Advanced',
    provider: 'Udemy',
    description:
      'Advanced JavaScript concepts and programming techniques.',
    label: 'CERTIFICATE',
  },
];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <div className="education-heading">
          <p className="section-label">06 / EDUCATION & CERTIFICATIONS</p>

          <h2>
            Learning never
            <span> stops.</span>
          </h2>
        </div>

        <div className="education-degree">
          <div className="education-icon">
            <GraduationCap size={25} />
          </div>

          <div className="education-degree-content">
            <span className="education-label">EDUCATION</span>
            <h3>University of Jordan</h3>
            <p>Business Information Technology</p>
            <span className="education-location">Amman, Jordan</span>
          </div>

          <span className="education-degree-number">01</span>
        </div>

        <div className="certifications-heading">
          <h3>Certifications & Training</h3>
          <span>CONTINUOUS LEARNING</span>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <article className="certificate-card" key={certificate.title}>
                <div className="certificate-top">
                  <div className="certificate-icon">
                    <Icon size={21} />
                  </div>

                  <span>0{index + 1}</span>
                </div>

                <span className="certificate-label">
                  {certificate.label}
                </span>

                <h4>{certificate.title}</h4>

                <p className="certificate-provider">
                  {certificate.provider}
                </p>

                <p className="certificate-description">
                  {certificate.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
