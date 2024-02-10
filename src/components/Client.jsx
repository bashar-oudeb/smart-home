import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
} from "../assets";

const Client = () => {
  return (
    <section className=" grid gap-8 place-items-center text-center mt-8 lg:mt-28 ">
      <div className="grid gap-12">
        <h1 className="text-3xl font-bold text-amber-400 font-Rubik">Our Partners</h1>
        <p className="w-full lg:w-[720px] font-Rubik font-normal">
          We’ve partnered with hundreds of smart home brands to help you create
          a smart home that fits your needs and doesn’t lock you in.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-3xl mx-auto">
          <div className=" bg-white shadow-md  dark:shadow-xl rounded-md p-4">
            <img src={partner1} alt="" className=" h-16 w-16" />
          </div>
          <div className=" bg-white  dark:shadow-xl rounded-md p-4">
            <img src={partner2} alt="" className=" h-16 w-16" />
          </div>
          <div className=" bg-white  dark:shadow-xl rounded-md p-4">
            <img src={partner3} alt="" className=" h-16 w-16" />
          </div>
          <div className=" bg-white  dark:shadow-xl rounded-md p-4">
            <img src={partner4} alt="" className=" h-16 w-16" />
          </div>
          <div className=" bg-white  dark:shadow-xl rounded-md p-4">
            <img src={partner5} alt="" className=" h-16 w-16" />
          </div>
          <div className=" bg-white  dark:shadow-xl rounded-md p-4">
            <img src={partner6} alt="" className=" h-16 w-16" />
          </div>
          <div className=" bg-white  dark:shadow-xl rounded-md p-4">
            <img src={partner7} alt="" className=" h-16 w-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
