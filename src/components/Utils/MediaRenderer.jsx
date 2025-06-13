const PicOrVidRenderer = (media, _id) => {
//   console.log(media);
  const src = media.picture; // assuming media.picture is the URL
  if (src.includes(".mp4")) {
    return (
      <video controls playsInline className="h-full w-full object-fill">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    return <img alt={_id} src={src} className="h-full w-full object-fill" />;
  }
};

export default PicOrVidRenderer;
