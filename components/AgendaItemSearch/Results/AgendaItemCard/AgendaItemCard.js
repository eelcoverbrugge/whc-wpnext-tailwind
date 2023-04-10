import Link from "next/link";
import Image from "next/image";

export const AgendaItemCard = ({
                               title,
                               destination,
                               image,
                               date,
                               text,
                               ticket,
                             }) => {
  return (
    <Link href={destination}>
      <a className="border-b-2 border-white first:border-secondaryColor hover:border-b-2 hover:border-secondaryColor p-5 block">
        {/*<div className="flex w-full">*/}
        {/*  {image && <Image*/}
        {/*    src={image}*/}
        {/*    height="200px"*/}
        {/*    width="300px"*/}
        {/*    objectFill="cover"*/}
        {/*    alt=""*/}
        {/*  />}*/}
        {/*</div>*/}
        <div className="font-heading mt-3 text-2xl ">{title}</div>
        <div className="">{date}</div>
        <div className="">{text}</div>
        <div className="">{ticket}</div>
      </a>
    </Link>
  );
};