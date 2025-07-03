import React from "react";
import MaskedDiv from "../lyxui/masked-div";

const MaskeddivDemo = () => {
  return (
    <MaskedDiv maskType="type-1" size={0.45}>
      <video
        className="cursor-pointer transition-all duration-300 hover:scale-105"
        autoPlay
        loop
        muted
      >
        <source
          src="https://videos.pexels.com/video-files/30344022/13006997_1920_1080_60fps.mp4"
          type="video/mp4"
        />
      </video>
    </MaskedDiv>
  );
};

export { MaskeddivDemo };
