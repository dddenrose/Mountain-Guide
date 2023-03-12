import React from "react";
import { FlexBox } from "../../../component/FlexBox/FlexBox";
import bar_1 from "../../../image/bar_1.jpg";
import bar_2 from "../../../image/bar_2.jpg";
import bar_3 from "../../../image/bar_3.jpg";

const PhotoBar = () => {
  return (
    <div>
      <FlexBox height="320px" alignItems="flex-start">
        <img src={bar_1} style={{ height: "100%" }} />
        <FlexBox>
            Take a walk with mountain.
        </FlexBox>
      </FlexBox>
    </div>
  );
};

export default PhotoBar;
