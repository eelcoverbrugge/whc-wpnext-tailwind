import { FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "../../assets/images/logo-1.png";
import Logo2 from "../../assets/images/logo-partner-02.png";
import Logo3 from "../../assets/images/logo-partner-03.png";
import Logo4 from "../../assets/images/logo-partner-04.png";
import Logo5 from "../../assets/images/logo-partner-05.png";
import Logo6 from "../../assets/images/logo-serra-foundation.png";

export const Footer = () => {
  return (
    <>
      <div className="py-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-around">
            <div className="">
              <Image
                src={Logo1}
                alt="logo1"
                width="61"
                height="62"
                objectFit="cover"
              />
            </div>
            <div className="">
            <Image
              src={Logo2}
              alt="logo2"
              width="153"
              height="59"
              objectFit="cover"
            />
            </div>
            <div className="">
            <Image
              src={Logo3}
              alt="logo13"
              width="98"
              height="60"
              objectFit="cover"
            />
            </div>
            <div className="">
            <Image
              src={Logo4}
              alt="logo4"
              width="117"
              height="61"
              objectFit="cover"
            />
            </div>
            <div className="">
            <Image
              src={Logo5}
              alt="logo5"
              width="70"
              height="60"
              objectFit="cover"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 text-white py-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3>Contact</h3>
              <div className="flex flex-col">
                <div>Will Hawkins Collectief</div>
                <div>Hogedwarsstraat 3</div>
                <div>5261 LX Vught</div>
                <div className="flex">
                  <FaFacebook size={30} />
                  <FaYoutube size={30} />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3>Talenten</h3>
              <Link href="/">Podium kunsten</Link>
              <Link href="/">Talent</Link>
              <Link href="/">Deelnemers</Link>
              <Link href="/">Inschrijven</Link>
            </div>
            <div className="flex flex-col">
              <h3>Optredens</h3>
              <Link href="/">Agenda</Link>
              <Link href="/">Partners</Link>
              <Link href="/">Videos</Link>
              <Link href="/">Optreden boeken</Link>
            </div>
            <div className="flex flex-col">
              <h3>Stichting</h3>
              <Link href="/">Achtergrond informatie</Link>
              <Link href="/">Missie & Visie</Link>
              <Link href="/">Bestuursleden</Link>
              <Link href="/">Documenten</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white font-bold text-xs text-center py-2">
        <p>Copyright 2022 | Will Hawkins Collectief | Website powered by Eelco & Jeroen</p>
      </div>
    </>
  );
};