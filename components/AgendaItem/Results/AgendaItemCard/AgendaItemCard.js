import Image from "next/image";
import { CallToActionButton } from "../../../CallToActionButton";

export const AgendaItemCard = ({
                                 title,
                                 destination,
                                 image,
                                 date,
                                 text,
                               }) => {
  return (
    <div className="flex flex-wrap border-b-[2px] border-primaryColor py-4 my-4">
      <div className="w-full md:w-1/4 px-4">
        {image && <Image
          src={image}
          height="200px"
          width="300px"
          objectFill="cover"
          alt=""
        />}
      </div>
      <div className="w-full md:w-2/4 px-4 flex flex-col">
        <div><h3 className="font-heading max-w-7xl lg:mx-auto text-3xl font-medium tracking-wider">{title}</h3></div>
        <div>{date}</div>
        <div>{text}</div>
      </div>
      <div className="w-full md:w-1/4 px-4">
        <CallToActionButton
          buttonLabel="Info"
          destination={destination || "/"}
          align="right"
        />
      </div>
    </div>
  );
};