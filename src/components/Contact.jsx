import React from "react";

export default function Contact() {
  return (
    <section className="section light">
      <div className="section-header">
        <p className="section-kicker">Get in touch</p>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <p className="contact-label">Email</p>
          <a className="contact-link" href="mailto:kutbuddinshaikh814@gmail.com">
            kutbuddinshaikh814@gmail.com
          </a>
        </div>
        <div className="contact-card">
          <p className="contact-label">Phone</p>
          <a className="contact-link" href="tel:9175869470">
            9175869470
          </a>
        </div>
        <div className="contact-card">
          <p className="contact-label">GitHub</p>
          <a className="contact-link" href="https://github.com/Kutbuddin814" target="_blank" rel="noreferrer">
            github.com/Kutbuddin814
          </a>
        </div>
      </div>
    </section>
  );
}
