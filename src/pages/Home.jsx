import { useEffect, useState } from "react";
import Contactbar from "../parts/Contactbar";
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate();

  const handleLearnMore = () => {
    setStartAnimation(true); // Start Bitmoji animation
    setTimeout(() => {
      navigate("/about"); // Navigate after animation completes
    }, 1000); // Match this to animation duration (2s here)
  };

  return (
    <div className="text-center my-60 relative">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
        Hi, I'm
      </h1>

      <TypeAnimation
        className="sm:text-3xl md:text-4xl xl:text-[3.2rem] 2xl:text-[3.5rem]"
        sequence={[
          'Mohammed Nizar Meskine',
          2000,
          'a Group Leader',
          1500,
          'a Full Stack Developer',
          1500,
          'a Problem Solver',
          1500,
          'FUN!!!!',
          1500,
          'a Tech Enthusiast',
          1500,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: 'block', color: '#EF5350' }}
        repeat={Infinity}
      />

      <button
        onClick={handleLearnMore}
        className="mt-10 mb-10 px-10 py-3 bg-white text-black rounded-lg hover:px-12 transition duration-300 text-lg hover:opacity-60"
      >
        Learn More
      </button>

      {/* Bitmoji Animation Area */}
   {startAnimation && (
  <div className="relative w-full h-[220px] overflow-hidden mt-10">
    <img
      src="/running.png"
      alt="Running Bitmoji"
      className="absolute left-0 w-[220px] animate-slide-run"
    />
  </div>
)}
    </div>
  );
};

export default Home;