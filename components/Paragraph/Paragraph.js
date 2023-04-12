import React from "react";
import { getTextAlign } from "../../utils/fonts";
import { relativeToAbsoluteUrls } from "../../utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
  return <p className={`max-w-7xl mx-2 md:mx-4 lg:mx-auto ${getTextAlign(textAlign)}`}
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }} />;
};