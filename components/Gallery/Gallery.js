import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export const Gallery = ({ cropImages, items }) => {
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

  // const columnWidth = 100 / columns;

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
      <div className="my-16 flex">
        <div id="previous"
             onClick={prevSlide}
             className="text-5xl text-secondaryColor opacity-50 transition duration-250 ease-in-out hover:opacity-100 flex justify-center items-center cursor-pointer p-1 sm:p2 relative">
          <FaAngleLeft className="w-[20px] md:w-[30px]" />
        </div>
        <div id="carousel" className="flex w-full flex-1 scroll-smooth gap-4 snap-x overflow-x-auto overflow-x-hidden">
          {items.map(item => (
            <div key={item.id} className={`min-w-[80%] md:min-w-[40%]`}>
              <div className="h-[400px] md:h-[600px] w-full snap-center bg-cover bg-center"
                   style={{ backgroundImage: `url(${item.attributes.url})` }}/>
            </div>
          ))}
        </div>
        <div id="next"
             onClick={nextSlide}
             className="text-5xl text-secondaryColor opacity-50 transition duration-250 ease-in-out hover:opacity-100 flex justify-center items-center cursor-pointer p-1 sm:p2 relative">
          <FaAngleRight className="w-[20px] md:w-[30px]" />
        </div>
      </div>
    </>
  );
};