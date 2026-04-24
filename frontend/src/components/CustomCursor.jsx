// import { useEffect, useRef } from "react";

// export default function CustomCursor() {
//   const cursorRef = useRef(null);
//   const pos = useRef({ x: 0, y: 0 });
//   const smooth = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => {
//       pos.current.x = e.clientX;
//       pos.current.y = e.clientY;
//     };

//     window.addEventListener("mousemove", move);

//     const animate = () => {
//       smooth.current.x += (pos.current.x - smooth.current.x) * 0.1;
//       smooth.current.y += (pos.current.y - smooth.current.y) * 0.1;

//       if (cursorRef.current) {
//         cursorRef.current.style.transform =
//           `translate3d(${smooth.current.x}px, ${smooth.current.y}px, 0)`;
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="fixed top-0 left-0 pointer-events-none z-9999 w-4 h-4 bg-white rounded-full mix-blend-difference"
//       style={{
//         transform: "translate3d(0,0,0)",
//       }}
//     />
//   );
// }