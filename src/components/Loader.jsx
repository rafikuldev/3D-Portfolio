// import { Html, useProgress } from "@react-three/drei";

// const Loader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html center className="text-xl font-normal text-center">
//       {progress}% Loaded
//     </Html>
//   );
// };

// export default Loader;

// Main Loader Component⬆️



// import { Html, useProgress } from '@react-three/drei';

// const Loader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html
//       center
//       className="flex flex-col items-center justify-center text-xl font-normal text-center gap-4"
//     >
//       <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
//       <p>{Math.round(progress)}% Loaded</p>
//     </Html>
//   );
// };

// export default Loader;


/////

import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      center
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.75)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.5rem',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          border: '6px solid #7c3aed',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: 20,
        }}
      />
      {Math.round(progress)}% Loaded
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Html>
  );
};

export default Loader;
