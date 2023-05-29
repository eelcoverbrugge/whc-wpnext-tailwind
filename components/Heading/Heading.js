import React from "react";
import { Transition } from '@headlessui/react'
import { getFontSizeForHeading, getTextAlign } from "../../utils/fonts";

export const Heading = ({textAlign, content, level}) => {
  return (
    <>
      <Transition
        appear={true}
        show={true}
        enter="transition ease-in-out delay-100 duration-100 transform"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
      >
        {React.createElement(`h${level}`, {
          dangerouslySetInnerHTML: { __html: content },
          className: `${level === 1 && "relative -top-[200px] left-0 z-2 "} font-heading max-w-7xl mx-2 md:mx-4 lg:mx-auto ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
        })}
      </Transition>
    </>
  );
}