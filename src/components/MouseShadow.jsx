import { useState, useEffect, useRef, useCallback } from "react";
import "./MouseShadow.css";

export default function MouseShadow() {
  const SMOOTHING = 0.3;
  const glowRef = useRef(null);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setTargetPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    const animateGlow = () => {
      currentPos.current.x += (targetPos.x - currentPos.current.x) * SMOOTHING;
      currentPos.current.y += (targetPos.y - currentPos.current.y) * SMOOTHING;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animateGlow);
    };

    animateGlow();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [handleMouseMove, targetPos.x, targetPos.y]);

  return <div className="mouse-glow" ref={glowRef} />;
}
