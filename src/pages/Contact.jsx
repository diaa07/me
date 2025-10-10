import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import githubIcon from "../assets/social/github.png";
import codeforcesIcon from "../assets/social/codeforces.png";
import telegramIcon from "../assets/social/telegram.png";
import facebookIcon from "../assets/social/facebook.png";
import instagramIcon from "../assets/social/instagram.png";
import linkedInIcon from "../assets/social/linkedin.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_KEY;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const contactContainerRef = useRef(null);

  useEffect(() => {
    const container = contactContainerRef.current;
    if (!container) return;
    const contactElements = container.querySelectorAll(".contact-block");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-contact");
        } else {
          entry.target.classList.remove("show-contact");
        }
      });
    }, {});
    contactElements.forEach((el) => {
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  const contactInfo = {
    location: "Homs, Syria",
    phone: "+963992888155",
    email: "diaa.alsebai.dev@gmail.com",
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/diaa07",
      iconSrc: githubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/diaa-aldin-drak-alsebai-580a70389/",
      iconSrc: linkedInIcon,
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/binLaggin",
      iconSrc: codeforcesIcon,
    },
    {
      name: "Telegram",
      url: "t.me/ThaCodeFather",
      iconSrc: telegramIcon,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1D6foW4rAZ/",
      iconSrc: facebookIcon,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/diaa_dev?igsh=MXRldDFxZHE0eDVhcw==",
      iconSrc: instagramIcon,
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return;
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("Please ensure EmailJS keys are defined in your .env file.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setStatusMessage(
            "🎉 Message sent successfully! I'll get back to you soon."
          );
          form.current.reset();
        },
        (error) => {
          setStatusMessage(
            "🛑 Sending failed! Please try again or reach out directly via email."
          );
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact" ref={contactContainerRef}>
      <div className="contact-title-block contact-block" id="contact">
        <h1>Get In Touch</h1>
        <h2>
          Whether it's a job opportunity, an interesting project, or just a
          quick question, feel free to reach out.
        </h2>
      </div>{" "}
      <div className="contact-layout">
        <div className="contact-info contact-block">
          <h2>Contact Details</h2>

          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              <strong>Location:</strong> {contactInfo.location}
            </p>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>
              <strong>Email:</strong> {contactInfo.email}
            </p>
          </div>

          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <p>
              <strong>Phone:</strong> {contactInfo.phone}
            </p>
          </div>

          <h2 className="social-links-title">Connect with me</h2>

          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.name} profile`}
                className="social-icon"
              >
                <img src={link.iconSrc} alt={`${link.name} icon`} />
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-area contact-block">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="title"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message content..."
                required
              ></textarea>
            </div>

            {statusMessage && (
              <p
                className={`status-message ${
                  statusMessage.includes("successfully") ? "success" : "error"
                }`}
              >
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="main-cta-button"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
