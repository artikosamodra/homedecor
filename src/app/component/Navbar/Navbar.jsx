import Link from "next/link"
import NavMenu from "./NavMenu"
import Image from "next/image"

const Navbar = () => {
    return (
        <section className="px-20 py-5 bg-rose-100">
            <div className="flex justify-between items-center">
                <div>
                    <Link href="/" >
                        <Image src="/logo.png" alt="Logo" width={100} height={100}/>
                    </Link>
                </div>
                <div className="flex flex-row gap-5">
                    <NavMenu navTitle="HOME" navLink="/" />
                    <NavMenu navTitle="WHO WE ARE" navLink="/" />
                    <NavMenu navTitle="WHAT WE OFFER" navLink="/" />
                    <NavMenu navTitle="OUR CLIENT" navLink="/" />
                    <NavMenu navTitle="OUR TEAM" navLink="/" />
                    <NavMenu navTitle="CONTACT" navLink="/" />
                </div>
                <div>
                    <Link href="/" className="font-bold hover:text-red-500">081222333444</Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar