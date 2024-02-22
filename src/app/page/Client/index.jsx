import AvaIcon from "@/app/component/Utilities/AvaIcon"
import Image from "next/image"

const ClientSec = () => {
    return(
        <section>
            <div className="p-20">
                <h1 className="text-4xl text-red-700 pb-10 font-bold">Our Client</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, delectus.</p>
                <div className="flex flex-wrap justify-center gap-10 m-10">
                    <AvaIcon ImgName="/infoimg.jpg" />
                    <AvaIcon ImgName="/services1.jpg" />
                    <AvaIcon ImgName="/services2.jpg" />
                    <AvaIcon ImgName="/services3.jpg" />
                    <AvaIcon ImgName="/infoimg.jpg" />
                    <AvaIcon ImgName="/services1.jpg" />
                    <AvaIcon ImgName="/services2.jpg" />
                    <AvaIcon ImgName="/services3.jpg" />
                    <AvaIcon ImgName="/infoimg.jpg" />
                    <AvaIcon ImgName="/services1.jpg" />
                    <AvaIcon ImgName="/services2.jpg" />
                    <AvaIcon ImgName="/services3.jpg" />
                </div>
            </div>
        </section>
    )
}

export default ClientSec