import Image from "next/image";
import Link from "next/link";
import HeroSec from "./page/Hero";
import InfoSec from "./page/Info";
import ServicesSec from "./page/Services";
import ClientSec from "./page/Client";
import TeamSec from "./page/Team";
import ContactSec from "./page/Contact";

export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSec />
        <InfoSec />
        <ServicesSec />
        <ClientSec />
        <TeamSec />
        <ContactSec />
      </div>
    </main>
  );
}
