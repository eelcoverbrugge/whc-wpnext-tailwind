import { FaBars, FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";
import WhcLogo from "../../assets/images/whc-logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "../ButtonLink";

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
  // console.log("MAIN MENU: ", items);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparancy, setBackgroundTransparancy] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);
  const [navbar, setNavbar] = useState(false);


  useEffect(() => {
    let backgroundTransparancyVar = clientWindowHeight / 600; //1000/600=1.6

    if (backgroundTransparancy < 1) {
      let boxShadowVar = backgroundTransparancy * 0.1; //1.6*0.16

      setBoxShadow(boxShadowVar);
      setBackgroundTransparancy(backgroundTransparancyVar);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, [clientWindowHeight]);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  }

  return (
    <>
      <nav className="w-full sticky top-0 z-20"
           style={{
             background: `rgba(41, 34, 56, ${true === navbar ? 1 : backgroundTransparancy})`,
             boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
           }}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:block">
                <Image src={WhcLogo}
                       height="45"
                       width="201"
                       alt="logo"
                       priority
                />
              <div className="md:hidden">
                <button
                  className="p-2 text-white"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <FaRegWindowClose size={30} /> : <FaBars size={30} />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {(items || []).map(item => (
                  <li key={item.id} className="text-white">
                    <Link href={item.destination}>
                      <a onClick={() => setNavbar(!navbar)} className="font-bold uppercase">{item.label}</a>
                    </Link>
                  </li>
                ))}
                <li>
                  <ButtonLink destination={callToActionDestination}
                              label={callToActionLabel}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>

  );
};