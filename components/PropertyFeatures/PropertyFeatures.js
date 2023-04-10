import { usePageContext } from "../../context/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";
import numeral from "numeral";

export const PropertyFeatures = () => {
  const { propertyFeatures } = usePageContext();
  // console.log("propertyFeatures: ", propertyFeatures);
  return (
    <div>
      <div className="max-w-lg mx-auto my-10 bg-white text-primaryColor p-5 text-center
      ">
        <div className="grid grid-cols-2-mb-4-gap-y-5">
          <div>
            <FontAwesomeIcon icon={faBed} /> {propertyFeatures.bedrooms} bedrooms
          </div>
          <div>
            <FontAwesomeIcon icon={faBath} /> {propertyFeatures.bathrooms} bathrooms
          </div>
          <div>
            {!!propertyFeatures.petFriendly &&
              <>
                <FontAwesomeIcon icon={faDog} /> pet friendly
              </>
            }
          </div>
          <div>
            {!!propertyFeatures.hasParking &&
              <>
                <FontAwesomeIcon icon={faCar} /> parking available
              </>
            }
          </div>
        </div>
        <h3 className="text-5xl font-bold">
          €{numeral(propertyFeatures.price).format("0,0")}
        </h3>
      </div>
    </div>
  );
};