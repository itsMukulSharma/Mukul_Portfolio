import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto lg:mx-0 projectBtn">
      <Link
        href={`/work`}
        className="relative w-[100px] h-[100px] xl:w-[185px] xl:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat bg-center group"
      >
        <Image
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt="project"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
