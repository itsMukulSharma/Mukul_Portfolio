import { useRouter } from "next/router";
import { navData } from "./common";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  const pathName = router?.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-40 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData?.map((link, index) => (
          <Link
            className={`${
              link?.path === pathName && "text-accent "
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link?.path}
            key={index}
          >
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex ">
              <div className="relative bg-white flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link?.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            <div>{link?.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
