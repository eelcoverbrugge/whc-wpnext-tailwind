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

  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuItem, setMenuIte,] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  const toggleMenuItem = () => {
    setMenuIte(!menuItem);
  }

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
  };

  return (
    <nav className="sticky flex top-1 bg-gradient-to-r from-rose-500 to-pink-500">
      <div className="flex items-center p-2 gap-2">
        <Link href="/">
          <Image src={WhcLogo}
                 height="45"
                 width="201"
                 alt="logo"
          />
        </Link>
        <div className="font-bold text-2xl">
          tw:<span className="text-sky-900">mf</span>
        </div>
      </div>


      <div className="block md:hidden ml-auto pr-4 my-auto cursor-pointer">
        <div id="mobile-menu-button" onClick={toggleMobileMenu} className={`group peer ${toggleMobileMenu && 'open'}`}>
          <div
            className="top-0 bg-zinc-200 rounded-full w-8 h-1 group-open:rotate-45 transition-all group-open:top-2 relative"></div>
          <div className="bg-zinc-200 rounded-full w-8 h-1 mt-1 opacity-100 group-open:opacity-0 transition-all"></div>
          <div
            className="top-0 bg-zinc-200 rounded-full w-8 h-1 mt-1 group-open:-rotate-45 transition-all group-open:-top-2 relative"></div>
        </div>

        <div
          className="absolute bg-gradient-to-r from-rose-500 to-pink-500 w-full left-0 top-[62px] peer-open:block hidden">
          {(items || []).map(item => (
            <div key={item.id}>
              {!!item.subMenuItems?.length ? (
                <div id="ticket-menu-item"
                     onClick={toggleMenuItem}
                     className={`group ${toggleMenuItem && 'open'} relative h-full cursor-pointer text-pink-200 hover:text-zinc-200 transition-colors hover:bg-white/10`}>
                  <div className="p-4 text-center font-bold ">{item.label}</div>
                  <div className="hidden group-open:block">
                    {item.subMenuItems.map(subMenuItem => (
                      <div key={subMenuItem.id}
                           className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                        <span>{subMenuItem.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={item.id}
                className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transition-colors hover:bg-white/10">
                <span>{item.label}</span>
                </div>
                )}
            </div>
          ))}

        </div>
      </div>
      <div className="hidden flex-1 md:flex items-center justify-end">
        {(items || []).map(item => (
          <div key={item.id}>
            {!!item.subMenuItems?.length ? (
              <div className="menu-item group">
                <span>{item.label}</span>
                <div
                  className="group-hover:block hidden absolute top-full bg-pink-500 right-0 whitespace-nowrap rounded-b-md text-right p-3">
                  {item.subMenuItems.map(subMenuItem => (
                    <div key={subMenuItem.id}>
                      <div
                        className="p-4 font-bold hover:bg-white/50 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200">
                        <span>{subMenuItem.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="menu-item">
                <span>{item.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};