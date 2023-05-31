import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export const Slider = ({ images, height }) => {

  const imagesArray = [];

  for (const key in images) {
    if (typeof images[key] === "object" && !Array.isArray(images[key])) {
      imagesArray.push(images[key]);
    }
  }

  const prevSlide = () => {
    const carousel = document.getElementById('carousel');

    if (carousel) {
      carousel.scrollLeft = carousel.scrollLeft - carousel.firstElementChild.offsetWidth;
    }
  };

  const nextSlide = () => {
    const carousel = document.getElementById('carousel');

    if (carousel) {
      carousel.scrollLeft = carousel.scrollLeft + carousel.firstElementChild.offsetWidth;
    }
  };

  return (
    <>
      <div className="my-8 md:my-16 flex">
        <div id="previous"
             onClick={prevSlide}
             className="text-5xl text-charcoal opacity-50 transition duration-250 ease-in-out hover:opacity-100 flex justify-center items-center cursor-pointer p-1 sm:p2 relative">
          <FaAngleLeft className="w-[20px] md:w-[30px]" />
        </div>
        <div id="carousel" className="flex w-full flex-1 scroll-smooth gap-4 snap-x no-scrollbar overflow-x-auto ">
          {imagesArray.map(image => (
            <div key={image.id} className={`min-w-[80%] md:min-w-[40%]`}>
              <div className={`h-[400px] md:h-[600px] w-full snap-center bg-cover bg-center`}
                   style={{ backgroundImage: `url(${image.url})` }}/>
            </div>
          ))}
        </div>
        <div id="next"
             onClick={nextSlide}
             className="text-5xl text-charcoal opacity-50 transition duration-250 ease-in-out hover:opacity-100 flex justify-center items-center cursor-pointer p-1 sm:p2 relative">
          <FaAngleRight className="w-[20px] md:w-[30px]" />
        </div>
      </div>
    </>
  );
};