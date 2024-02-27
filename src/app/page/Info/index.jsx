import Image from "next/image";

const InfoSec = () => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-10 md:p-20 p-10">
        <div className="md:col-span-1 col-span-4">
          <Image
            src="/infoimg.jpg"
            alt="Image Info"
            width={400}
            height={400}
            className="md:block hidden"
          />
        </div>
        <div className="md:col-span-3 col-span-4">
          <h1 className="text-4xl font-bold text-red-600 pb-8">Who We Are</h1>
          <h2 className="text-2xl font-bold  pb-4">Sub Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            qui ducimus repudiandae veniam expedita vitae possimus, quam
            necessitatibus saepe suscipit.
          </p>
        </div>
        <div className="md:col-span-1 col-span-4">
          <Image
            src="/infoimg.jpg"
            alt="Image Info"
            width={400}
            height={400}
            className="h-1/2 object-cover md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSec;
