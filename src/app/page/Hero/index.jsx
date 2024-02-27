import Link from "next/link";

const HeroSec = () => {
  return (
    <section id="home">
      <div className="bg-hero relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center gap-10 text-white lg:px-20 px-10">
        <h1 className="lg:text-6xl text-5xl font-bold">
          Property Management Specialists
        </h1>
        <p className="text-center font-bold lg:text-xl text-md">
          Offering the Best Experience for Landlords and Tenants.
        </p>
        <Link
          href="#contact"
          className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded-md font-bold"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
};

export default HeroSec;
