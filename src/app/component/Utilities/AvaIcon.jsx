import Image from "next/image"

const AvaIcon = ( {ImgName} ) => {
    return(
        <div>
            <Image src={ImgName} alt="Logo 1" width={100} height={100} className="rounded-full bg-client" />
        </div>
    )
}

export default AvaIcon