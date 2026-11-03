import { ArrowUpRight } from "lucide-react";
import "../styles/projects.css";
import yasmeenaDashboard from "../assets/yasmeena-dashboard.png";
const technologies = ["React", "TypeScript", "Firebase", "Firestore", "CSS"];

export default function Projects() {
  return (
    <section className="projects-section" id="work">
      <div className="container">
        <div className="projects-heading">
          <div>
            <p className="section-label">02 / SELECTED WORK</p>
            <h2>
              Things I've
              <span> built.</span>
            </h2>
          </div>

          <p className="projects-intro">
            A collection of projects where ideas turn into practical digital
            experiences.
          </p>
        </div>

        <article className="project-card">
          <div className="project-preview">
            <img
              src={yasmeenaDashboard}
              alt="Yasmeena Service Request Analytics Dashboard"
            />
            <div className="preview-caption">
              REAL PRODUCT — YASMEENA DASHBOARD
            </div>
          </div>

          <div className="project-details">
            <div className="project-meta">
              <span>01 — WEB APPLICATION</span>
              <span>2026</span>
            </div>

            <h3>Yasmeena</h3>

            <h4>Service Request Management System</h4>

            <p className="project-description">
              A QR-based service request platform designed to simplify customer
              interactions and help café staff manage requests through a
              centralized dashboard.
            </p>

            <div className="project-highlights">
              <div>
                <strong>971+</strong>
                <span>Requests received</span>
              </div>

              <div>
                <strong>QR-Based</strong>
                <span>Customer requests</span>
              </div>

              <div>
                <strong>Multi-tenant</strong>
                <span>Branch management</span>
              </div>
            </div>

            <div className="project-technologies">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a href="#contact" className="project-link">
              Discuss this project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
