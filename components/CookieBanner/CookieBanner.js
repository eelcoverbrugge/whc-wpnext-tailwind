import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useConsent } from "context/consent";

const Toggle = ({ id, label, description, checked, disabled, onChange }) => (
  <label htmlFor={id} className={`flex gap-4 items-start py-3 border-t border-white/20 ${disabled ? "" : "cursor-pointer"}`}>
    <input
      id={id}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
      className="mt-1 h-5 w-5 shrink-0 accent-soap"
    />
    <span>
      <span className="block font-bold">{label}</span>
      <span className="block text-sm">{description}</span>
    </span>
  </label>
);

export const CookieBanner = ({ gaMeasurementId }) => {
  const { consent, saveConsent, settingsOpen, openSettings, closeSettings } = useConsent();
  const [analytics, setAnalytics] = useState(false);
  const [media, setMedia] = useState(false);
  const acceptRef = useRef();
  const router = useRouter();

  const showBanner = consent === null || settingsOpen;
  // Op de privacyverklaring blokkeren we de pagina niet, zodat bezoekers die eerst kunnen lezen
  const blocking = showBanner && (router.pathname !== "/privacyverklaring" || settingsOpen);

  useEffect(() => {
    // Zonder eerdere keuze staat alles standaard aan, anders de opgeslagen keuze
    if (settingsOpen) {
      setAnalytics(consent ? consent.analytics : true);
      setMedia(consent ? consent.media : true);
    }
  }, [settingsOpen, consent]);

  // Pagina achter de overlay niet laten scrollen en focus op de hoofdknop zetten
  useEffect(() => {
    if (!blocking) {
      return;
    }
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    acceptRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [blocking]);

  return (
    <>
      {consent?.analytics && (
        <GoogleAnalytics trackPageViews gaMeasurementId={gaMeasurementId} />
      )}
      {showBanner && (
        <div className={blocking
          ? "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          : "fixed bottom-4 inset-x-4 md:left-auto md:w-[420px] z-50 max-h-[60vh] flex"}
        >
          <div
            role="dialog"
            aria-modal={blocking}
            aria-labelledby="cookie-title"
            className="w-full max-w-lg max-h-full overflow-y-auto bg-charcoal text-white shadow-2xl p-6"
          >
            <h2 id="cookie-title" className="font-heading text-4xl tracking-wide">Cookies</h2>
            <p className="mt-2 text-sm">
              Wij gebruiken cookies om te zien hoe onze website wordt gebruikt (Google
              Analytics) en om video&apos;s van YouTube te kunnen tonen. Deze cookies plaatsen
              we alleen als je daar toestemming voor geeft. Lees meer in onze{" "}
              <Link href="/privacyverklaring" className="underline hover:text-soap">
                privacy- en cookieverklaring
              </Link>
              .
            </p>
            {settingsOpen && (
              <div className="mt-4">
                <Toggle
                  id="consent-necessary"
                  label="Noodzakelijk"
                  description="Nodig om je cookiekeuze te onthouden. Deze staan altijd aan."
                  checked
                  disabled
                />
                <Toggle
                  id="consent-analytics"
                  label="Analytisch"
                  description="Google Analytics: anonieme statistieken over het gebruik van de website."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <Toggle
                  id="consent-media"
                  label="Externe media"
                  description="YouTube: video's afspelen op deze website. YouTube kan hierbij cookies plaatsen."
                  checked={media}
                  onChange={setMedia}
                />
              </div>
            )}
            <div className="mt-6 flex flex-col gap-2">
              <button
                ref={acceptRef}
                onClick={() => saveConsent({ analytics: true, media: true })}
                className="w-full px-4 py-3 uppercase font-bold text-lg bg-soap text-charcoal hover:bg-white"
              >
                {settingsOpen ? "Alles accepteren" : "Accepteren"}
              </button>
              {settingsOpen ? (
                <button
                  onClick={() => saveConsent({ analytics, media })}
                  className="w-full px-4 py-3 uppercase font-bold border border-white hover:bg-darkPurple"
                >
                  Keuze opslaan
                </button>
              ) : (
                <button
                  onClick={() => saveConsent({ analytics: false, media: false })}
                  className="w-full px-4 py-3 uppercase font-bold border border-white hover:bg-darkPurple"
                >
                  Weigeren
                </button>
              )}
              {settingsOpen ? (
                consent !== null && (
                  <button onClick={closeSettings} className="py-2 text-sm underline hover:text-soap">
                    Annuleren
                  </button>
                )
              ) : (
                <button onClick={openSettings} className="py-2 text-sm underline hover:text-soap">
                  Instellingen
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
