import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute -left-16 -top-2 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[300px] transform rotate-180">
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default TopLeftImg;
