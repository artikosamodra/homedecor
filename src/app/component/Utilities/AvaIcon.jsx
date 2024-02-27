import Image from "next/image";

const AvaIcon = ({ ImgName }) => {
  return (
    <div>
      <Image
        src={ImgName}
        alt="Logo 1"
        width={100}
        height={100}
        className="rounded-full w-24 h-24 bg-center bg-cover"
      />
    </div>
  );
};

export default AvaIcon;
