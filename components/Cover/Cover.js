import Image from "next/image";
import { usePageContext } from "../../context/page";
import { FaArrowDown } from "react-icons/fa";

export const Cover = ({ children, background }) => {
  const { featuredImage } = usePageContext();
  return (
    <>
      <div className="h-[calc(100vh-100px)] min-h-[400px] bg-center bg-cover relative left-0 -top-[77px] flex justify-center items-center">
        {(!!background || featuredImage) && (
          <Image alt="PostTitle" src={background || featuredImage} layout="fill" objectFit="cover"
                 className="mix-blend-soft-light" priority></Image>
        )}
        <div className="max-w-5xl z-10">
          {children}
        </div>
        <div className="absolute right-0 bottom-0 z-2 mx-5 text-white flex flex-col align-items justify-center animate-bounce">
          <p className="uppercase mx-auto font-bold">Scroll</p>
          <FaArrowDown size={30} className="mx-auto" />
        </div>
      </div>
    </>
  );
};
