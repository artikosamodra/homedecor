const HeroSec = () => {
  return (
    <section>
      <div className="bg-hero relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center gap-10 text-zinc-200 md:px-20 px-8">
        <h1 className="text-6xl font-bold">TITLE HERO</h1>
        <p className="text-center font-bold">
          Descript : Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Porro officiis expedita voluptatem illum, cumque dignissimos!
        </p>
        <button className="px-5 py-2 bg-red-600 rounded-md font-bold hover:bg-red-500">
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default HeroSec;
