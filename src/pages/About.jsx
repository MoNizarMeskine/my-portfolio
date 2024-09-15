import React from "react";

export default function About() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-7 mb-5">
      <h1 className="text-3xl text-center font-bold">About me!</h1>

      <div className="md:mt-5 mb-10">
        <h2 className="text-2xl font-bold mb-7">My Skills</h2>
        <div className="flex flex-wrap gap-10 max-w-[800px] px-2">
          
          <div className="html-img flex items-center justify-center rounded-full hover:bg-orange-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/html.svg" alt="HTML" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="css-img flex items-center justify-center rounded-full hover:bg-blue-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/css.svg" alt="CSS" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="git-img flex items-center justify-center rounded-full hover:bg-orange-500 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/git.svg" alt="Git" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="nodejs-img flex items-center justify-center rounded-full hover:bg-yellow-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/nodejs.svg" alt="NodeJS" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="react-img flex items-center justify-center rounded-full hover:bg-blue-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/react.svg" alt="React" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="cplus-img flex items-center justify-center rounded-full hover:bg-blue-100 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/cplus.svg" alt="C++" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="vite-img flex items-center justify-center rounded-full hover:bg-blue-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/vite.svg" alt="Vite" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="java-img flex items-center justify-center rounded-full hover:bg-red-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/java.svg" alt="Java" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="javascript-img flex items-center justify-center rounded-full hover:bg-yellow-400 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/javascript.svg" alt="JavaScript" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="c-img flex items-center justify-center rounded-full hover:bg-blue-100 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/c.svg" alt="C" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="tailwindcss-img flex items-center justify-center rounded-full hover:bg-blue-50 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/tailwindcss.svg" alt="TailwindCSS" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="chatgpt-img flex items-center justify-center rounded-full hover:bg-emerald-500 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/chatgpt.svg" alt="ChatGPT" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="nextjs-img flex items-center justify-center rounded-full hover:bg-blue-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/nextjs.svg" alt="NextJS" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="github-img flex items-center justify-center rounded-full hover:bg-gray-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/github.svg" alt="GitHub" className="w-1/2 h-1/2 object-contain" />
          </div>

          <div className="python-img flex items-center justify-center rounded-full hover:bg-yellow-200 outline md:w-20 md:h-20 sm:w-16 sm:h-16 w-10 h-10 hover:md:w-24 hover:md:h-24 hover:sm:w-20 hover:sm:h-20 hover:w-14 hover:h-14 transition-all duration-300">
            <img src="/public/python.svg" alt="Python" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-5 w-full max-w-[800px]">
        <div class="text-2xl font-bold">Work Experience</div>
          <div class=" flex justify-start">
          <div className="w-2/3 shadow-md shadow-custom-white rounded-lg px-4 pt-2 hover:scale-110 transition duration-300 ease">
              <span className="font-semibold text-md sm:text-lg">German Performance Auto, </span>
              <span className="text-s">Software Engineering Intern</span>
              <ul className="ml-4 list-disc mt-3">
                <li className="text-xs sm:text-sm font-light mb-2">Used Vite, JSX, and Tailwind CSS to develop a responsive website, anticipated to increase user engagement by approximately 40% based
                on projected increases in website traffic and user interaction.</li>
                <li className="text-xs sm:text-sm font-light mb-2">Integrated Google APIs with Vite to build a full-stack website displaying Google Reviews, enhancing user engagement, and significantly
                reducing latency.</li>
                <li className="text-xs sm:text-sm font-light mb-2">Optimized the layout of the webpage and worked on resizing for all screen sizes, ensuring a consistent and user-friendly experience across
                devices.</li>
                <li className="text-xs sm:text-sm font-light mb-2">Utilized Calendly for appointment scheduling, improving customer engagement in sales, rentals, and tint services.</li>
              </ul>
            </div>
          </div>


      </div>






      <div className="flex flex-col gap-4 mt-5 w-full max-w-[800px]">
        <div className="mb-4 gap-4">
          <span className="text-2xl font-semibold">Coursework </span>
          <div className="text-sm">
            <div>
              University of Georgia, <span className="indexed">School of Computing</span>
            </div>
            <div>Bachelor of Science in Computer Science</div>
            <div>Emphasis, Software Design</div>
            <div>GPA: 3.62/4.0</div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="flex">
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
          <div className="flex"></div>
          <div className="flex"></div>

          <div className="flex">
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
          <div className="flex">
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

          <div className="flex">
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