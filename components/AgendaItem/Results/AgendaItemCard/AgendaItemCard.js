import Image from "next/image";
import { CallToActionButton } from "../../../CallToActionButton";
import { format } from "date-fns";

export const AgendaItemCard = ({
                                 title,
                                 destination,
                                 image,
                                 date,
                                 text,
                               }) => {
  return (
    <div className="py-5">
      <div className="flex flex-wrap space-y-4 md:space-y-0 text-left">
        <div className="w-full md:w-1/4">
          {image && <Image
            src={image}
            height="200px"
            width="300px"
            layout="responsive"
            alt=""
          />}
        </div>
        <div className="w-full md:w-2/4 px-4 flex flex-col">
          <div><h3 className="font-heading max-w-7xl lg:mx-auto text-3xl font-medium tracking-wider">{title}</h3></div>
          <div className="font-bold underline decoration-1 underline-offset-4 pt-2 pb-4">{date}</div>
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
    </div>
  );
};