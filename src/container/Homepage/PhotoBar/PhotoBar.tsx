import React from "react";
import { FlexBox } from "../../../component/FlexBox/FlexBox";
import bar_1 from "../../../image/bar_1.jpg";
import bar_2 from "../../../image/bar_2.jpg";
import bar_3 from "../../../image/bar_3.jpg";
import * as Style from "./Style";

const PhotoBar = () => {
  const infoContent = `The island of Taiwan has thmetres (9,800 ft) above sea level on the island, with Yushan (Jade Mountain – in Chinese) being the tallest mountain in both Taiwan and East Asia. Mountaineering is one of the most popular activities for many Taiwanese. A list of 100 Peaks of Taiwan was created in 1971, which lists the selected one hundred mountain peaks over 3,000 m for mountaineering on the island. Climbing all of the one hundred mountain peaks listed is considered a great challenge for Taiwanese climbers.`;

  return (
    <Style.ImageContainer>
      <Style.ImageWrapper>
        <img src={bar_1} className="image" />
        <div>
          <div>
            <h1>Take a walk with mountain.</h1>
            <span>{infoContent}</span>
          </div>
          <button>Click</button>
        </div>
      </Style.ImageWrapper>
      <Style.ImageWrapper>
        <div>
          <div>
            <h1>Take a walk with mountain.</h1>
            <span>{infoContent}</span>
          </div>
          <button>Click</button>
        </div>
        <img src={bar_2} className="image left" />
      </Style.ImageWrapper>
      <Style.ImageWrapper>
        <img src={bar_3} className="image" />
        <div>
          <div>
            <h1>Take a walk with mountain.</h1>
            <span>{infoContent}</span>
          </div>
          <button>Click</button>
        </div>
      </Style.ImageWrapper>
    </Style.ImageContainer>
  );
};

export default PhotoBar;
