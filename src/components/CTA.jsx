import { table } from "../assets";

const CTA = () => (
  <section className=" relative overflow:hidden ">
    <div className="flex flex-wrap-reverse gap-8 justify-center ">
      <div className=" flex gap-6 flex-wrap flex-col items-start lg:justify-center">
        <div className=" flex flex-wrap flex-col items-start gap-2">
          <h2 className="font-Rubik font-bold text-2xl">Relax, you’re home!</h2>
          <p className="font-Rubik font-normal text-md max-w-md">
            All our supported hardware includes traditional inputs so you can integrate our products into your house in a way that’s best for everyone.
          </p>
        </div>
        <a href="" className="flex items-center w-max gap-2  py-2 px-6 
                       bg-amber-500 shadow-xl hover:shadow-none transition-shadow 
                       rounded-lg font-Rubik font-medium">
          Sing in
        </a>
      </div>
      <img src={table} alt="table" className=""/>
    </div>
    <div className="bg-teal-900 h-20  xl:h-48 mt-12 xl:mt-0 xl:absolute w-full -bottom-6 -z-10"></div>
  </section>
);

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
