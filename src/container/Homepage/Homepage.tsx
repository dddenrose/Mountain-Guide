import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import taiwanMap from "../../image/illustrator.png";
import { FlexBox } from "../../component/FlexBox/FlexBox";
import homepageImage from "../../image/homepageImage.jpg";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PhotoBar from "./PhotoBar/PhotoBar";

const HomePage = ({ app }: { app: any }) => {
  const infoContent = `The island of Taiwan has the largest number and density of high mountains in the world. This article summarizes the list of mountains that is under the Republic of China's territorial jurisdiction.    There are 268 mountain peaks over 3,000 metres (9,800 ft) above sea level on the island, with Yushan (Jade Mountain – in Chinese) being the tallest mountain in both Taiwan and East Asia. Mountaineering is one of the most popular activities for many Taiwanese. A list of 100 Peaks of Taiwan was created in 1971, which lists the selected one hundred mountain peaks over 3,000 m for mountaineering on the island. Climbing all of the one hundred mountain peaks listed is considered a great challenge for Taiwanese climbers.`;

  return (
    <div className="mainpage">
      <FlexBox width="100%" postion="relative" margin="0 0 64px 0">
        <img src={homepageImage} style={{ width: "100%" }} />
        <div
          style={{
            position: "absolute",
            fontSize: "60px",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "10",
          }}
        >
          Look Forward it
        </div>
      </FlexBox>
      <FlexBox direction="row" margin="0 0 64px 0">
        <FlexBox flex="1">
          <LandscapeIcon style={{ fontSize: "32px" }} />
          Mountain Explore
        </FlexBox>
        <FlexBox flex="1">
          <AutoStoriesIcon style={{ fontSize: "32px" }} />
          The Story Of Mountain
        </FlexBox>
        <FlexBox flex="1">
          <LocalLibraryIcon style={{ fontSize: "32px" }} />
          Mountain Guide
        </FlexBox>
      </FlexBox>
      <PhotoBar />
    </div>
  );
};

export default HomePage;
