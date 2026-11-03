import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import '../styles/contact.css';

const email = 'rubaalnadi5@gmail.com';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-content">
          <p className="section-label">07 / GET IN TOUCH</p>

          <h2>
            Have a project
            <br />
            in <span>mind?</span>
          </h2>

          <p className="contact-description">
            I'm always open to discussing new opportunities,
            interesting projects, and creative ideas.
            Let's build something great together.
          </p>

          <a
            href={`mailto:${email}`}
            className="contact-button"
          >
            <Mail size={19} />
            <span>Let's talk</span>
            <ArrowUpRight size={20} />
          </a>

          <div className="contact-bottom">
            <div className="contact-availability">
              <span className="availability-dot" />
              Open to new opportunities
            </div>

            <span className="contact-location">
              <MessageCircle size={15} />
              Amman, Jordan
            </span>
          </div>
        </div>

        <div className="contact-footer">
          <span>© 2026 Ruba Alnadi</span>
          <span>Designed & Built with React</span>
        </div>
      </div>
    </section>
  );
}