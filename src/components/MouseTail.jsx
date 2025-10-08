import React, { useState, useEffect, useRef, useCallback } from "react";
import "./MouseTail.css";

export default function MouseTail() {
  const MAX_TAIL_LENGTH = 15;
  const EMISSION_RATE = 0;
  const [tail, setTail] = useState([]);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const dx = e.clientX - lastPosition.current.x;
    const dy = e.clientY - lastPosition.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist >= EMISSION_RATE) {
      const newParticle = {
        id: Date.now() + Math.random(),
        y: e.clientY,
        x: e.clientX,
      };

      setTail((prev) => {
        // إضافة النقطة الجديدة وتقليص الطول عند الحركة
        const newTail = [newParticle, ...prev].slice(0, MAX_TAIL_LENGTH);
        return newTail;
      });
      lastPosition.current = { x: e.clientX, y: e.clientY };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // دالة التنظيف: تزيل نقطة واحدة من الخلف كل 50ms لضمان الاختفاء
    const cleanupInterval = setInterval(() => {
      setTail((prev) => {
        if (prev.length > 0) {
          // هنا يتم إرجاع المصفوفة بعد إزالة آخر عنصر (أقدم عنصر)
          return prev.slice(0, prev.length - 1);
        }
        return [];
      });
    }, 30); // سرعة إزالة النقاط (اختفاء أسرع)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, [handleMouseMove]);

  return (
    <>
      {/* تصحيح منطق العرض: استخدم map مباشرة */}
      {tail.map((p, index) => {
        const opacity = 1 - index / MAX_TAIL_LENGTH;
        const scale = 0.5 + opacity * 0.5;
        const styling = {
          transform: `translate3d(${p.x}px, ${p.y}px, 0) scale(${scale}) translate(-50% , -50%)`,
          opacity: opacity,
          transition: "all 0.1s ease-out",
          padding: 0,
          margin: 0,
        };
        return <div key={p.id} className="tail" style={styling}></div>;
      })}
    </>
  );
}
