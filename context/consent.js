import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

const ConsentContext = createContext();

const readConsent = () => {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return value && typeof value === "object" ? value : null;
  } catch {
    return null;
  }
};

const writeConsent = (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {}
};

// Google Analytics zet _ga-cookies op het hoofddomein (bv. .willhawkinscollectief.nl)
const removeAnalyticsCookies = () => {
  const parts = window.location.hostname.split(".");
  const domains = parts.map((_, i) => parts.slice(i).join("."));
  document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name.startsWith("_ga"))
    .forEach((name) => {
      [undefined, ...domains].forEach((domain) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
      });
    });
};

export const ConsentProvider =({ children }) => {
  // undefined = nog niet uitgelezen, null = nog geen keuze gemaakt
  const [consent, setConsent] = useState(undefined);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
  }, []);

  const saveConsent = ({ analytics, media }) => {
    const value = { analytics: !!analytics, media: !!media };
    writeConsent(value);
    // Analytics intrekken: herladen zodat het al geladen gtag-script verdwijnt
    const reload = consent?.analytics && !value.analytics;
    setConsent(value);
    setSettingsOpen(false);
    if (reload) {
      removeAnalyticsCookies();
      window.location.reload();
    }
  };

  return (
    <ConsentContext.Provider
      value={{
        consent,
        saveConsent,
        settingsOpen,
        openSettings: () => setSettingsOpen(true),
        closeSettings: () => setSettingsOpen(false),
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  return useContext(ConsentContext);
};
