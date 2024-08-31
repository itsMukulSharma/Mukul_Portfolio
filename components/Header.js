import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center xl:h-[90px]">
      <div className="container xl:max-w-[1300px]  mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src={"/Mukul_logo.png"}
              className="w-[150px] lg:w-[220px]"
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
