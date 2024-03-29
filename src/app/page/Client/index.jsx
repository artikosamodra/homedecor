import AvaIcon from "@/app/component/Utilities/AvaIcon";
import Image from "next/image";

const ClientSec = () => {
  return (
    <section id="client" className="lg:pt-10 pt-20">
      <div className="lg:p-20 p-10">
        <h1 className="text-4xl text-red-700 pb-10 font-bold">Our Client</h1>
        <p>Our services are extended to Landlords, Client, and Investors.</p>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <AvaIcon ImgName="/infoimg.jpg" />
          <AvaIcon ImgName="/services1.jpg" />
          <AvaIcon ImgName="/services2.jpg" />
          <AvaIcon ImgName="/services3.jpg" />
          <AvaIcon ImgName="/infoimg.jpg" />
          <AvaIcon ImgName="/services1.jpg" />
        </div>
      </div>
    </section>
  );
};

export default ClientSec;
