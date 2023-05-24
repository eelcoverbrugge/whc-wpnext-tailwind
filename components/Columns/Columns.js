import { useParallax } from "react-scroll-parallax";
import React, { useRef } from 'react';

export const Columns = ({
                          isStackedOnMobile,
                          children,
                          textColor,
                          backgroundColor
                        }) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const target = useRef(null);
  const backgroundOne = useParallax({
    speed: 15,
    targetElement: target.current,
  });
  const backgroundTwo = useParallax({
    speed: 60,
    targetElement: target.current,
  });

  return (
    <div ref={target} style={{ ...textColorStyle }} className="relative">
      {!!backgroundColor ? (
        <div ref={backgroundOne.ref} className="bg-azureishWhite h-[900px] w-3/4 absolute -top-[100px] lef-0 -z-10"/>
      ) : (
        <div ref={backgroundOne.ref} />
      )}
      <div className={`max-w-7xl mx-2 md:mx-4 lg:mx-auto ${isStackedOnMobile ? "block md:flex" : "flex"}`}>
        {children}
      </div>
      {!!backgroundColor ? (
        <div ref={backgroundTwo.ref} className="bg-soap h-[800px] w-3/4 absolute top-[300px] right-0 -z-20"/>
      ) : (
        <div ref={backgroundTwo.ref} />
      )}
    </div>
  );
};