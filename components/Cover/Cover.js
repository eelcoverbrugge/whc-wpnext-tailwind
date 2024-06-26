import Image from "next/image";
import { usePageContext } from "../../context/page";

export const Cover = ({ background }) => {
  const { featuredImage } = usePageContext();
  return (
    <div className="h-[calc(100vh-100px)] min-h-[400px] bg-darkPurple bg-opacity-80 md:bg-opacity-50 relative flex -top-[77px]">
      {(!!background || featuredImage) && (
        <Image
          alt="PostTitle"
          src={background || featuredImage}
          fill
          style={{ objectFit: "cover" }}
          className="mix-blend-soft-light"
          priority={true}
        />
      )}
    </div>
  );
};
