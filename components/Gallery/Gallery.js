import { FaAngleRight, FaAngleLeft, FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

export const Gallery = ({ columns, cropImages, items }) => {
  let maxHeigth = 0;
  let maxWidth = 0;

  if (cropImages) {
    items.forEach(item => {
      if (item.attributes.height > maxHeight) {
        maxHeigth = item.attributes.height;
      }
      if (item.attributes.width > maxWidth) {
        maxWidth = item.attributes.maxWidth;
      }
    });
  }

  const columnWidth = 100 / columns;

  const prevSlide = () => {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      carousel.scrollLeft = carousel.scrollLeft - items[0].attributes.width;
    }
  };

  const nextSlide = () => {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      carousel.scrollLeft = carousel.scrollLeft + items[0].attributes.width;
    }
  };

  return (
    <>
      <div className="flex">
        <div id="previous"
             onClick={prevSlide}
             className="text-5xl text-slate-700 opacity-50 transition duration-250 ease-in-out hover:opacity-100 flex justify-center items-center cursor-pointer p-2 relative -top-8">
          <FaAngleLeft size={30} />
        </div>
        <div id="carousel" className="flex w-full flex-1 scroll-smooth gap-4 snap-x overflow-x-auto overflow-x-hidden">
          {items.map((item, index) => (
            <div key={item.id} className={`min-w-[80%] md:min-w-[40%]`}>
              <div className="h-[400px] w-full snap-center bg-cover bg-center"
                   style={{ backgroundImage: `url(${item.attributes.url})` }}
              ></div>
              <h4 className="mt-2">Eelco Verbrugge</h4>
              <h5>Gitarist</h5>
            </div>
          ))}
        </div>
        <div id="next"
             onClick={nextSlide}
             className="text-5xl text-slate-700 opacity-50 transition duration-250 ease-in-out hover:opacity-100  flex justify-center items-center cursor-pointer p-2 relative -top-8">
          <FaAngleRight size={30} />
        </div>
      </div>
    </>
  );
};