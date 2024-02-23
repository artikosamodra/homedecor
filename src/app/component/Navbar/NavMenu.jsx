import Link from "next/link"

const NavMenu = ( {navTitle, navLink} ) => {
    return(
        <div className="text-center">
            <Link href={navLink} className="hover:text-zinc-600 font-bold border-b hover:border-red-500 transition duration-700 border-b-2 border-transparent py-2">{navTitle}</Link>
        </div>
    )
}

export default NavMenu