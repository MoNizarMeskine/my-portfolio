import Navbar from "./parts/Navbar";
import "./App.css";
import Contactbar from "./parts/Contactbar";

function App() {
  return (
    <>
      {/* Main Page Container */}
      <div className="h-screen flex flex-col">
        {/* Navigation Bar Container */}
        <div className="flex">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-row items-center justify-center">
          <p className="text-3xl mb-5">Welcome to my portfolio!</p>

          <div className="flex flex-col items-center">
            <img src="/public/profilepic.jpg" alt="profile" className="h-74 w-64 rounded-full shadow-lg" />
            <div className="flex flex-col items-center mt-3">
              <p className="text-xl font-bold">Mohammed Nizar Meskine</p>
              <p className="text-m">Computer Science Student at The University of Georgia</p>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="flex justify-center mt-auto mb-5">
          <Contactbar />
        </div>
      </div>
    </>
  );
}

export default App;