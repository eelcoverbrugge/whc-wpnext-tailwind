import { usePageContext } from "../../context/page";
import { Heading } from "../Heading";

export const PostTitle = ({level, textAlign}) => {
  const { title } = usePageContext();
  return (
    <Heading content={title}
             level={level}
             textAlign={textAlign}
    ></Heading>
  );
};