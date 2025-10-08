import React, { useState, useEffect } from "react";
import Splash from "./components/Splash";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MouseTail from "./components/MouseTail";
import MouseShadow from "./components/MouseShadow";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashFade, setSplashFade] = useState(false);
  useEffect(() => {
    const splashDuration = 2800;
    const fadeDuration = 800;
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, splashDuration);
    const splashFadeTimer = setTimeout(() => {
      setSplashFade(true);
    }, splashDuration - fadeDuration);
    return () => {
      clearTimeout(splashTimer);
      clearTimeout(splashFadeTimer);
    };
  }, []);

  return (
    <>
      {showSplash ? (
        <Splash isFadingOut={splashFade} id="splash"></Splash>
      ) : (
        <></>
      )}
      <div className={`app ${showSplash ? "hidden" : "displayed"}`} id="app">
        <MouseShadow />
        <NavBar></NavBar>
        <Home></Home>
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
