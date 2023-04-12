import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../../assets/images/witte-linkbalk-pijl-rechts.png";

export const ButtonLink = ({ destination, label, cta }) => {
  return (
    <Link href={destination}>
      <button className="btn">
        <div className="flex gap-4 justify-between items-center">
          {label}
          {cta &&
            <Image
              src={ArrowRight}
              alt="arrow to the right"
              width="83"
              height="20"
            />}
        </div>
      </button>
    </Link>
  );
};