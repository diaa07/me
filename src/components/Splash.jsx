import React, { useState, useEffect } from "react";
import "./Splash.css";

export default function Splash() {
  const [text, setText] = useState("");
  const fullText = "<Hello world!>";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let timeout;
    if (!isDeleting && index <= fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 80);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index - 1);
      }, 80);
    } else if (!isDeleting && index > fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setIndex(0);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [index, isDeleting, text]);
  return (
    <div className="splash">
      <div className="splash-text">
        {text}
        <span className="blinker">|</span>
      </div>
      <div className="bar-container">
        <div className="bar"></div>
      </div>
    </div>
  );
}
