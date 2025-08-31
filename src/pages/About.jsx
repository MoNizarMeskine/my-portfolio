import { useEffect, useRef, useState } from "react";

function PlayerHolder({ img, isDragging, onDragStart, onDragOver, onDrop, onDragEnd, idx }) {
  return (
    <div
      key={idx}
      className={`flex items-center justify-center cursor-move font-bold text-lg border-0 rounded-full
        ${isDragging ? "bg-gray-200 border-dashed border-4" : ""}
      `}
      style={{
        width: "12rem",
        height: "12rem",
        minWidth: "12rem",
        minHeight: "12rem",
        transition: "background 0.2s, border 0.2s",
        background: "transparent",
        boxShadow: "none"
      }}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    >
      <img
        src={img}
        alt={`Player ${idx + 1}`}
        className="object-contain rounded-full"
        style={{
          width: "12rem",
          height: "12rem",
          maxWidth: "100%",
          maxHeight: "100%",
          opacity: isDragging ? 0.5 : 1, // Faded when dragging
          pointerEvents: "none" // Prevents drag image glitches
        }}
      />
    </div>
  );
}

// Update SidebarPlayer to use the same style as PlayerHolder

function SidebarPlayer({ img, idx, onDragStart, isDragging, onDragOver, onDrop, onDragEnd }) {
  return (
    <div
      key={idx}
      className={`flex items-center justify-center cursor-move font-bold text-lg border-0 rounded-full
        ${isDragging ? "bg-gray-200 border-dashed border-4" : ""}
      `}
      style={{
        width: "12rem",
        height: "12rem",
        minWidth: "12rem",
        minHeight: "12rem",
        transition: "background 0.2s, border 0.2s",
        background: "transparent",
        boxShadow: "none",
        marginBottom: "1.5rem"
      }}
      draggable
      onDragStart={e => onDragStart(idx, img, e)}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    >
      <img
        src={img}
        alt={`Sidebar Player ${idx + 1}`}
        className="object-contain rounded-full"
        style={{
          width: "12rem",
          height: "12rem",
          maxWidth: "100%",
          maxHeight: "100%",
          opacity: isDragging ? 0.5 : 1,
          pointerEvents: "none"
        }}
      />
    </div>
  );
}

// Update ProjectCard to accept a custom color for the number/suit area:

