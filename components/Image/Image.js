import NextImage from "next/image";
import Link from "next/link";

export const Image = ({ src, height, width, alt, layout, priority, link }) => {

  if (link !== "") {
    return (
      <Link href={link} target="_blank">
        <NextImage
          src={src}
          height={height}
          width={width}
          alt={alt || ""}
          layout={layout}
          priority={priority}
        />
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
