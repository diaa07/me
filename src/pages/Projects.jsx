import "./Projects.css";
import { useEffect, useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Movie app",
      shortHint:
        "A modern movie and TV series browser built with React and TMDB API. It allows users to explore trending films, view detailed information, and discover new content through an elegant and responsive interface.",
      longHint: `This project is a fully functional movie and TV series web application developed using React.js and integrated with The Movie Database (TMDB) API.
      The app enables users to browse popular, trending, and top-rated movies and series, view detailed information including cast, genres, ratings, and release dates, and navigate seamlessly through categories using React Router.
      It features a clean and responsive design optimized for different screen sizes, ensuring an intuitive and engaging user experience.
      Data management is handled efficiently using React Context API for global state and Axios for API requests.
      The goal of the project was to demonstrate practical skills in building real-world, API-driven React applications, focusing on performance, reusability, and modern UI principles.`,
      shortSkills: ["React.js", "JS", "TMDB API", "Color themes"],
      longSkills: [
        {
          categeory: "Frontend",
          techs: ["React.js", "React Router", "Context API"],
        },
        {
          categeory: "Styling",
          techs: ["CSS3", "Responsive Design"],
        },
        {
          categeory: "API",
          techs: ["The Movie Database (TMDB) API"],
        },
        {
          categeory: "Others",
          techs: ["Axios", "React Icons"],
        },
      ],
      img: "https://i.ibb.co/DHbWPygf/Screenshot-2025-07-09-015406.png",
      code: "https://github.com/diaa07/movie-app",
      demo: "https://diaa07.github.io/movie-app/",
    },
    {
      id: 2,
      name: "AI Image Generator",
      shortHint:
        "An AI-powered image generation app that transforms text prompts into unique visuals using the Imagine API. It supports multiple aspect ratios, artistic styles, and keeps a local history of generated images.",
      longHint: `This project is an AI image generator built with React.js and integrated with the Imagine (Vyro) API to create high-quality images from text prompts.
  Users can select different aspect ratios and image styles such as anime, realistic, or artistic models, then generate and download AI-rendered images instantly.
  The app includes a local history feature that stores previous generations using the browser's localStorage, allowing users to revisit or re-download their creations.
  It features a modern dark-themed responsive UI, designed with accessibility and smooth user interaction in mind.
  The main goal of this project was to explore real-time API integration, handle asynchronous requests efficiently, and deliver an intuitive creative experience powered by artificial intelligence.`,
      shortSkills: ["React.js", "Imagine API", "AI Tools", "LocalStorage"],
      longSkills: [
        {
          categeory: "Frontend",
          techs: ["React.js", "JavaScript (ES6+)"],
        },
        {
          categeory: "Styling",
          techs: ["CSS3", "Responsive Design"],
        },
        {
          categeory: "API",
          techs: ["Imagine (Vyro) API"],
        },
        {
          categeory: "Others",
          techs: ["Fetch API", "LocalStorage", "Async/Await"],
        },
      ],
      img: "https://i.ibb.co/JN800sT/Screenshot-2025-07-16-135320.png",
      code: "https://github.com/diaa07/AI-image-generator",
      demo: "https://diaa07.github.io/AI-image-generator/",
    },
    {
      id: 3,
      name: "Prayer Times App",
      shortHint:
        "A responsive Islamic web app that displays daily prayer times based on the user's current location or selected city, using Aladhan API and geolocation services.",
      longHint: `This project is a fully functional Islamic web application developed with React.js that provides accurate prayer times based on the user’s current location or a searched city.
  It integrates the Aladhan API for precise daily prayer timings and the IPAPI and OpenStreetMap geocoding services for location detection.
  The app features a smooth and minimal Arabic interface with a dark olive theme inspired by traditional Islamic aesthetics.
  Users can view upcoming prayers, a countdown timer for the next prayer, and dynamically highlighted prayer cards.
  The project also includes real-time updates, location fallback handling, and responsive layout for mobile users.
  It was built to demonstrate skills in working with multiple APIs, state management with React Context, and delivering an accessible multilingual user experience.`,
      shortSkills: ["React.js", "Aladhan API", "Geolocation", "Context API"],
      longSkills: [
        {
          categeory: "Frontend",
          techs: ["React.js", "JavaScript (ES6+)", "React Context API"],
        },
        {
          categeory: "Styling",
          techs: ["CSS3", "Responsive Design", "Arabic Typography"],
        },
        {
          categeory: "API",
          techs: [
            "Aladhan API",
            "IPAPI (Location Detection)",
            "OpenStreetMap / Open Meteo Geocoding API",
          ],
        },
        {
          categeory: "Others",
          techs: ["Fetch API", "Async/Await", "Error Handling"],
        },
      ],
      img: "https://i.ibb.co/dwj6jY15/Screenshot-2025-07-09-015913.png",
      code: "https://github.com/diaa07/prayer-times-app",
      demo: "https://diaa07.github.io/prayer-times-app/",
    },
    {
      id: 4,
      name: "Rock Paper Scissors",
      shortHint:
        "A fun and interactive Rock Paper Scissors game built with React.js, featuring smooth animations, local score tracking, and responsive design for all devices.",
      longHint: `This project is a modern implementation of the classic Rock Paper Scissors game developed using React.js.
  The game allows users to play against a computer opponent, featuring real-time feedback, animations, and a dynamic result display.
  Player and computer scores are stored persistently using the browser’s localStorage, allowing the session data to be saved even after refreshing.
  The interface features an elegant dark theme, responsive layout, and smooth transitions for better user experience.
  This project was designed to demonstrate understanding of React state management, event handling, modular component design, and local data persistence.`,
      shortSkills: ["React.js", "Game Logic", "LocalStorage", "Animations"],
      longSkills: [
        {
          categeory: "Frontend",
          techs: [
            "React.js",
            "JavaScript (ES6+)",
            "Component-based Architecture",
          ],
        },
        {
          categeory: "Styling",
          techs: ["CSS3", "Responsive Design", "Animations"],
        },
        {
          categeory: "Logic",
          techs: ["Game Mechanics", "State Management", "Event Handling"],
        },
        {
          categeory: "Others",
          techs: ["LocalStorage", "Modular Code Structure"],
        },
      ],
      img: "https://i.ibb.co/5xBW2cSg/Screenshot-2025-07-09-015727.png",
      code: "https://github.com/diaa07/rock-paper-scissors-game",
      demo: "https://diaa07.github.io/rock-paper-scissors-game/",
    },
  ];

  const [pages, setPages] = useState(1);
  const elementsPerPage = 2;
  const maxProjectsCount = projects.length;
  const maxPagesCount = Math.ceil(maxProjectsCount / elementsPerPage);
  const [elemntsCount, setElementsCount] = useState(
    Math.min(elementsPerPage, maxProjectsCount)
  );
  const [currProjects, setCurrProjects] = useState(
    projects.slice(0, elemntsCount)
  );
  const increaseProjectsCount = () => {
    setPages(Math.min(pages + 1, maxPagesCount));
  };
  const decreaseProjectsCount = () => {
    setPages(Math.max(1, pages - 1));
  };
  useEffect(() => {
    const newElementsCount = Math.min(
      maxProjectsCount,
      pages * elementsPerPage
    );
    setElementsCount(newElementsCount);
    setCurrProjects(projects.slice(0, newElementsCount));
  }, [pages]);

  const ttlContainerRef = useRef(null);
  useEffect(() => {
    const container = ttlContainerRef.current;
    if (!container) return;
    const aboutElements = container.querySelectorAll(".ttl-txt");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-title");
        } else {
          entry.target.classList.remove("show-title");
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

  return (
    <div className="portfolio-page">
      <div
        className="portfolio-upper-section"
        id="projects"
        ref={ttlContainerRef}
      >
        <h1 className="ttl-txt">Portfolio</h1>
        <h2 className="ttl-txt">
          I love to turn ideas into code, and I'm always working on something
          new! You can view my projects below.
        </h2>
      </div>
      <div className="cards-section">
        <div className="cards-container">
          {currProjects.map((project) => {
            return <ProjectCard project={project} key={project.img} />;
          })}
        </div>
        <div className="pagination-container">
          {pages < maxPagesCount ? (
            <button onClick={increaseProjectsCount}>Show more</button>
          ) : (
            ""
          )}
          {pages > 1 ? (
            <button onClick={decreaseProjectsCount}>Show less</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
