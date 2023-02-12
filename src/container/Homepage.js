import React from "react";
import taiwanMap from "../image/illustrator.png";

const Mainpage = () => {
  const infoContent = `The island of Taiwan has the largest number and density of high mountains in the world. This article summarizes the list of mountains that is under the Republic of China's territorial jurisdiction.    There are 268 mountain peaks over 3,000 metres (9,800 ft) above sea level on the island, with Yushan (Jade Mountain – in Chinese) being the tallest mountain in both Taiwan and East Asia. Mountaineering is one of the most popular activities for many Taiwanese. A list of 100 Peaks of Taiwan was created in 1971, which lists the selected one hundred mountain peaks over 3,000 m for mountaineering on the island. Climbing all of the one hundred mountain peaks listed is considered a great challenge for Taiwanese climbers.`;
  return (
    <div className="mainpage">
      <div className="header">I am header</div>
      <div className="content">
        <div className="mainInformation">
          <h1 className="title">Taiwan Mountain Album</h1>
          <div className="info">{infoContent}</div>
        </div>
        <div className="image">
          <img src={taiwanMap}></img>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
