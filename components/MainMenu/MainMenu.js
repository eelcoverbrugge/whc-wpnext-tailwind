"use client";

import { FaBars, FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";
import WhcLogo from "../../assets/images/whc-logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "../ButtonLink";
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react'

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparancy, setBackgroundTransparancy] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();

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
  };

  return (
    <>
      <nav className="w-full sticky top-0 z-20 bg-darkPurple shadow-xl"
           style={{
             background: `rgba(41, 34, 56, ${true === navbar ? 1 : backgroundTransparancy})`,
             boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`
           }}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:block">
              <Link href="/">
                <Image src={WhcLogo}
                       height="45"
                       width="201"
                       alt="logo"
                       priority
                />
              </Link>
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
                navbar ? "block" : "hidden"
              }`}
            >

              <Transition appear={true} show={true}>
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-1 lg:space-x-4 md:space-y-0">
                {(items || []).map((item, index) => (

                    <Transition.Child
                      key={index}
                      enter="transition ease-in-out delay-100 duration-100 transform"
                      enterFrom="opacity-0 translate-y-full"
                      enterTo="opacity-100 translate-y-0"
                    >

                      <li className={`relative w-fit block after:block after:content-[''] after:absolute after:bottom-[-7px] after:h-[3px] after:bg-soap after:w-full ${router.asPath.replace(/\//g, '') === item.destination.replace(/\//g, '') ? "" : "after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}`}>

                        <Link
                          href={item.destination}
                          onClick={() => setNavbar(!navbar)}
                          className={`text-white p-2 font-bold uppercase`}
                        >
                            {item.label}
                        </Link>
                      </li>

                    </Transition.Child>

                ))}
                <li>
                  <ButtonLink
                    destination={callToActionDestination}
                    label={callToActionLabel}
                    onClick={() => setNavbar(!navbar)}
                  />
                </li>
              </ul>

              </Transition>
            </div>
          </div>
        </div>
      </nav>
    </>

  );
};