import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (!cursor) return;

      const isTextTag = e.target.matches("p, h1, h2, h3, span, a, button");
      const offset = isTextTag ? 24 : 8;

      cursor.style.transform = `translate3d(${clientX - offset}px, ${
        clientY - offset
      }px, 0)`;
      cursor.style.width = isTextTag ? "48px" : "16px";
      cursor.style.height = isTextTag ? "48px" : "16px";
      cursor.style.border = isTextTag ? "2px solid #a855f7" : "none";
      cursor.style.backgroundColor = isTextTag ? "transparent" : "#a855f7";
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference transition-transform duration-75 ease-linear"
      style={{ width: "16px", height: "16px", backgroundColor: "#a855f7" }}
    ></div>
  );
};

export default CustomCursor;
