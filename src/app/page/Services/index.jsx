import Image from "next/image";

const ServicesSec = () => {
  return (
    <section className="bg-neutral-400">
      <div className="md:p-20 p-0 text-white font-bold">
        <h1 className="pb-10 text-4xl text-red-700">What We Offer</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="bg-services bg-name1 flex justify-center items-center">
            <h1 className="text-center text-xl p-5">
              Lorem ipsum dolor sit amet.
            </h1>
          </div>
          <div className="bg-services bg-name2 flex justify-center items-center">
            <h1 className="text-center text-xl p-5">Lorem ipsum dolor.</h1>
          </div>
          <div className="bg-services bg-name3 flex justify-center items-center">
            <h1 className="text-center text-xl p-5">Lorem ipsum.</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
