import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

export const EmbededVideo = ({ video_id }) => {
  return (
    <div className="embeded-video">
      {video_id}
      {video_id && (
        <LiteYouTubeEmbed
          aspectHeight="{9}"
          aspectWidth="{16}"
          id={video_id}
          title="Title"
        />
      )
      }
    </div>
  );
};
