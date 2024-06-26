import Image from "next/image";
import { CallToActionButton } from "../../../CallToActionButton";

export const AgendaItemCard = ({
                                 title,
                                 destination,
                                 image,
                                 event,
                                 text,
                               }) => {
  return (
    <div className="py-5">
      <div className="flex flex-wrap space-y-4 md:space-y-0 text-left">
        <div className={`w-full md:w-1/4`}>
          {image && <Image
            src={image}
            height="200"
            width="300"
            layout="responsive"
            alt=""
          />}
        </div>
        <div className="w-full md:w-2/4 px-2 flex flex-col">
          <div><h3 className="font-heading max-w-7xl lg:mx-auto text-3xl font-medium tracking-wider">{title}</h3></div>
          <div>{event}</div>
          <div>{text}</div>
        </div>
        <div className="w-full md:w-1/4 px-2 md:px-0">
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