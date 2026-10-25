import { useConsent } from "context/consent";

export const getYouTubeId = (url) => {
  const match = (url || "").match(
    /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : null;
};

export const YouTubeEmbed = ({ url, caption }) => {
  const { consent, saveConsent, openSettings } = useConsent();
  const videoId = getYouTubeId(url);

  if (!videoId) {
    return null;
  }

  return (
    <figure className="max-w-7xl mx-2 md:mx-4 lg:mx-auto py-4">
      <div className="relative w-full aspect-video bg-darkPurple">
        {consent?.media ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={caption || "YouTube video"}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center text-white">
            <p className="max-w-md text-sm">
              Deze video wordt gehost door YouTube. Als je de video laadt, kan YouTube
              cookies plaatsen.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => saveConsent({ analytics: !!consent?.analytics, media: true })}
                className="px-4 py-2 uppercase font-bold bg-soap text-charcoal hover:bg-white"
              >
                Video laden
              </button>
              <button onClick={openSettings} className="px-4 py-2 uppercase font-bold underline hover:text-soap">
                Instellingen
              </button>
            </div>
            <a href={url} target="_blank" rel="noreferrer noopener" className="text-sm underline hover:text-soap">
              Bekijk op YouTube
            </a>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: caption }} />
      )}
    </figure>
  );
};
