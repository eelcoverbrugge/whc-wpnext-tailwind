import { useForm, ValidationError } from "@formspree/react";
import { Input } from "../Input";
import Image from "next/image";
import ArrowRight from "../../assets/images/witte-linkbalk-pijl-rechts.png";

export const Form = ({ formId }) => {
  // console.log("FORM ID: ", formId);
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p>Bedankt voor uw bericht! Indien nodig reageren wij zo snel mogelijk.</p>;
  }
  return (
    <div className="bg-tertiaryColor p-5">
      <form onSubmit={handleSubmit} className="w-full my-5">
        <Input
          inputId="voornaam"
          label="Voornaam"
          type="text"
          className="block w-full md:w-1/2 bg-fifth h-[60px] border-b-[1px] border-primaryColor mt-3 mb-5 p-4 focus:outline-none focus:ring-1 focus:ring-primaryColor"
        />
        <ValidationError
          prefix="Voornaam"
          field="voornaam"
          errors={state.errors}
        />

        <Input
          inputId="achternaam"
          label="Achternaam"
          type="text"
          className="block w-full md:w-1/2 bg-fifth h-[60px] border-b-[1px] border-primaryColor mt-3 mb-5 p-4 focus:outline-none focus:ring-1 focus:ring-primaryColor"
        />
        <ValidationError
          prefix="Voornaam"
          field="voornaam"
          errors={state.errors}
        />

        <Input
          inputId="email"
          label="E-mail"
          type="email"
          className="block w-full md:w-1/2 bg-fifth h-[60px] border-b-[1px] border-primaryColor mt-3 mb-5 p-4 focus:outline-none focus:ring-1 focus:ring-primaryColor"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <label htmlFor="bericht" className="w-full">Bericht</label>
        <textarea
          id="bericht"
          name="bericht"
          className="w-full bg-fifth h-[260px] border-b-[1px] border-primaryColor mt-3 mb-5 p-4 focus:outline-none focus:outline-none focus:ring-1 focus:ring-primaryColor"
        />
        <ValidationError
          prefix="Bericht"
          field="bericht"
          errors={state.errors}
        />
        <div>
          <button className="btn flex gap-5 items-center" type="submit" disabled={state.submitting}>
            Verzenden
            <Image
              src={ArrowRight}
              alt="arrow to the right"
              width="83"
              height="20"
            />
          </button>
        </div>
      </form>
    </div>
  );
};