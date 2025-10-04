import React, { useState, useEffect } from "react";
import Splash from "./components/Splash";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

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

  if (showSplash) {
    return (
      <>
        <Splash isFadingOut={splashFade}></Splash>
      </>
    );
  }
  return (
    <>
      <div className="app">
        <NavBar></NavBar>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
