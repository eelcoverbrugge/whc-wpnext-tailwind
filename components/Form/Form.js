import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import ArrowRight from "../../assets/images/witte-linkbalk-pijl-rechts.png";

export const Form = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p>Bedankt voor uw bericht! Indien nodig reageren wij zo snel mogelijk.</p>;
  }
  return (
    <div className="bg-soap p-5">
      <form onSubmit={handleSubmit} className="w-full my-5">
        <label htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="block w-full md:w-1/2 bg-ghostWhite h-[60px] border-b-[1px] border-darkPurple mt-3 mb-5 p-4 focus:outline-none focus:ring-1 focus:ring-darkPurple"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="bericht" className="w-full">Bericht</label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full bg-ghostWhite h-[260px] border-b-[1px] border-darkPurple mt-3 mb-5 p-4 focus:outline-none focus:outline-none focus:ring-1 focus:ring-darkPurple"
        />
        <ValidationError
          prefix="Message"
          field="message"
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