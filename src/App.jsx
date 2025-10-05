import React, { useState, useEffect } from "react";
import Splash from "./components/Splash";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashFade, setSplashFade] = useState(false);
  useEffect(() => {
    const splashDuration = 5500;
    const fadeDuration = 1500;
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
        <NavBar></NavBar>
        <Home></Home>
        <About />
      </div>
    </>
  );
}

export default App;
