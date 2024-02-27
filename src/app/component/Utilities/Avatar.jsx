import Image from "next/image";

const Avatar = ({ ImgProfil }) => {
  return (
    <div>
      <Image
        src={ImgProfil}
        alt="Logo 1"
        width={200}
        height={200}
        className="rounded-full ava-team lg:w-32 w-24 lg:h-32 h-24"
      />
    </div>
  );
};

export default Avatar;
