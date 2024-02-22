import Image from "next/image"

const InfoSec = () => {
    return(
        <section>
            <div className="grid grid-cols-4 gap-10 p-20">
                <div className="col-span-1">
                    <Image src="/infoimg.jpg" alt="Image Info" width={400} height={400} />
                </div>
                <div className="col-span-3">
                    <h1 className="text-4xl font-bold text-red-600 pb-10">Who We Are</h1>
                    <h2 className="text-2xl font-bold  pb-10">Sub Who We Are</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qui ducimus repudiandae veniam expedita vitae possimus, quam necessitatibus saepe suscipit.</p>
                </div>
            </div>
        </section>
    )
}

export default InfoSec