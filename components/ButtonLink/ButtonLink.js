import Link from "next/link";

export const ButtonLink = ({ destination, label, ...otherProps }) => {
  return (
    <Link href={destination}>
      <button className="btn" {...otherProps}>
        <div className="flex gap-4 justify-between items-center">
          {label}
        </div>
      </button>
    </Link>
  );
};