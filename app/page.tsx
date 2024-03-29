// import { Player } from "../components/Player";

import dynamic from "next/dynamic";
const Player = dynamic(() => import("../components/Player"), {
  ssr: false,
});

const videoJsOptions = {
  autoplay: true,
  muted: true,
  controls: true,
  sources: [
    {
      src: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
      type: "application/x-mpegURL",
    },
  ],
};

export default function Index() {
  return (
    <Player {...videoJsOptions} />
  );
}
