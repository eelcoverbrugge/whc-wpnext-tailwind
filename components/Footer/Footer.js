import { FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "../../assets/images/logo-1.png";
import Logo2 from "../../assets/images/logo-partner-02.png";
import Logo3 from "../../assets/images/logo-partner-03.png";
import Logo4 from "../../assets/images/logo-partner-04.png";
import Logo5 from "../../assets/images/logo-partner-05.png";

export const Footer = () => {
  return (
    <>
      <div className="py-4 bg-gray-50">
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
              <h6 className="text-1xl font-bold">Contact</h6>
              <div className="flex flex-col">
                <div>Will Hawkins Collectief</div>
                <div>Hogedwarsstraat 3</div>
                <div>5261 LX Vught</div>
                <div className="flex gap-2 py-2">
                  <Link href="/"><FaFacebook size={30} className="cursor-pointer hover:text-slate-400" /></Link>
                  <Link href="/"><FaYoutube size={30} className="cursor-pointer hover:text-slate-400" /></Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="text-1xl font-bold">Talenten</h6>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Podium kunsten</span></Link>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Talent</span></Link>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Deelnemers</span></Link>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Inschrijven</span></Link>
            </div>
            <div className="flex flex-col">
              <h6 className="text-1xl font-bold">Optredens</h6>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Agenda</span></Link>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Partners</span></Link>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Videos</span></Link>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Optreden boeken</span></Link>
            </div>
            <div className="flex flex-col">
              <h6 className="text-1xl font-bold">Stichting</h6>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Achtergrond informatie</span></Link>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Missie & Visie</span></Link>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Bestuursleden</span></Link>
              <Link href="/"><span className="no-underline hover:underline cursor-pointer">Documenten</span></Link>
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