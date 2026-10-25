import Link from "next/link";
import { Page } from "../components/Page";
import { getPageStaticProps } from "../utils/getPageStaticProps";
import { useConsent } from "context/consent";

const UPDATED = "25 oktober 2026";

const Section = ({ title, children }) => (
  <section className="mt-8">
    <h2 className="font-heading text-3xl font-medium tracking-wider">{title}</h2>
    <div className="mt-2 space-y-4">{children}</div>
  </section>
);

const CookieRow = ({ name, provider, purpose, duration, category }) => (
  <tr className="border-t border-soap align-top">
    <td className="py-2 pr-4 font-mono text-sm">{name}</td>
    <td className="py-2 pr-4">{provider}</td>
    <td className="py-2 pr-4">{purpose}</td>
    <td className="py-2 pr-4">{category}</td>
    <td className="py-2">{duration}</td>
  </tr>
);

const Privacyverklaring = (props) => {
  const { openSettings } = useConsent();
  const company = props.footerCompany || {};

  return (
    <Page {...props}>
      {/* Donkere kopbalk: het menu is wit en transparant en heeft een donkere achtergrond nodig */}
      <header className="bg-darkPurple text-white -mt-32 pt-48 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-wider">Privacy- en cookieverklaring</h1>
          <p className="mt-2 text-sm">Laatst bijgewerkt: {UPDATED}</p>
        </div>
      </header>
      <article className="max-w-7xl mx-auto px-4 pb-16">

        <Section title="Wie zijn wij">
          <p>
            Deze website is van {company.companyName || "Will Hawkins Collectief"}
            {company.companyAddress && `, ${company.companyAddress}`}
            {company.companyAddress2 && `, ${company.companyAddress2}`}. Wij zijn
            verantwoordelijk voor de verwerking van persoonsgegevens via deze website. Vragen
            over privacy kun je mailen naar{" "}
            <a href="mailto:mail@willhawkinscollectief.nl" className="underline">
              mail@willhawkinscollectief.nl
            </a>
            .
          </p>
        </Section>

        <Section title="Welke gegevens verwerken wij">
          <p>
            <strong>Contactformulier.</strong> Als je het contactformulier invult, verwerken wij je
            e-mailadres en je bericht om je vraag te kunnen beantwoorden. Het formulier wordt
            verwerkt door Formspree (Verenigde Staten). Wij bewaren je bericht niet langer dan nodig
            om je vraag af te handelen.
          </p>
          <p>
            <strong>Websitestatistieken.</strong> Alleen als je daar toestemming voor geeft,
            gebruiken wij Google Analytics om te zien hoe bezoekers de website gebruiken (bijvoorbeeld
            welke pagina&apos;s het meest bezocht worden). Wij gebruiken deze informatie alleen om de
            website te verbeteren.
          </p>
          <p>
            <strong>Video&apos;s van YouTube.</strong> Video&apos;s van YouTube worden pas geladen
            als je toestemming geeft voor externe media. Daarna kan YouTube (Google) cookies plaatsen
            en gegevens over je bezoek verwerken.
          </p>
          <p>
            <strong>Lettertypen.</strong> De lettertypen op deze website worden geladen via Google
            Fonts. Daarbij ontvangt Google je IP-adres. Google Fonts plaatst geen cookies.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Cookies zijn kleine bestanden die bij een bezoek aan een website op je apparaat worden
            opgeslagen. Wij plaatsen alleen cookies waarvoor geen toestemming nodig is, plus de
            cookies waarvoor jij toestemming hebt gegeven.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2 pr-4">Naam</th>
                  <th className="py-2 pr-4">Partij</th>
                  <th className="py-2 pr-4">Doel</th>
                  <th className="py-2 pr-4">Categorie</th>
                  <th className="py-2">Bewaartermijn</th>
                </tr>
              </thead>
              <tbody>
                <CookieRow
                  name="cookie-consent"
                  provider="Will Hawkins Collectief"
                  purpose="Onthoudt je cookiekeuze (opgeslagen in je browser)"
                  category="Noodzakelijk"
                  duration="Tot je deze wist"
                />
                <CookieRow
                  name="_ga, _ga_*"
                  provider="Google Analytics"
                  purpose="Onderscheidt bezoekers voor anonieme statistieken"
                  category="Analytisch"
                  duration="2 jaar"
                />
                <CookieRow
                  name="YouTube-cookies"
                  provider="YouTube (Google)"
                  purpose="Afspelen van video's en voorkeuren van de speler"
                  category="Externe media"
                  duration="Verschilt per cookie, tot 2 jaar"
                />
              </tbody>
            </table>
          </div>
          <p>
            Je kunt je keuze altijd wijzigen of intrekken via{" "}
            <button onClick={openSettings} className="underline font-bold">
              cookie-instellingen
            </button>{" "}
            (ook onderaan elke pagina). Je kunt cookies ook verwijderen via de instellingen van je
            browser.
          </p>
        </Section>

        <Section title="Delen met anderen">
          <p>
            Wij verkopen je gegevens niet. Wij delen gegevens alleen met de hierboven genoemde
            partijen (Formspree, Google) voor zover dat nodig is voor de genoemde doelen. Deze
            partijen kunnen gegevens verwerken buiten de Europese Unie; zij doen dat op basis van
            de daarvoor geldende waarborgen, zoals het EU-VS Data Privacy Framework.
          </p>
        </Section>

        <Section title="Jouw rechten">
          <p>
            Je hebt het recht om je gegevens in te zien, te laten corrigeren of te laten
            verwijderen, en om bezwaar te maken tegen de verwerking. Stuur daarvoor een e-mail
            naar{" "}
            <a href="mailto:mail@willhawkinscollectief.nl" className="underline">
              mail@willhawkinscollectief.nl
            </a>
            . Ben je het niet eens met hoe wij met je gegevens omgaan, dan kun je een klacht
            indienen bij de{" "}
            <Link href="https://autoriteitpersoonsgegevens.nl" target="_blank" className="underline">
              Autoriteit Persoonsgegevens
            </Link>
            .
          </p>
        </Section>

        <Section title="Wijzigingen">
          <p>
            Wij kunnen deze verklaring aanpassen. De datum bovenaan laat zien wanneer dat voor het
            laatst is gebeurd.
          </p>
        </Section>
      </article>
    </Page>
  );
};

export default Privacyverklaring;

export const getStaticProps = async () => {
  // Menu's en footer komen uit WordPress; de inhoud staat hierboven
  const { props } = await getPageStaticProps({});

  return {
    props: {
      ...props,
      seo: {
        title: "Privacy- en cookieverklaring | Will Hawkins Collectief",
        metaDesc: "Hoe Will Hawkins Collectief omgaat met persoonsgegevens en cookies.",
      },
      blocks: [],
      title: "Privacy- en cookieverklaring",
      featuredImage: null,
    },
  };
};
