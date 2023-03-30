import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export const FooterMenu = ({ items, company, logos }) => {
  // console.log("FOOTER MENU: ", items);
  return (
    <>
      <div className="py-4 bg-gray-50">
        <div className="max-w-screen-lg mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-8 mx-auto items-center justify-items-center`}>
            {(logos || []).map((item, index) => (
              <div key={index}>
                <Image
                  src={item.logo.link}
                  alt={item.logo.altText}
                  width={item.logo.mediaDetails.width}
                  height={item.logo.mediaDetails.height}
                  objectFit="cover"
                />
              </div>
            ))}
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