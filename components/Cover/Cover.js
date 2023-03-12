import Image from "next/image";
import { usePageContext } from "../../context/page";

export const Cover = ({ children, background }) => {
  const { featuredImage } = usePageContext();
  return <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
    {(!!background || featuredImage) && (
      <Image alt="PostTitle" src={background || featuredImage} layout="fill" objectFit="cover" className="mix-blend-soft-light"></Image>
    )}
    <div className="max-w-5xl z-10">
      {children}
    </div>
  </div>;
};