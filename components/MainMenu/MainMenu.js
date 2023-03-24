import { FaHouseUser, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import WhcLogo from "../../assets/images/whc-logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
  // console.log("MAIN MENU: ", items);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparancy, setBackgroundTransparancy] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    let backgroundTransparancyVar = clientWindowHeight / 600; //1000/600=1.6

    if (backgroundTransparancy < 1) {
      let boxShadowVar = backgroundTransparancy * 0.1; //1.6*0.16

      setBoxShadow(boxShadowVar);
    }
    setBackgroundTransparancy(backgroundTransparancyVar);

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, [clientWindowHeight]);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  }

  return (
    <div
      className="text-white px-5 sticky top-0 z-20 flex items-center"
         style={{
           background: `rgba(41, 34, 56, ${backgroundTransparancy})`,
           boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
         }}
    >
      <div className="py-4 pl-5 flex text-pink-600">
        <Link href="/">
          <Image src={WhcLogo}
                 height="45"
                 width="201"
                 alt="logo"
          />
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        {(items || []).map(item => (
          <div key={item.id} className="hover:bg-slate-700 cursor-pointer relative group">
            <div>
              <Link href={item.destination}>
                <a className="p-5 block">{item.label}</a>
              </Link>
              {!!item.subMenuItems?.length && (
                <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                  {item.subMenuItems.map(subMenuItem => (
                    <Link key={subMenuItem.id} href={subMenuItem.destination}>
                      <a className="block whitespace-nowrap p-5 hover:bg-slate-700">{subMenuItem.label}</a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="ml-3 my-auto">
          <ButtonLink destination={callToActionDestination}
                      label={callToActionLabel}
          />
        </div>
      </div>
    </div>
  );
};