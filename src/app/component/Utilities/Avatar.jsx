import Image from "next/image"

const Avatar = ( {ImgProfil} ) => {
    return(
        <div>
            <Image src={ImgProfil} alt="Logo 1" width={200} height={200} className="rounded-full ava-team" />
        </div>
    )
}

export default Avatar