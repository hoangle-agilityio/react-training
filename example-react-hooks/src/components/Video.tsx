import { forwardRef, useImperativeHandle, useRef } from "react";
import VideoOto from "../videos/video-oto.mp4";

function Video(props: any, ref: any) {
  const videoRef: any = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    }
  }))
  
  return (
    <video ref={videoRef} src={VideoOto} />
  );
}

export default forwardRef(Video);
