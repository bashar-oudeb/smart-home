import couch from "../assets/couch.png";
import app from "../assets/app.svg";

const Hero = () => (
  <section className=" relative pt-16 md:pt-24 xl:pt-48"> 
    <div className=" bg-gradient-to-b from-amber-400 
                   to-amber-600 absolute bottom-8 inset-0 
                   -z-10 md:bottom-24 xl:bottom-32">
    </div>

    <div className="container mx-auto grid grid-rows-1 place-items-end px-2 ">
      <img src={couch} alt="" className=" row-start-1 row-end-2 col-start-1 col-end-2 mx-auto "/>
      <img src={app} alt="" className=" row-start-1 row-end-2 col-start-1 col-end-2  mx-auto w-40 sm:w-52 md:w-64 lg:w-72 "/>
    </div>
  </section>
);

export default Hero;