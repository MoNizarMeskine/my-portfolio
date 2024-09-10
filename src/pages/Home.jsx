import Contactbar from "../parts/Contactbar";

const Home = () => {

  return (
    <div className=" flex flex-col overflow-hidden">
      <div className="flex-grow flex flex-row items-center justify-center mb-10 mt-10">
        <p className="text-3xl mb-5">Welcome to my portfolio!</p>

        <div className="flex flex-col items-center">
          <img src="/public/profilepic.jpg" alt="profile" className="h-74 w-64 rounded-full shadow-lg" />
          <div className="flex flex-col items-center mt-3">
            <p className="text-xl font-bold">Mohammed Nizar Meskine</p>
            <p className="text-m">Computer Science Student at The University of Georgia</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Contactbar />
      </div>
    </div>

  );
};

export default Home;