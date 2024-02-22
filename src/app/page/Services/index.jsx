import Image from "next/image"

const ServicesSec = () => {
    return(
        <section className="bg-zinc-500">
            <div className="flex flex-row justify-center items-center gap-20 p-20 text-white font-bold">
                <div className="bg-services bg-name1 flex justify-center items-center">
                    <h1 className="text-center text-xl p-5">Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className="bg-services bg-name2 flex justify-center items-center">
                <h1 className="text-center text-xl p-5">Lorem ipsum dolor.</h1>
                </div>
                <div className="bg-services bg-name3 flex justify-center items-center">
                <h1 className="text-center text-xl p-5">Lorem ipsum.</h1>
                </div>
            </div>
        </section>
    )
}

export default ServicesSec