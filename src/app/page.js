import Image from "next/image";
import Link from "next/link";
import HeroSec from "./page/Hero";
import InfoSec from "./page/Info";

export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSec />
        <InfoSec />
        
      </div>
    </main>
  );
}
