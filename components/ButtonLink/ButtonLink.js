import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../../assets/images/witte-linkbalk-pijl-rechts.png";

export const ButtonLink = ({ destination, label }) => {
  return (
    <Link href={destination}>
      <button className="btn flex gap-5 items-center">
        {label}
        <Image
          src={ArrowRight}
          alt="arrow to the right"
          width="83"
          height="20"
        />
      </button>
    </Link>
  );
};