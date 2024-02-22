import Image from "next/image";
import Link from "next/link";
import HeroSec from "./page/Hero";
import InfoSec from "./page/Info";
import ServicesSec from "./page/Services";
import ClientSec from "./page/Client";

export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSec />
        <InfoSec />
        <ServicesSec />
        <ClientSec />
        
      </div>
    </main>
  );
}
