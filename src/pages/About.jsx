import { useEffect } from "react";

export default function About() {

useEffect(() => {
  const circle = document.getElementById("white-circle");
  const hero = document.getElementById("hero-section");

  const handleScroll = () => {
    if (!circle || !hero) return;

    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    if (scrollY <= heroHeight) {
      // Let the circle grow while inside the hero section
      const maxScale = 1000; // set max growth
      const scale = 1 + scrollY ; // adjust speed here
      circle.style.transform = `scale(${Math.min(scale, maxScale)})`;
    } else {
      // Lock growth at max once user scrolls past
      circle.style.transform = `scale(100)`;
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div>
  {/* Hero Section */}
{/* Hero Section */}
<div id="hero-section" className="w-screen h-screen relative flex flex-col justify-start px-6 pt-16 overflow-hidden">
    <div className="w-full max-w-[1200px] mx-auto mb-20 z-0">
    <h1
      className="sm:text-3xl md:text-4xl xl:text-[3.2rem] 2xl:text-[3.5rem] font-bold text-left"
      style={{ color: '#EF5350' }}
    >
      If this world were mineeeee
    </h1>
  </div>

  <div className="flex justify-center mt-20 z-0 mb-15">
    <img
      src="/relax.png"
      alt="Relax"
      className="w-[550px] h-auto"
    />
  </div>

  {/* Spacer */}
  <div className="flex-grow" />

  {/* White Circle animation element (now inside the hero section only) */}
  <div className="absolute inset-0 flex items-start justify-center pt-[37vh] pointer-events-none z-10">
    <div
      id="white-circle"
      className="bg-white rounded-full w-[20px] h-[20px] transition-transform duration-300 ease-out"
      style={{ transform: 'scale(1)' }}
    ></div>
  </div>
 <div className="flex-grow" />
</div>


     

      <div className="w-full md:w-auto  mb-5 bg-white">
        <h2 className="text-2xl font-bold mb-7">My Skills</h2>
        <div className="flex flex-wrap gap-10 max-w-[800px] sm:w-screen px-2 ">
          {/* Skills Icons */}
          <div className="html-img flex items-center justify-center rounded-full hover:bg-orange-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/html.svg" alt="HTML" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="css-img flex items-center justify-center rounded-full hover:bg-blue-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/css.svg" alt="CSS" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="git-img flex items-center justify-center rounded-full hover:bg-orange-500 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/git.svg" alt="Git" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="nodejs-img flex items-center justify-center rounded-full hover:bg-yellow-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/nodejs.svg" alt="NodeJS" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="react-img flex items-center justify-center rounded-full hover:bg-blue-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/react.svg" alt="React" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="cplus-img flex items-center justify-center rounded-full hover:bg-blue-100 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/cplus.svg" alt="C++" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="vite-img flex items-center justify-center rounded-full hover:bg-blue-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/vite.svg" alt="Vite" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="java-img flex items-center justify-center rounded-full hover:bg-red-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/java.svg" alt="Java" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="javascript-img flex items-center justify-center rounded-full hover:bg-yellow-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/javascript.svg" alt="JavaScript" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="c-img flex items-center justify-center rounded-full hover:bg-blue-100 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/c.svg" alt="C" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="tailwindcss-img flex items-center justify-center rounded-full hover:bg-blue-50 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/tailwindcss.svg" alt="TailwindCSS" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="chatgpt-img flex items-center justify-center rounded-full hover:bg-emerald-500 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/chatgpt.svg" alt="ChatGPT" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="nextjs-img flex items-center justify-center rounded-full hover:bg-blue-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/nextjs.svg" alt="NextJS" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="github-img flex items-center justify-center rounded-full hover:bg-gray-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/github.svg" alt="GitHub" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="python-img flex items-center justify-center rounded-full hover:bg-yellow-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/python.svg" alt="Python" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="flex flex-col gap-4 mt-5 w-full max-w-[800px]">
        <div className="text-2xl font-bold">Work Experience</div>
        <div className="flex justify-start">
          <div className="w-2/3 shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-110 transition duration-300 ease">
            <span className="font-semibold text-md sm:text-lg">German Performance Auto, </span>
            <span className="text-s">Software Engineering Intern</span>
            <ul className="ml-4 list-disc mt-3">
              <li className="text-xs sm:text-sm font-light mb-2">
                Used Vite, JSX, and Tailwind CSS to develop a responsive website, anticipated to increase user engagement by approximately 40%.
              </li>
              <li className="text-xs sm:text-sm font-light mb-2">
                Integrated Google APIs with Vite to build a full-stack website displaying Google Reviews, enhancing user engagement.
              </li>
              <li className="text-xs sm:text-sm font-light mb-2">
                Optimized the layout of the webpage, ensuring a consistent and user-friendly experience across devices.
              </li>
              <li className="text-xs sm:text-sm font-light mb-2">
                Utilized Calendly for appointment scheduling, improving customer engagement in sales, rentals, and services.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coursework Section */}
      <div className="flex flex-col gap-4 mt-5 w-full max-w-[800px]">
        <div className="mb-4 gap-4">
          <span className="text-2xl font-semibold">Coursework</span>
          <div className="text-sm">
            <div>
              University of Georgia, <span className="indexed">School of Computing</span>
            </div>
            <div>Bachelor of Science in Computer Science</div>
            <div>Emphasis, Software Design</div>
            <div>GPA: 3.62/4.0</div>
          </div>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="flex mb-9">
            <div className="w-full shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-110 transition duration-300 ease">
              <span className="font-semibold text-md sm:text-lg">Data Structures</span>
              <ul className="ml-4 list-disc">
                <li className="text-xs sm:text-sm font-light mb-2">Linked Lists</li>
                <li className="text-xs sm:text-sm font-light mb-2">Trees and Graphs</li>
                <li className="text-xs sm:text-sm font-light mb-2">Sorting Algorithms</li>
                <li className="text-xs sm:text-sm font-light mb-2">Complexity Analysis</li>
              </ul>
            </div>
          </div>
          
          {/* Empty flex boxes can be removed if not necessary */}
          <div className="flex"></div>
          <div className="flex"></div>

          <div className="flex mb-12">
            <div className="w-full shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-110 transition duration-300 ease">
              <span className="font-semibold text-md sm:text-lg">Software Development</span>
              <ul className="ml-4 list-disc">
                <li className="text-xs sm:text-sm font-light mb-2">Inheritance</li>
                <li className="text-xs sm:text-sm font-light mb-2">Polymorphism</li>
                <li className="text-xs sm:text-sm font-light mb-2">JavaFx</li>
                <li className="text-xs sm:text-sm font-light mb-2">Generics</li>
              </ul>
            </div>
          </div>

          <div className="flex mb-9">
            <div className="w-full shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-110 transition duration-300 ease">
              <span className="font-semibold text-md sm:text-lg">Systems Programming</span>
              <ul className="ml-4 list-disc">
                <li className="text-xs sm:text-sm font-light mb-2">Low-Level Programming Concepts</li>
                <li className="text-xs sm:text-sm font-light mb-2">Operating System Interfacing</li>
                <li className="text-xs sm:text-sm font-light mb-2">Debugging and Optimization</li>
                <li className="text-xs sm:text-sm font-light mb-2">Concurrency and Multithreadings</li>
              </ul>
            </div>
          </div>
          
          <div className="flex"></div>
          <div className="flex"></div>

          <div className="flex mb-9">
            <div className="w-full shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-110 transition duration-300 ease">
              <span className="font-semibold text-md sm:text-lg">Introduction of Theory of Computing</span>
              <ul className="ml-4 list-disc">
                <li className="text-xs sm:text-sm font-light mb-2">Formal Languages and Automata</li>
                <li className="text-xs sm:text-sm font-light mb-2">Computability and Decidability</li>
                <li className="text-xs sm:text-sm font-light mb-2">Complexity Theory</li>
                <li className="text-xs sm:text-sm font-light mb-2">Mathematical Foundations of Computation</li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <div className="w-full shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-110 transition duration-300 ease">
              <span className="font-semibold text-md sm:text-lg">Algorithms</span>
              <ul className="ml-4 list-disc">
                <li className="text-xs sm:text-sm font-light mb-2">Advanced Algorithm Design</li>
                <li className="text-xs sm:text-sm font-light mb-2">Graph Algorithms</li>
                <li className="text-xs sm:text-sm font-light mb-2">Algorithm Complexity and Optimization</li>
                <li className="text-xs sm:text-sm font-light mb-2">NP-Completeness and Computational Intractability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}