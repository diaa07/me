import { useState, useEffect, useRef } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const [name, setName] = useState("");
  const [shortHint, setShortHint] = useState("");
  const [longHint, setLongHint] = useState("");
  const [shortSkills, setShortSkills] = useState([]);
  const [longSkills, setLongSkills] = useState([]);
  const [img, setImg] = useState(project.img);
  const [code, setCode] = useState("");
  const [demo, setDemo] = useState("");
  const [proId, setProId] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    setCode(project.code);
    setDemo(project.demo);
    setImg(project.img);
    setLongHint(project.longHint);
    setLongSkills(project.longSkills);
    setName(project.name);
    setProId(project.id);
    setShortHint(project.shortHint);
    setShortSkills(project.shortSkills);
  }, [project]);
  useEffect(() => {
    setCode(project.code);
    setDemo(project.demo);
    setImg(project.img);
    setLongHint(project.longHint);
    setLongSkills(project.longSkills);
    setName(project.name);
    setProId(project.id);
    setShortHint(project.shortHint);
    setShortSkills(project.shortSkills);
  }, []);

  const cardContainerRef = useRef(null);
  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-card");
        } else {
          entry.target.classList.remove("show-card");
        }
      });
    }, {});
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="project-card" ref={cardContainerRef}>
      <div className="card-upper-section">
        <img src={img} alt="project image" />
      </div>
      <div className="card-lower-section">
        <h1>{name}</h1>
        <h2>{isExpanded ? longHint : shortHint}</h2>
        {isExpanded ? (
          <div className="expanded-skills">
            <h2>Skills</h2>
            <ul>
              {longSkills.map((skill) => {
                return (
                  <li key={skill.categeory + name + img}>
                    <h3>{skill.categeory} </h3>
                    {skill.techs.map((tech) => {
                      return (
                        <div
                          className="card-skill"
                          key={tech + name + skill.categeory + img}
                        >
                          {tech}
                        </div>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="none-expanded-skills">
            {shortSkills.map((skill) => {
              return (
                <div className="card-skill" key={name + img + demo + skill}>
                  {skill}
                </div>
              );
            })}
          </div>
        )}
        <div className="card-buttons-container">
          <button onClick={toggleExpanded}>
            {isExpanded ? "less" : "more"}
          </button>
          <a href={demo} target="_blank">
            demo ↗️
          </a>
          <a href={code} target="_blank">
            code 🔨
          </a>
        </div>
      </div>
    </div>
  );
}