function ProjectCard({ title, description, lifted, onClick, number, suit, numberColor }) {
  const suitSymbols = {
    hearts: { symbol: "♥", color: "#e3342f" },
    spades: { symbol: "♠", color: "#22292f" },
    diamonds: { symbol: "♦", color: "#e3342f" },
    clubs: { symbol: "♣", color: "#22292f" }
  };
  const suitObj = suitSymbols[suit] || suitSymbols.spades;

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 w-64 h-72 flex flex-col items-center justify-center cursor-pointer transition-all duration-300
        ${lifted ? "translate-y-[-40px] shadow-2xl z-20" : "translate-y-0"}
      `}
      style={{
        boxShadow: lifted
          ? "0 12px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.10)"
          : "0 2px 8px rgba(0,0,0,0.10)",
        transform: lifted ? "translateY(-40px) scale(1.05)" : "translateY(0) scale(1)",
        position: "relative",
        width: "20rem",    // <-- add or update this
        height: "24rem"    // <-- add or update this
      }}
      onClick={onClick}
    >
      {/* Card number in top left */}
      <span
        className="absolute top-3 left-4 text-2xl font-bold select-none"
        style={{ zIndex: 30, color: numberColor || "#a3a3a3" }}
      >
        {number}
        <br />
        <span style={{ color: suitObj.color, fontSize: "1.3rem", lineHeight: 1 }}>
          {suitObj.symbol}
        </span>
      </span>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <p className="text-gray-600 text-xs text-center">{description}</p>
    </div>
  );
}

export default function About() {
  const skillsSectionRef = useRef(null);

  // Add state to control white circle visibility
const [showWhiteCircle, setShowWhiteCircle] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowWhiteCircle(window.scrollY > 0);
    const circle = document.getElementById("white-circle");
    const hero = document.getElementById("hero-section");
    if (!circle || !hero) return;
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const maxScale = 1000;
    if (scrollY <= heroHeight) {
      const scale = 1 + scrollY;
      circle.style.transform = `scale(${Math.min(scale, maxScale)})`;
    } else {
      circle.style.transform = `scale(${maxScale})`;
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [currentDir, setCurrentDir] = useState("Desktop"); // <-- change to Desktop
  const terminalOutputRef = useRef(null);

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [terminalOutput]); // <-- scroll only the terminal output area

  const lsItems = [
    "csci_1301",
    "csci_1302",
    "csci_1730",
    "csci_2150",
    "csci_2610",
    "csci_2670",
    "csci_2720",
    "csci_3030",
    "csci_4050",
    "csci_4300",
    "csci_4370",
    "csci_4380",
    "csci_4470",
    "csci_4720",
    "csci_4760"
  ];

  const classDescriptions = {
  csci_1301: "Introduction to Computing and Programming – Algorithms, program development, and computing systems using structured programming techniques.",  
  csci_1302: "Software Development – Object-oriented development in Java, emphasizing top-down design, testing, modularity, and structured techniques." ,
  csci_1730: "Systems Programming – Unix-based systems programming, including file and directory I/O, processes, and inter-process communication." , 
  csci_2150: "Introduction to Computational Science – Numerical methods and quantitative reasoning using mathematical software in science and engineering contexts." ,
  csci_2610: "Discrete Mathematics for Computer Science – Logic, sets, relations, functions, proof techniques, sums, recurrences, and asymptotics."  ,
  csci_2670: "Introduction to Theory of Computing – Finite automata, regular expressions, grammars, Turing machines, computability, and reducibility."  ,
  csci_2720: "Data Structures – Design, analysis, and implementation of lists, stacks, queues, trees, graphs, dictionaries, sorting, and searching algorithms."  ,
  csci_3030: "Computing, Ethics, and Society – Examination of social and ethical issues in computing, including privacy, IP, open source, and social justice." ,
  csci_4050: "Software Engineering – Entire software development life cycle including requirements, design, implementation, testing, and large term projects." ,
  csci_4300: "Web Programming – Full-stack development covering client-side and server-side technologies (HTML, CSS, JavaScript, backend integration)." , 
  csci_4370: "Database Management – Design and use of relational databases using SQL, normalization, ER modeling, and transaction control." , 
  csci_4380: "Data Mining – Techniques for finding patterns in data including clustering, classification, and data analysis pipelines." , 
  csci_4470: "Algorithms – Advanced algorithm design and analysis, including complexity theory and NP-completeness concepts." ,
  csci_4720: "Computer Architecture & Organization – Structure and behavior of computer systems including datapaths and control units." ,
  csci_4760: "Computer Networks – Introduction to networking technologies and applications including protocols, routing, and communication models." 
};

  // Soccer formation state for draggable players
  const playerImages = [
    "/player1.png",
    "/player2.png",
    "/player3.png",
    "/player4.png",
    "/player5.png",
    "/player6.png",
    "/player7.png",
    "/player8.png",
    "/player9.png",
    "/player10.png",
    "/player11.png",
    "/player12.png",
    "/player13.png",
    "/player14.png",
    "/player15.png",
    "/player16.png",
    "/player17.png",
    "/player18.png",
    "/player19.png",
    "/player20.png",
    "/player21.png"
  ];
  const [players, setPlayers] = useState(playerImages.slice(0, 11)); // 11 on field
  const [bench, setBench] = useState(playerImages.slice(11)); // 5 on bench
  const [draggedIdx, setDraggedIdx] = useState(null);
  const [draggedFromBench, setDraggedFromBench] = useState(false);
  const [draggedImg, setDraggedImg] = useState(null);
  // 1. Add state to control visibility of the soccer section:
  const [showSoccerSection, setShowSoccerSection] = useState(false);
  const [openApp, setOpenApp] = useState(null); // null, "skills", or "projects"

  // Handler for starting drag from bench
  const handleBenchDragStart = (idx, img, e) => {
    setDraggedIdx(idx);
    setDraggedFromBench(true);
    setDraggedImg(img);
    // Optionally: e.dataTransfer.effectAllowed = "move";
  };

  // Handler for starting drag from field
  const handleFieldDragStart = idx => {
    setDraggedIdx(idx);
    setDraggedFromBench(false);
    setDraggedImg(players[idx]);
  };

  // Handler for dropping on field
  const handleFieldDrop = idx => {
    if (draggedFromBench && draggedImg) {
      // Replace field player with bench player, move field player to bench
      const newPlayers = [...players];
      const replaced = newPlayers[idx];
      newPlayers[idx] = draggedImg;
      const newBench = [...bench];
      newBench[draggedIdx] = replaced;
      setPlayers(newPlayers);
      setBench(newBench);
    } else if (!draggedFromBench && draggedIdx !== null && draggedIdx !== idx) {
      // Swap field players
      const newPlayers = [...players];
      [newPlayers[draggedIdx], newPlayers[idx]] = [newPlayers[idx], newPlayers[draggedIdx]];
      setPlayers(newPlayers);
    }
    setDraggedIdx(null);
    setDraggedFromBench(false);
    setDraggedImg(null);
  };

  // NEW: Handler for dropping on bench
const handleBenchDrop = idx => {
  if (!draggedFromBench && draggedImg) {
    // Field to bench swap (already implemented)
    const newBench = [...bench];
    const replaced = newBench[idx];
    newBench[idx] = draggedImg;
    const newPlayers = [...players];
    newPlayers[draggedIdx] = replaced;
    setPlayers(newPlayers);
    setBench(newBench);
  } else if (draggedFromBench && draggedIdx !== null && draggedIdx !== idx) {
    // Bench to bench swap (NEW)
    const newBench = [...bench];
    [newBench[draggedIdx], newBench[idx]] = [newBench[idx], newBench[draggedIdx]];
    setBench(newBench);
  }
  setDraggedIdx(null);
  setDraggedFromBench(false);
  setDraggedImg(null);
};

// 1. Add this handler inside your About component:
const handleCloseSoccerSection = () => {
  setOpenApp(null);
  setShowSoccerSection(false);
  setTerminalOutput([
    ...terminalOutput,
    <span key={terminalOutput.length} className="text-green-500">
      $mohmammednizar Desktop % <span className="text-white">[app closed]</span>
    </span>,
    <span key={terminalOutput.length + 1} className="text-white">
      Application closed.
    </span>
  ]);
};

  // In your About component, add this state:
  const [liftedCards, setLiftedCards] = useState([false, false, false, false]);

  // Handler to toggle card lift
  const handleCardToggle = idx => {
    setLiftedCards(liftedCards =>
      liftedCards.map((lifted, i) => (i === idx ? !lifted : lifted))
    );
  };

  const cardNumbers = ["2", "7", "A", "2"];
  const cardSuits = ["hearts", "spades", "diamonds", "clubs"];
  const cardNumberColors = ["#e3342f", "#22292f", "#e3342f", "#22292f"]; // red, blue, orange, green

  // Add these for the draggable bar in Experience section
  const [knobX, setKnobX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = e => {
      const bar = barRef.current;
      if (!bar) return;
      const rect = bar.getBoundingClientRect();
      let x = e.clientX - rect.left - 24; // 24 = knob radius
      x = Math.max(0, Math.min(x, rect.width - 48)); // 48 = knob diameter
      setKnobX(x);
    };

    const handleMouseUp = () => {
      setDragging(false);
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.userSelect = "none";
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
    };
  }, [dragging]);

  return (
    <div>
      {/* Hero Section */}
      <div
        id="hero-section"
        className="w-screen h-screen relative flex flex-col justify-start px-5 pt-16 overflow-hidden"
      >
        <div className="w-full max-w-[1200px] mx-auto mb-20 z-0">
          <h1
            className="sm:text-3xl md:text-4xl xl:text-[3.2rem] 2xl:text-[3.5rem] font-bold text-left"
            style={{ color: "#EF5350" }}
          >
            If this world were mineeeee
          </h1>
        </div>

        <div className="flex justify-center mt-20 z-0 mb-15">
          <img src="/relax.png" alt="Relax" className="w-[550px] h-auto" />
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* White Circle animation element (now inside the hero section only) */}
        {showWhiteCircle && (
  <div className="absolute inset-0 flex items-start justify-center pt-[37vh] pointer-events-none z-10">
    <div
      id="white-circle"
      className="bg-white rounded-full w-[20px] h-[20px] transition-transform duration-300 ease-out"
      style={{ transform: "scale(1)" }}
    ></div>
  </div>
)}
<div className="flex-grow" />
      </div>

      <div className="w-full flex flex-col items-center justify-center px-6 py-20 bg-white min-h-screen">
        <div className="flex justify-center mt-20 z-0 mb-15">
          <img src="/yeye2.png" alt="Relax" className="w-[440px] h-[200px]" />
        </div>
        
        {/* Layout Container */}
        <div className="flex flex-col max-w-[3000px] w-fit mb-20">
          {/* Simulated Computer Window */}
<div className="bg-gray-100 border-[3px] border-gray-400 rounded-lg w-full h-auto shadow-[0_0_20px_rgba(0,0,0,0.1)] flex flex-col justify-between p-4 relative overflow-hidden desktop:w-[1500px] desktop:h-[700px]">
            {/* Top Colored Dots */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            {/* Main Row: Folders (left) + Right Container */}
            <div className="flex flex-row flex-1 gap-8">
              {/* Folder Buttons */}
              <div className="flex flex-col gap-4 mt-6">
                {/* Folder: Experience */}
                <button className="flex flex-col items-center w-20 focus:outline-none hover:scale-105 transition-transform">
                  <img src="/netflix1.png" alt="Work Folder" className="w-13 h-auto" />
                  <span className="text-sm text-black mt-1">Experience.app</span>
                </button>

                {/* Folder: Projects */}
                <button className="flex flex-col items-center w-20 focus:outline-none hover:scale-105 transition-transform">
                  <img src="/cards.png" alt="Work Folder" className="w-10 h-auto" />
                  <span className="text-sm text-black mt-1">Projects.app</span>
                </button>

                {/* Folder: Skills */}
                <button className="flex flex-col items-center w-20 focus:outline-none hover:scale-105 transition-transform">
                  <img src="/ea.png" alt="Work Folder" className="w-19 h-auto" />
                  <span className="text-sm text-black mt-1">Skills.app</span>
                </button>

                {/* Folder: Classwork */}
                <button className="flex flex-col items-center w-20 focus:outline-none hover:scale-105 transition-transform">
                  <img src="/folder.png" alt="Work Folder" className="w-13 h-auto" />
                  <span className="text-sm text-black mt-1">Classwork</span>
                </button>
              </div>

              {/* 👉 Right Flex Container */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-3xl h-[400px] bg-[#18181b] rounded-lg shadow-inner border border-gray-700 py-2 px-6 font-mono text-green-400 text-base flex flex-col">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                  </div>
                  {/* Terminal output fills available space and scrolls if needed */}
                  <div className="flex-1 overflow-y-auto pr-2" ref={terminalOutputRef}>
                    {terminalOutput.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                  {/* Terminal input */}
                  <div className="flex mt-4 items-center">
                    <span
                      className="text-green-500 flex-shrink-0"
                      style={{ minWidth: "160px", display: "inline-block" }}
                    >
                    $mohmammednizar {currentDir} %
                    </span>
                    <input
                      type="text"
                      className="bg-transparent border-none outline-none text-white ml-2 w-full placeholder-gray-500"
                      placeholder={terminalOutput.length === 0 ? "Type 'help' for instructions, or enter command" : ""}
                      value={terminalInput}
                      onChange={e => setTerminalInput(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === "Enter") {
                          const command = terminalInput.trim();
                          if (command !== "") {
                            if (command === "clear") {
                              setTerminalOutput([]);
                            } else if (currentDir === "Desktop" && command === "help") {
                              setTerminalOutput([
                                ...terminalOutput,
                                <span key={terminalOutput.length} className="text-green-500">
                                  $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                </span>,
                                <span key={terminalOutput.length + 1} className="text-white">
                                  Welcome! Navigate to my Classwork folder using cd Classwork to see the list of classes I’ve taken. To run an app, simply use the command run [app name].
                                </span>
                              ]);
                            } else if (currentDir === "Desktop" && command === "ls") {
                              setTerminalOutput([
                                ...terminalOutput,
                                <span key={terminalOutput.length} className="text-green-500">
                                  $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                </span>,
                                <span key={terminalOutput.length + 1} className="text-white">
                                  Experience.app&nbsp;Projects.app&nbsp;<span className="text-blue-400">Classwork</span>&nbsp;Skills.app
                                </span>
                              ]);
                            } else if (currentDir === "Desktop" && command === "run Skills.app") {
                              if (openApp) {
                                setTerminalOutput([
                                  ...terminalOutput,
                                  <span key={terminalOutput.length} className="text-green-500">
                                    $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                  </span>,
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    An application is already open. Please close it before opening another.
                                  </span>
                                ]);
                              } else {
                                setTerminalOutput([
                                  ...terminalOutput,
                                  <span key={terminalOutput.length} className="text-green-500">
                                    $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                  </span>,
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    Opening Skills.app...
                                  </span>
                                ]);
                                setOpenApp("skills");
                                setTimeout(() => {
                                  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                                }, 300);
                              }
                            } else if (currentDir === "Desktop" && command === "run Projects.app") {
                              if (openApp) {
                                setTerminalOutput([
                                  ...terminalOutput,
                                  <span key={terminalOutput.length} className="text-green-500">
                                    $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                  </span>,
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    An application is already open. Please close it before opening another.
                                  </span>
                                ]);
                              } else {
                                setTerminalOutput([
                                  ...terminalOutput,
                                  <span key={terminalOutput.length} className="text-green-500">
                                    $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                  </span>,
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    Opening Projects.app...
                                  </span>
                                ]);
                                setOpenApp("projects");
                                setTimeout(() => {
                                  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                                }, 300);
                              }
                            } else if (currentDir === "Desktop" && command === "run Experience.app") {
                              if (openApp) {
                                setTerminalOutput([
                                  ...terminalOutput,
                                  <span key={terminalOutput.length} className="text-green-500">
                                    $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                  </span>,
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    An application is already open. Please close it before opening another.
                                  </span>
                                ]);
                              } else {
                                setTerminalOutput([
                                  ...terminalOutput,
                                  <span key={terminalOutput.length} className="text-green-500">
                                    $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                  </span>,
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    Opening Experience.app...
                                  </span>
                                ]);
                                setOpenApp("experience");
                                setTimeout(() => {
                                  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                                }, 300);
                              }
                            } else if (currentDir === "Desktop" && command === "cd Classwork") {
                              setCurrentDir("Classwork");
                              setTerminalOutput([
                                ...terminalOutput,
                                <span key={terminalOutput.length} className="text-green-500">
                                  $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                </span>,
                              ]);
                            } else if (currentDir === "Desktop") {
                              setTerminalOutput([
                                ...terminalOutput,
                                <span key={terminalOutput.length} className="text-green-500">
                                  $mohmammednizar Desktop % <span className="text-white">{command}</span>
                                </span>,
                                <span key={terminalOutput.length + 1} className="text-white">
                                  command not found: {command}
                                </span>
                              ]);
                            } else if (currentDir === "Classwork" && command === "cd ..") {
                              setCurrentDir("Desktop");
                              setTerminalOutput([
                                ...terminalOutput,
                                <span key={terminalOutput.length} className="text-green-500">
                                  $mohmammednizar Classwork % <span className="text-white">{command}</span>
                                </span>,
                              
                              ]);
                            } else {
                              // In Classwork
                              let newLines = [
                                <span key={terminalOutput.length} className="text-green-500">
                                  $mohmammednizar Classwork % <span className="text-white">{command}</span>
                                </span>
                              ];
                              if (command === "help") {
                                newLines.push(
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    Lol, you don’t know how to use terminal? Anyways, use the command ls to see the list of classes. If you want more details about a class, just type the name of the class from the list (case-sensitive, ofc!). Also one more thing, use clear to clear the terminal.
                                  </span>
                                );
                              } else if (command === "ls") {
                                newLines.push(
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    {lsItems.join(" ")}
                                  </span>
                                );
                              } else if (classDescriptions[command]) {
                                newLines.push(
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    {classDescriptions[command]}
                                  </span>
                                );
                              } else {
                                newLines.push(
                                  <span key={terminalOutput.length + 1} className="text-white">
                                    command not found: {command}
                                  </span>
                                );
                              }
                              setTerminalOutput([...terminalOutput, ...newLines]);
                            }
                            setTerminalInput("");
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Dock Bar */}
            <div className="w-full h-4 bg-gray-300 rounded-b-lg mt-auto" />
          </div>
        </div>
      </div>
    {/* Soccer Formation Container */}
    {showSoccerSection && (
    <div className="flex flex-col items-center justify-center w-full mt-12 relative">
      {/* White circle BEHIND the card */}
      <div
        className="absolute left-1/2 top-1/2 bg-white rounded-full opacity-80"
        style={{
          width: "18px",
          height: "18px",
          transform: "translate(-50%, -50%)",
          zIndex: 0
        }}
      />
    <div className="absolute left-1/2 top-1/2 border-2 border-white rounded-full opacity-70"
        style={{
          width: "180px",
          height: "180px",
          transform: "translate(-50%, -50%)",
          zIndex: 0
        }}
      />




      {/* Green Field and Sidebar in a flex row */}
      <div className="flex flex-row items-center justify-center relative ">
        {/* Green Field */}
        <div className="bg-green-600 rounded-xl w-[900px] h-[1150px] flex flex-col items-center justify-center shadow-lg relative gap-y-10 z-10 overflow-hidden ">
          <div className="flex items-center gap-2 absolute top-4 left-6 z-10">
            <button
    className="w-4 h-4 bg-red-500 rounded-full focus:outline-none"
    onClick={handleCloseSoccerSection}
    tabIndex={0}
    aria-label="Close"
    type="button"
  />
            <div className="w-4 h-4 bg-yellow-400 rounded-full" />
            <div className="w-4 h-4 bg-green-500 rounded-full" />
          </div>
          <div style={{ height: "3.5rem" }} />
          {/* Row 1: 3 defenders */}
          <div className="flex justify-between w-[70%] mt-10 mb-12">
            {players.slice(0, 3).map((img, idx) => (
              <PlayerHolder
                key={idx}
                img={img}
                idx={idx}
                isDragging={!draggedFromBench && draggedIdx === idx}
                onDragStart={() => handleFieldDragStart(idx)}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleFieldDrop(idx)}
                onDragEnd={() => setDraggedIdx(null)}
              />
            ))}
          </div>
          {/* Row 2: 3 midfielders */}
          <div className="flex justify-between w-[70%] mb-12">
            {players.slice(3, 6).map((img, idx) => (
              <PlayerHolder
                key={idx + 3}
                img={img}
                idx={idx + 3}
                isDragging={!draggedFromBench && draggedIdx === idx + 3}
                onDragStart={() => handleFieldDragStart(idx + 3)}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleFieldDrop(idx + 3)}
                onDragEnd={() => setDraggedIdx(null)}
              />
            ))}
          </div>
          {/* Row 3: 4 forwards */}
          <div className="flex justify-between w-[90%] mb-12">
            {players.slice(6, 10).map((img, idx) => (
              <PlayerHolder
                key={idx + 6}
                img={img}
                idx={idx + 6}
                isDragging={!draggedFromBench && draggedIdx === idx + 6}
                onDragStart={() => handleFieldDragStart(idx + 6)}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleFieldDrop(idx + 6)}
                onDragEnd={() => setDraggedIdx(null)}
              />
            ))}
          </div>
          {/* Row 4: 1 goalkeeper */}
          <div className="flex justify-center w-full">
            <PlayerHolder
              key={10}
              img={players[10]}
              idx={10}
              isDragging={!draggedFromBench && draggedIdx === 10}
              onDragStart={() => handleFieldDragStart(10)}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleFieldDrop(10)}
              onDragEnd={() => setDraggedIdx(null)}
            />
          </div>
        </div>

        {/* SIDEBAR: Extra Players (Scrollable) */}
        <div
          className="flex flex-col items-center bg-gray-700 rounded-2xl py-8 px-4 shadow-xl ml-1"
          style={{
            height: "48rem",
            maxHeight: "80vh",
            overflowY: "auto",
            minWidth: "12rem"
          }}
        >
          {bench.map((img, i) => (
            <SidebarPlayer
              key={i}
              img={img}
              idx={i}
              isDragging={draggedFromBench && draggedIdx === i}
              onDragStart={handleBenchDragStart}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleBenchDrop(i)}
            />
          ))}
        </div>
      </div>
    </div>                 
    )}

    {/* Render only one app section at a time, right under the terminal: */}
    {openApp === "skills" && (
  <div className="flex flex-col items-center justify-center w-full mt-12 relative min-h-screen">
    {/* White circle BEHIND the card */}
    <div
      className="absolute left-1/2 top-1/2 bg-white rounded-full opacity-80"
      style={{
        width: "18px",
        height: "18px",
        transform: "translate(-50%, -50%)",
        zIndex: 0
      }}
    />
    <div className="absolute left-1/2 top-1/2 border-2 border-white rounded-full opacity-70"
      style={{
        width: "180px",
        height: "180px",
        transform: "translate(-50%, -50%)",
        zIndex: 0
      }}
    />

    {/* Green Field and Sidebar in a flex row */}
    <div className="flex flex-row items-center justify-center relative">
      {/* Green Field */}
      <div className="bg-green-600 rounded-xl w-[900px] h-[1150px] flex flex-col items-center justify-center shadow-lg relative gap-y-8 z-10 overflow-hidden">
        <div className="flex items-center gap-2 absolute top-4 left-6 z-10">
          <button
            className="w-4 h-4 bg-red-500 rounded-full focus:outline-none"
            onClick={handleCloseSoccerSection}
            tabIndex={0}
            aria-label="Close"
            type="button"
          />
          <div className="w-4 h-4 bg-yellow-400 rounded-full" />
          <div className="w-4 h-4 bg-green-500 rounded-full" />
        </div>
        <div style={{ height: "3.5rem" }} />
        {/* Row 1: 3 defenders */}
        <div className="flex justify-between w-[70%] mt-10 mb-12">
          {players.slice(0, 3).map((img, idx) => (
            <PlayerHolder
              key={idx}
              img={img}
              idx={idx}
              isDragging={!draggedFromBench && draggedIdx === idx}
              onDragStart={() => handleFieldDragStart(idx)}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleFieldDrop(idx)}
              onDragEnd={() => setDraggedIdx(null)}
            />
          ))}
        </div>
        {/* Row 2: 3 midfielders */}
        <div className="flex justify-between w-[70%] mb-12">
          {players.slice(3, 6).map((img, idx) => (
            <PlayerHolder
              key={idx + 3}
              img={img}
              idx={idx + 3}
              isDragging={!draggedFromBench && draggedIdx === idx + 3}
              onDragStart={() => handleFieldDragStart(idx + 3)}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleFieldDrop(idx + 3)}
              onDragEnd={() => setDraggedIdx(null)}
            />
          ))}
        </div>
        {/* Row 3: 4 forwards */}
        <div className="flex justify-between w-[90%] mb-12">
          {players.slice(6, 10).map((img, idx) => (
            <PlayerHolder
              key={idx + 6}
              img={img}
              idx={idx + 6}
              isDragging={!draggedFromBench && draggedIdx === idx + 6}
              onDragStart={() => handleFieldDragStart(idx + 6)}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleFieldDrop(idx + 6)}
              onDragEnd={() => setDraggedIdx(null)}
            />
          ))}
        </div>
        {/* Row 4: 1 goalkeeper */}
        <div className="flex justify-center w-full">
          <PlayerHolder
            key={10}
            img={players[10]}
            idx={10}
            isDragging={!draggedFromBench && draggedIdx === 10}
            onDragStart={() => handleFieldDragStart(10)}
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleFieldDrop(10)}
            onDragEnd={() => setDraggedIdx(null)}
          />
        </div>
      </div>

      {/* SIDEBAR: Extra Players (Scrollable) */}
      <div
        className="flex flex-col items-center bg-gray-700 rounded-2xl py-8 px-4 shadow-xl ml-1"
        style={{
          height: "48rem",
          maxHeight: "80vh",
          overflowY: "auto",
          minWidth: "12rem"
        }}
      >
        {bench.map((img, i) => (
          <SidebarPlayer
            key={i}
            img={img}
            idx={i}
            isDragging={draggedFromBench && draggedIdx === i}
            onDragStart={handleBenchDragStart}
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleBenchDrop(i)}
          />
        ))}
      </div>
    </div>
  </div>
)}

{openApp === "projects" && (
  <div className="w-full flex justify-center mt-12 min-h-screen ">
    <div className="bg-blue-100 rounded-xl w-[900px]  flex flex-col items-center mb-2 justify-center shadow-lg relative mt-12 ">
      <div className="flex items-center gap-2 absolute top-4 left-6 z-10">
        <button
          className="w-4 h-4 bg-red-500 rounded-full focus:outline-none"
          onClick={handleCloseSoccerSection}
          tabIndex={0}
          aria-label="Close"
          type="button"
        />
        <div className="w-4 h-4 bg-yellow-400 rounded-full" />
        <div className="w-4 h-4 bg-green-500 rounded-full" />
      </div>
      <div className="flex flex-row gap-0 mt-4 relative" style={{ justifyContent: "center" }}>
        {[
          {
            title: "AI School (UGAHacks): Personalized AI Tutoring Platform",
      description: `Led development of a full-stack AI tutoring platform for high school students, delivering subject-specific support. Integrated GPT-4o chatbots for dynamic, accurate academic help across subjects. Built a TensorFlow-based recommendation system that analyzed student performance to suggest personalized learning modules, improving engagement and outcomes.
`,
          },
          {
            title: "HitWorkout app",
            description: "Designed and built a mobile app for personalized interval workouts, leading to a 30% rise in daily active users. Integrated secure premium upgrades via Visa Gateway API, boosting conversions by 25%. Engineered a scalable backend using Node.js and Python microservices to support real-time data and high concurrency. Added a PyTorch-based activity classifier that analyzed user behavior to deliver smart interval recommendations, enhancing personalization and workout effectiveness.",
          },
          {
            title: "TeamFlow",
            description: "Developed a real-time collaboration platform with team workspaces, dashboards, and dynamic scheduling tools, boosting productivity and engagement for distributed users. Secured access with JWT and bcrypt authentication for seamless multi-device support. Built scalable RESTful APIs using Express.js and PostgreSQL to ensure high availability under heavy load. Deployed at the University of Georgia to support 15+ student organizations, improving event coordination and communication with a 40% increase in adoption.",
          },
          {
            title: "Anomaly Detection System",
            description: "Built and deployed a PyTorch-based anomaly detection model for identifying outliers in time-series and tabular data. Exposed the model via a Flask API, containerized with Docker, and deployed it serverlessly using AWS Lambda. Leveraged S3 for model artifact storage and versioning. Integrated with API Gateway and automated the CI/CD pipeline to streamline updates, ensuring scalable, cloud-native performance and rapid iteration in production environments.",
          },
        ].map((proj, idx) => {
          // Arch effect: adjust rotation and vertical position per card
          const arch = [
            { rotate: -18, translateY: 40, z: 1 },
            { rotate: -6, translateY: 10, z: 2 },
            { rotate: 6, translateY: 10, z: 3 },
            { rotate: 18, translateY: 40, z: 4 },
          ][idx];
          return (
            <div
              key={idx}
              style={{
                marginLeft: idx === 0 ? 0 : -170,
                zIndex: liftedCards[idx] ? 10 : arch.z,
                position: "relative",
                transition: "z-index 0.2s, transform 0.3s",
                transform: liftedCards[idx]
                  ? "translateY(-40px) scale(1.05)"
                  : `rotate(${arch.rotate}deg) translateY(${arch.translateY}px)`,
              }}
            >
              <ProjectCard
                title={proj.title}
                description={proj.description}
                lifted={liftedCards[idx]}
                onClick={() => handleCardToggle(idx)}
                number={cardNumbers[idx]}
                suit={cardSuits[idx]}
                numberColor={cardNumberColors[idx]}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center mt-8 mb-6">
        <a
          href="https://github.com/MoNizarMeskine"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-500 text-white rounded-full text-xs font-semibold shadow hover:bg-blue-600 transition"
        >
          More
        </a>
      </div>
    </div>
  </div>
)}


{openApp === "experience" && (
  <div className="w-full flex justify-center bg-black min-h-screen  py-12">
    <div className="w-[1600px] h-fit rounded-xl overflow-hidden mt-12 shadow-2xl">
      {/* App-style Top Bar */}
      <div className="flex items-center gap-2 px-6 py-2 bg-gray-300 border-b  border-gray-900">
        <button
          className="w-4 h-4 bg-red-500 rounded-full focus:outline-none"
          onClick={handleCloseSoccerSection}
          tabIndex={0}
          aria-label="Close"
          type="button"
        />
        <div className="w-4 h-4 bg-yellow-400 rounded-full" />
        <div className="w-4 h-4 bg-green-500 rounded-full" />
      </div>

      {/* Top Navigation Bar */}
      <div className="bg-[#141414] flex justify-between items-center px-8 py-4 border-b border-gray-800">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <span className="text-[#e50914] text-2xl font-extrabold tracking-wide">Nizarflix</span>
          <nav className="text-white text-sm font-medium flex gap-6">
            <span className="cursor-pointer hover:text-[#e50914]">Home</span>
            <span className="cursor-pointer hover:text-[#e50914]">My List</span>
            <span className="cursor-pointer hover:text-[#e50914]">Footy</span>
            <span className="cursor-pointer hover:text-[#e50914]">Life</span>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="bg-[#333] text-white text-sm px-2 py-1.5 rounded-lg cursor-default flex items-center gap-2">
            <span>🔍</span>
            <span>Nizar's Experience&nbsp;</span>
          </div>
          <img
            src="/netflix2.png"
            alt="Profile"
            className="w-8 h-8 rounded-full border border-gray-600"
          />
        </div>
      </div>

      {/* Section Header */}
      <div className="bg-[#141414] px-8 py-6">
        <span className="text-white text-2xl font-bold">Nizar's Experience</span>
        <p className="text-gray-400 text-sm mt-1">Explore 3 highlighted experiences</p>
      </div>

      {/* Experience Cards */}
      <div className="bg-[#141414] px-8 py-6 flex gap-6 overflow-x-auto scrollbar-hide">
        {/* Card 1 */}
        <div className="bg-[#222] min-w-[320px] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform border border-transparent hover:border-[#e50914]">
          <div className="h-44 bg-gradient-to-br from-[#e50914] to-[#222] flex items-center justify-center">
            <span className="text-white text-3xl font-bold">German Performance</span>
          </div>
          <div className="p-4">
            <h3 className="text-white text-lg font-bold mb-2">Software Engineer Intern</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Used Vite, JSX, and Tailwind CSS to develop a responsive website, anticipated to increase user engagement by ~40%.</li>
              <li>Created a MySQL database to streamline data management with real-time updates and faster querying.</li>
              <li>Integrated Google APIs for reviews and calendars, enhancing UX and reducing latency by 25%.</li>
              <li>Optimized layout and responsiveness across devices for consistent performance and satisfaction.</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#222] min-w-[320px] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform border border-transparent hover:border-[#e50914]">
          <div className="h-44 bg-gradient-to-br from-[#e50914] to-[#222] flex items-center justify-center">
            <span className="text-white text-3xl font-bold">Commerce Hive</span>
          </div>
          <div className="p-4">
            <h3 className="text-white text-lg font-bold mb-2">Junior Engineer Intern</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Developed a full-stack e-commerce platform (React, Next.js, FastAPI, Node.js) with 40% faster load times.</li>
              <li>Built AI semantic search + product recommendation with OpenAI + Pinecone, raising conversion 25%.</li>
              <li>Used PostgreSQL and Prisma ORM; deployed core services to AWS (EC2, S3, Lambda).</li>
              <li>Explored Kubernetes and GCP for scalable cloud deployment and container orchestration.</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#222] min-w-[320px] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform border border-transparent hover:border-[#e50914]">
          <div className="h-44 bg-gradient-to-br from-[#e50914] to-[#222] flex items-center justify-center">
            <span className="text-white text-3xl font-bold">UGA</span>
          </div>
          <div className="p-4">
            <h3 className="text-white text-lg font-bold mb-2">Cybersecurity Intern & Research Assistant</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Performed security risk assessments for Georgia municipalities with actionable recommendations.</li>
              <li>Led site evaluations with cross-functional teams to uncover system and policy vulnerabilities.</li>
              <li>Completed Google Cybersecurity Certificate; applied skills in threat modeling and risk mitigation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}