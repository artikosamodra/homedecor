import Image from "next/image";

const ServicesSec = () => {
  return (
    <section className="bg-neutral-400">
      <div className="md:px-20 px-8 py-20 text-white font-bold">
        <h1 className="pb-10 text-4xl text-red-700">What We Offer</h1>
        <div className="flex md:flex-row flex-col justify-between items-center gap-5 mt-10">
          <div className="lg:w-64 w-48 lg:h-64 h-48 bg-cover bg-center bg-name1 flex justify-center items-center">
            <h1 className="text-center text-xl p-5">
              Lorem ipsum dolor sit amet.
            </h1>
          </div>
          <div className="lg:w-64 w-48 lg:h-64 h-48 bg-cover bg-center bg-name2 flex justify-center items-center">
            <h1 className="text-center text-xl p-5">Lorem ipsum dolor.</h1>
          </div>
          <div className="lg:w-64 w-48 lg:h-64 h-48 bg-cover bg-center bg-name3 flex justify-center items-center">
            <h1 className="text-center text-xl p-5">Lorem ipsum.</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
