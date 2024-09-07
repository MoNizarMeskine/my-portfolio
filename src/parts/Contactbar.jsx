export default function Contactbar(){
return(
  <div className=" flex flex-col items-center justify-center ">
    
    <hr class="w-full my-5"></hr>
    
    
    

    <div className="w-full px-4 py-2 flex h-20 items-center justify-between">
      <div className="w-60 ml-7">
          <a className="ml-auto font-bold text-xl  ">
            Connect with me!
          </a>
        </div>
        
        <div className="flex gap-7 ml-auto mr-7 ">
          <a 
          href="https://www.linkedin.com/in/nizarm/" 
          className="hover:opacity-60 font-bold text-lg"
          target="_blank"
          rel="nooopener noreferrer"
          >
            <img src="/public/linkedin.svg" alt="logo" className="h-12 w-12 rounded-md"/>
          </a>


          <a
            href="https://drive.google.com/file/d/1CG_1_6czo1jvsKKgYUlrKkAtKXenQZ8U/view"
            className="hover:opacity-60 font-bold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="/public/resume.svg" alt="logo" className="h-12 w-12 rounded-md"/>

          </a>
          
          <a
          href="https://github.com/MoNizarMeskine"
          className="hover:opacity-60 font-bold text-lg"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src="/public/github.svg" alt="logo" className="h-12 w-12 rounded-md"/>
  
          </a>

        </div>

        </div>

        <p class="text-xs">© 2024 Mohammed Nizar Meskine</p>




      </div>

);
}