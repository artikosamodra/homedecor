import Avatar from "@/app/component/Utilities/Avatar";

const TeamSec = () => {
  return (
    <section id="team" className="pt-10">
      <div className="bg-team relative w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-center gap-10 text-zinc-200 lg:px-20 px-10 py-20">
        <h1 className="text-4xl font-bold">OUR TEAM</h1>
        <p className="text-center font-bold">
          Our team comprises of high-maintenance operational leasing specialists
          who uphold our values, including honesty and dedication. We are
          committed to ensuring the satisfaction of our clients by maintaining
          all properties well, thus ensuring that our property owners and
          investors feel happy and satisfied. We are supported by a team of
          skilled cleaners and contractors who assist us in keeping the
          properties in top condition.
        </p>
        {/* <div className="flex flex-wrap justify-center lg:gap-20 gap-5">
          <Avatar ImgProfil="/infoimg.jpg" />
          <Avatar ImgProfil="/services1.jpg" />
          <Avatar ImgProfil="/services2.jpg" />
          <Avatar ImgProfil="/services3.jpg" />
        </div> */}
      </div>
    </section>
  );
};

export default TeamSec;
