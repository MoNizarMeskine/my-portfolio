import Navbar from "./parts/Navbar";

import "./App.css";

function App() {
  return (
    <>
      {/*Main Page Container*/}
      <div class="h-screen rounded-t-lg">
        <div class="w-full overflow-hidden h-screen">
          {/*Navigation Bar Container*/}
          <Navbar />
      
        </div>
      </div>


    </>
  );
}

export default App;
