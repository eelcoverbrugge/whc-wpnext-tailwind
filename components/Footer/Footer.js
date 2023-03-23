import { FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3>Contact</h3>
          <div className="flex flex-col">
            <div>Will Hawkins Collectief</div>
            <div>Hogedwarsstraat 3</div>
            <div>5261 LX Vught</div>
            <div className="flex">
              <FaFacebook size={30}/>
              <FaYoutube size={30}/>
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
  );
};