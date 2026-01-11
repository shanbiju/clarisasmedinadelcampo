interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed = ({ videoId, title = "YouTube video" }: YouTubeEmbedProps) => {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default YouTubeEmbed;
