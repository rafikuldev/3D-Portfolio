
// import { useEffect, useState } from 'react';

// const BackToTop = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const progress = scrollTop / docHeight;
//       setScrollProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div
//       onClick={handleClick}
//       style={{
//         position: 'fixed',
//         top: '50%',
//         right: '20px',
//         transform: 'translateY(-50%)',
//         writingMode: 'vertical-rl',
//         textOrientation: 'mixed',
//         cursor: 'pointer',
//         zIndex: 1000,
//         display: 'flex',
//         alignItems: 'center',
//         gap: '8px',
//       }}
//     >
//       {/* Text */}
//       <span
//         style={{
//           fontSize: '14px',
//           color: '#fff',
//           letterSpacing: '0.1em',
//           transition: 'color 0.3s',
//         }}
//       >
//         BACK TO TOP
//       </span>

//       {/* Progress bar */}
//       <div
//         style={{
//           width: '4px',
//           height: '100px',
//           backgroundColor: '#333',
//           borderRadius: '2px',
//           overflow: 'hidden',
//           position: 'relative',
//         }}
//       >
//         <div
//           style={{
//             width: '100%',
//             height: `${scrollProgress * 100}%`,
//             backgroundColor: '#fff',
//             position: 'absolute',
//             bottom: 0,
//             transition: 'height 0.2s ease-out',
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default BackToTop;

import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: scrollProgress < 0.05 ? 0 : 1, // Hide on top
        transition: 'opacity 0.3s ease',
      }}
    >
      {/* Progress bar (Up) */}
      <div
        style={{
          width: '4px',
          height: '100px',
          backgroundColor: '#333',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: `${scrollProgress * 100}%`,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            transition: 'height 0.2s ease-out',
          }}
        ></div>
      </div>

      {/* Text (Below bar) */}
      <span
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontSize: '14px',
          color: '#fff',
          letterSpacing: '0.1em',
          transition: 'color 0.3s',
        }}
      >
        BACK TO TOP
      </span>
    </div>
  );
};

export default BackToTop;
