import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./About.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function About() {
  const aboutMe =
    "Hi, I’m Diaa — a frontend developer focused on building responsive and dynamic web applications using React. I’ve been passionate about programming since an early age and enjoy solving complex problems. I’m a Specialist on Codeforces (1404 rating) and have taken part in several competitions in problem-solving and robotics.";
  const education = [
    "Bachelor’s in IT Engineering at AUST (2023 – Present) — GPA: 3.45 (89%)",
  ];
  const career = [
    "Trainer at SyraRobo Homs (2021–2024)",
    "Open to remote opportunities",
    "Open to freelance projects",
  ];
  const skills = [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "RESTful APIs",
    "Git & GitHub",
    "C++",
    "Java",
    "Arduino",
    "LEGO Mindstorms EV3",
    "Scratch",
  ];

  const aboutContainerRef = useRef(null);

  useEffect(() => {
    const container = aboutContainerRef.current;
    if (!container) return;
    const aboutElements = container.querySelectorAll(".about-block");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-about");
        } else {
          entry.target.classList.remove("show-about");
        }
      });
    }, {});
    aboutElements.forEach((el) => {
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  const languages = ["Arabic (Native)", "English (B2 - Upper Intermediate)"];

  const renderLeftSectionContent = () => (
    <>
      <div className="about-block">
        <h1>About me</h1>
        <h2>{aboutMe}</h2>
      </div>
      <div className="about-block">
        <h1>Education</h1>
        <ul>
          {education.map((edu, index) => (
            <li key={index}>
              <h2>-{edu}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="about-block">
        <h1>Career</h1>
        <ul>
          {career.map((car, index) => (
            <li key={index * 107}>
              <h2>-{car}</h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const renderRightSectionContent = () => (
    <>
      <div className="about-block">
        <div className="skills-container">
          <h1>Skills</h1>
          {skills.map((skill, index) => (
            <div className="skill" key={index * 2023}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="about-block">
        <div className="languages-container">
          <h1>Languages</h1>
          <ul>
            {languages.map((language, index) => (
              <li className="lang" key={index * 191}>
                <h2>-{language}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <div className="about" ref={aboutContainerRef}>
      <div className="desktop-about">
        <div className="about-left-section">{renderLeftSectionContent()}</div>
        <div className="about-right-section">{renderRightSectionContent()}</div>
      </div>
      <div className="mobile-about">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="swiper"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          touchStartPreventDefault={false}
          simulateTouch={true}
          allowTouchMove={true}
        >
          <SwiperSlide className="swiper-slide about-left-section">
            <div className="swiper-section">{renderLeftSectionContent()}</div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide about-right-section">
            <div className="swiper-section">{renderRightSectionContent()}</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
