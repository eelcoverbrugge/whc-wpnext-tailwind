import React from "react";
import { getFontSizeForHeading, getTextAlign } from "../../utils/fonts";

export const Heading = ({textAlign, content, level}) => {
  return React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `${level === 1 && "relative -top-[150px] left-0 z-2 "} font-heading max-w-7xl lg:mx-auto ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
  });
}