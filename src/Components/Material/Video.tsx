import { useEffect } from "react";
import { VideoTexture } from "three";

type MaterialVideoProps = {
  loop?: boolean;
  play?: boolean;
  src: string;
  volume?: number;
};

const video = document.createElement("video");
const videoTexture = new VideoTexture(video);

const MaterialVideo = ({
  loop = true,
  play = false,
  src,
  volume = 1,
}: MaterialVideoProps) => {
  useEffect(() => {
    video.loop = loop;
  }, [loop]);

  useEffect(() => {
    if (play) {
      video.play();
    } else {
      video.pause();
    }
  }, [play]);

  useEffect(() => {
    video.src = src;
    video.load();
  }, [src]);

  useEffect(() => {
    video.volume = volume;
  }, [volume]);

  return (
    <meshBasicMaterial //
      color="white"
      map={videoTexture}
      toneMapped={false}
    />
  );
};

export { MaterialVideo as Material };
