import { app, lamp } from "../assets";

const Forms = () => (
  <section className=" container mx-auto px-8 overflow-hidden ">
    <div className="flex flex-wrap  justify-center gap-12 md:gap-6 lg:gap-20 ">
      <div className="md:flex-1 md:max-w-sm relative ">
        <img src={lamp} alt="lamp"  className=" mx-auto" />
        <a
          href=""
          className="flex items-center w-max gap-2 mx-auto my-8 py-2 px-6 
                       bg-amber-500 shadow-xl hover:shadow-none transition-shadow 
                       rounded-lg font-Rubik font-medium"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Interface / Download">
              <path
                id="Vector"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <span>Download The App</span>
        </a>
        <img src={app} alt="app" width={100}  className=" hidden md:block drop-sha mx-auto" />
      </div>
      <form className=" relative border-[8px] p-8 border-neutral-900 rounded-lg grid  gap-4 md:flex-1 md:max-w-lg my-4 md:my-12 lg:h-[500px]  bg-white  w-full ">
        <h1 className="font-Rubik font-bold text-3xl ">Let’s Connect</h1>
        <input type="text" placeholder="Your Name" className=" w-full  rounded-md bg-gray-200  outline-none py-4 px-2 "/>
        <input type="email" placeholder="Your Email" className=" w-full  rounded-md bg-gray-200  outline-none py-4  px-2 "/>
        <textarea name="content" id="content" cols="20" rows="5" placeholder="HOW CAN WE HELP?" className=" w-full  rounded-md bg-gray-200  outline-none py-4 px-2 "></textarea>
        <a href="" className="flex items-center w-max gap-2  py-2 px-6 
                       bg-amber-500 shadow-xl hover:shadow-none transition-shadow 
                       rounded-lg font-Rubik font-medium">
          Sing in
        </a>
      </form>
      
    </div>
  </section>
);

export default Forms;
