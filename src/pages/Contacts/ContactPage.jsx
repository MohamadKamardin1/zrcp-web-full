import React from "react";
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      {/* Sidebar Contact Info */}
      <aside className="contact-sidebar">
        <h3>Contact Info</h3>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>House No. 2, Old Airport Road, Kiembesamaki, Zanzibar.</span>
          </li>
          <li>
            <i className="fas fa-clock"></i>
            <span><strong>Opening Hours: </strong>8:00 AM – 5:00 PM</span>
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>
            <span><strong>Phone: </strong><a href="tel:+2557775242400">+255 7775 242 400</a></span>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <span><strong>Email: </strong><a href="mailto:info@zrcp.or.tz">info@zrcp.or.tz</a></span>
          </li>
        </ul>
      </aside>

      {/* Main Contact Form and Details */}
      <main className="contact-main-content">
        <h2>Contact Us</h2>
        <p>Please feel free to contact us for any inquiries or assistance.</p>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your full name" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your email address" required />

          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" placeholder="Subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Optional: Additional Office Info Section */}
        <section className="office-info">
          <h3>Office Information</h3>
          <p>Our team is available to assist you during business hours. Visit us or get in touch through phone or email.</p>
          <ul>
            <li><strong>Address:</strong> House No. 2, Old Airport Road, Kiembesamaki, Zanzibar</li>
            <li><strong>Phone:</strong> +255 7775 242 400</li>
            <li><strong>Email:</strong> info@zrcp.or.tz</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
