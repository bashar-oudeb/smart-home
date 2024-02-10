import dots from "../assets/dots.svg";

const Cards = () => (
  <section className=" grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden">
    <a
      href=""
      className="flex items-center w-max gap-2 mx-auto my-12 py-2 px-6 
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

    <div className=" relative">
      <img src={dots} alt="dots" className=" hidden lg:block absolute top-1/2 -translate-y-1/2 -left-9 xl:-left-7" />
      <img src={dots} alt="dots" className=" hidden lg:block absolute top-1/2 -translate-y-1/2 -right-9 xl:-right-7" />
      <div
        className=" container flex gap-10 items-start justify-center md:justify-between 
                      flex-wrap mx-auto max-w-5xl"
      >
        <div className="grid gap-2 text-center justify-items-center md:flex-1">
          <div className=" rounded-full border-[5px] border-amber-600 p-4">
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="lock-check"
              className="icon glyph h-24 w-24"
            >
              <path d="M18,8H17V7A5,5,0,0,0,7,7V8H6a2,2,0,0,0-2,2V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V10A2,2,0,0,0,18,8ZM9,7a3,3,0,0,1,6,0V8H9Zm6.71,6.71-4,4a1,1,0,0,1-1.42,0l-2-2a1,1,0,0,1,1.42-1.42L11,15.59l3.29-3.3a1,1,0,0,1,1.42,1.42Z"></path>
            </svg>
          </div>
          <h1 className=" font-Rubik font-bold text-2xl">Safe</h1>
          <p className="font-Rubik font-normal text-md">
            Our products are secure and private out-of-the-box
          </p>
        </div>

        <div className="grid gap-2 text-center justify-items-center md:flex-1">
          <div className=" rounded-full border-[5px] border-amber-600 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
          <h1 className=" font-Rubik font-bold text-2xl">Efficient</h1>
          <p className="font-Rubik font-normal text-md">
            Feel good about your wallet and the environment
          </p>
        </div>

        <div className="grid gap-2 text-center justify-items-center md:flex-1">
          <div className=" rounded-full border-[5px] border-amber-600 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>
          <h1 className=" font-Rubik font-bold text-2xl">Proven</h1>
          <p className="font-Rubik font-normal text-md">
            Leading the Smart Home world for 10 years
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Cards;
