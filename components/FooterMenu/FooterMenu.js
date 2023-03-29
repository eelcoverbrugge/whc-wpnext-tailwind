import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Logo1 from "../../assets/images/logo-1.png";
import Logo2 from "../../assets/images/logo-partner-02.png";
import Logo3 from "../../assets/images/logo-partner-03.png";
import Logo4 from "../../assets/images/logo-partner-04.png";
import Logo5 from "../../assets/images/logo-partner-05.png";

export const FooterMenu = ({ items, company }) => {
  // console.log("FOOTER MENU: ", items);
  return (
    <>
      <div className="py-4 bg-gray-50">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 mx-auto items-center justify-items-center gap-5">
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
      <div className="bg-slate-700 text-white py-4 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {company && (
              <div>
                <h6 className="text-1xl font-bold">Contact</h6>
                <div className="flex flex-col">
                  <div>{company.companyName && company.companyName}</div>
                  <div>{company.companyAddress && company.companyAddress}</div>
                  <div>{company.companyAddress2 && company.companyAddress2}</div>
                  <div className="flex gap-2 py-2">
                    {company.socialMedia && company.socialMedia.map((social, index) => (
                      <div key={index}>
                        {social.name === "Facebook" && (
                          <FaFacebook size={25} className="cursor-pointer hover:text-slate-400" />
                        )}
                        {social.name === "Youtube" && (
                          <FaYoutube size={25} className="cursor-pointer hover:text-slate-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {(items || []).map(item => (
              <div key={item.id} className="flex flex-col">
                {item.destination ?
                  <Link href={item.destination}><span className="no-underline hover:underline cursor-pointer">{item.label}</span></Link> :
                  <h6 className="text-1xl font-bold">{item.label}</h6>
                }
                {!!item.subMenuItems?.length && (
                  <div className="flex flex-col">
                    {item.subMenuItems.map(subMenuItem => (
                      <Link key={subMenuItem.id} href={subMenuItem.destination}>
                        <a className="no-underline hover:underline cursor-pointer">{subMenuItem.label}</a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white font-bold text-xs text-center py-2">
        <p>Copyright 2022 | Will Hawkins Collectief | Website powered by Eelco & Jeroen</p>
      </div>
    </>
  );
};