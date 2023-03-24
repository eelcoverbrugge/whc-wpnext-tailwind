import Image from "next/image";
import { usePageContext } from "../../context/page";

export const Cover = ({ children, background }) => {
  const { featuredImage } = usePageContext();
  return (
    <div className="h-[calc(100vh-100px)] min-h-[400px] bg-center bg-cover bg-slate-600 relative left-0 -top-[77px] flex justify-center items-center">
      {(!!background || featuredImage) && (
        <Image alt="PostTitle" src={background || featuredImage} layout="fill" objectFit="cover"
               className="mix-blend-soft-light"></Image>
      )}
      <div className="max-w-5xl z-10">
        {children}
      </div>
    </div>
  );
};
