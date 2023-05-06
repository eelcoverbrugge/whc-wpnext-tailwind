import NextImage from "next/image";
import Link from "next/link";

export const Image = ({ src, height, width, alt, layout, priority, link }) => {

  if (link !== "") {
    return (
      <Link href={link}>
        <a target="_blank" rel="noopener noreferrer">
          <NextImage
            src={src}
            height={height}
            width={width}
            alt={alt || ""}
            layout={layout}
            priority={priority}
          />
        </a>
      </Link>
    );
  }

  return (
    <NextImage
      src={src}
      height={height}
      width={width}
      alt={alt || ""}
      layout={layout}
      priority={priority}
    />
  );
};
