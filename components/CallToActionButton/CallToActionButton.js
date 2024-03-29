import { ButtonLink } from "../ButtonLink";

export const CallToActionButton = ({ align, buttonLabel, destination }) => {
  const alignMap = {
    left: "text-left",
    center: "text-center item-center",
    right: "text-right",
  }
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} label={buttonLabel} cta={true} />
    </div>
  );
};