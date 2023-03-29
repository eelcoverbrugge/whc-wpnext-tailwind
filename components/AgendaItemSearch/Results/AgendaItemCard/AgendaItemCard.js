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
      <a className="first:border-b-2 first:border-slate-700 hover:border-b-2 hover:border-slate-700 p-5 block">
        <div className="flex w-full">
          <Image src="http://willhawkinscollectief.local/wp-content/uploads/2023/03/erik-mclean-PFfA3xlHFbQ-unsplash-scaled.jpg"
                 height="200px"
                 width="300px"
                 objectFill="cover"
                 alt=""
          />
        </div>
        <div className="font-heading mt-3 text-2xl ">{title}</div>
        <div className="">{date}</div>
        <div className="">{image} {text}</div>
        <div className="">{ticket}</div>
      </a>
    </Link>
  );
};