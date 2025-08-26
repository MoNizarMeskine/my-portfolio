export default function Contactbar(){
return(
  <div className=" flex flex-col px-20 items-center justify-center text-white ">
    
<hr className="w-[1850px] border-t border-gray-500 my-8" />    
    <div className="container mx-auto flex justify-between items-center ">
      <div className="mr-auto ml-7 mr-auto ml-7">
          <a className="ml-auto font-bold text-xl  ">
            Connect with me!
          </a>
        </div>
        
        <div className="flex  mr-7 ">
          <a 
          href="https://www.linkedin.com/in/nizarm/" 
          className="hover:opacity-60 font-bold text-lg"
          target="_blank"
          rel="nooopener noreferrer"
          >
            <img src="/linkedin.svg" alt="logo" className="h-12 w-12 rounded-md"/>
          </a>


          <a
            href="https://drive.google.com/file/d/1N0w0AQXB1IxEJIwFqSqS1lqT8pOUh9HQ/view?usp=sharing"
            className="hover:opacity-60 font-bold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="/resume.svg" alt="logo" className="h-12 w-12 rounded-md"/>

          </a>
          
          <a
          href="https://github.com/MoNizarMeskine"
          className="hover:opacity-60 font-bold text-lg"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src="/github.svg" alt="logo" className="h-12 w-12 rounded-md"/>
  
          </a>

       </div>

    </div>
    <p class="text-xs mb-5">© 2024 Mohammed Nizar Meskine</p>




  </div>

);
}