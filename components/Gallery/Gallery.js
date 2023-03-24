import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

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
    })
  }

  const columnWidth = 100 / columns;

  return (
    <>
      <div className="flex">
        <div id="previous"
             className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8">
          <FaAngleLeft size={30} />
        </div>
        <div id="carousel" className="mt-4 flex w-full flex-1 scroll-smooth gap-4 pb-5 snap-x overflow-x-auto">
          {items.map(item => (
            <div key={item.id} className="min-w-[80%] md:min-w-[40%]">
            <div className="h-80 w-full snap-center bg-cover bg-center"
                 style={{backgroundImage: `url(${item.attributes.url})`}}
            ></div>
            <h4 className="mt-2">Eelco Verbrugge</h4>
            <h5>Gitarist</h5>
            </div>
          ))}
        </div>
        <div id="next"
             className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8">
          <FaAngleRight size={30} />
        </div>
      </div>
    </>
  );
};