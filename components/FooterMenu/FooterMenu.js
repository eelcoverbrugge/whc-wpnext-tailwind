import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export const FooterMenu = ({ items, company, logos }) => {
  return (
    <>
      <div className="py-4 bg-azureishWhite">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-wrap justify-between mx-2 lg:mx-auto items-center`}>
            {(logos || []).map((item, index) => (
              <div key={index}>
                {item.logo?.link &&
                  <Image
                    src={item.logo.link}
                    alt={item.logo.altText}
                    width={item.logo.mediaDetails.width}
                    height={item.logo.mediaDetails.height}
                    objectFit="cover"
                  />
                }
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-charcoal text-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
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
                        {!!social.url && social.name === "Facebook" && (
                          <Link href={social.url} target="_blank" rel="noopener noreferrer">
                              <FaFacebook size={25} className="cursor-pointer hover:text-soap" />
                          </Link>
                        )}
                        {!!social.url && social.name === "Youtube" && (
                          <Link href={social.url} target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={25} className="cursor-pointer hover:text-soap" />
                          </Link>
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
                      <Link
                        key={subMenuItem.id}
                        href={subMenuItem.destination}
                        className="no-underline hover:underline cursor-pointer"
                      >
                        {subMenuItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-darkPurple text-white font-bold text-xs text-center py-2">
        <p>Copyright 2022 | Will Hawkins Collectief | Website powered by Eelco & Jeroen</p>
      </div>
    </>
  );
};