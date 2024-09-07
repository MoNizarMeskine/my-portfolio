import Navbar from "./parts/Navbar";

import "./App.css";
import Contactbar from "./parts/Contactbar";

function App() {
  return (
    <>
      {/*Main Page Container*/}
      <div className="h-screen flex flex-col ">


      <div className="flex">
      {/*Navigation Bar Container*/}
          <Navbar />
      
        </div>







        <div className="overflow-hidden ml-64 mr-64 ">
    {/*Navigation Bar Container*/}
    <Contactbar />
  </div>
      </div>






    </>
  );
}

export default App;
