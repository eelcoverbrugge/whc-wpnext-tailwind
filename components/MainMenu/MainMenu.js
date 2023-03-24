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
              <Link href="/">
                <Image src={WhcLogo}
                       height="45"
                       width="201"
                       alt="logo"
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
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
                      <a>{item.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>

  );
};