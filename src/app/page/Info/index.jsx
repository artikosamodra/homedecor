import Image from "next/image";

const InfoSec = () => {
  return (
    <section id="info" className="lg:pt-10 pt-20">
      <div className="grid grid-cols-8 gap-10 lg:p-20 p-10">
        <div className="md:col-span-2 col-span-8">
          <Image
            src="/infoimg.jpg"
            alt="Image Info"
            width={400}
            height={400}
            className="md:block hidden"
          />
        </div>
        <div className="md:col-span-6 col-span-8">
          <h1 className="text-4xl font-bold text-red-600 pb-8">Who We Are</h1>
          <h2 className="lg:text-2xl text-xl font-bold pb-4">
            We are HOMEDECOR SOLUTION
          </h2>
          <p>
            Offering an exceptional experience for both property owners and
            tenants is our priority. We believe in creating value for everyone
            we serve, including tenants, property owners, investors, and
            partners. At every step, we are driven by the values of integrity,
            openness, and excellence in everything we do. Our business is rooted
            in our ability to provide superior maintenance operational
            management in the industry.
          </p>
        </div>
        <div className="md:col-span-1 col-span-6">
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
