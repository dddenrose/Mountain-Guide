import React from "react";
import africaMap from "../../image/africa.svg";
import { doc, getDoc, collection, setDoc } from "firebase/firestore";
import * as Style from "./Style";
import { mountainList, taiwanCountry } from "./const";
import { async } from "q";

const MapPage = ({ db }: any) => {
  const [viewPort, setViewPort] = React.useState({
    width: 1000,
    height: 850,
  });
  const [viewBox, setViewBox] = React.useState({
    x: 0,
    y: 200,
    width: 500,
    height: 500,
  });
  const [mapResult, setMapResult] = React.useState<any>(null);
  const [mountainListData, setMountainListData] =
    React.useState<any>(mountainList);
  const [taiwanCountryData, setTaiwanCountryData] =
    React.useState(taiwanCountry);
  const mapRef = React.useRef<HTMLDivElement>(null);
  const [isMouseMove, setIsMouseMove] = React.useState(false);
  const [mountainData, setMountainData] = React.useState({
    title: "",
    info: "",
  });
  const [mouseOverTarget, setMouseOverTarget] = React.useState("");

  React.useEffect(() => {
    console.log(db, "====db");

    const init = async () => {
      if (db) {
        const citiesRef = collection(db, "cities");

        await setDoc(doc(citiesRef, "SF"), {
          name: "San Francisco",
          state: "CA",
          country: "USA",
          capital: false,
          population: 860000,
          regions: ["west_coast", "norcal"],
        });
        await setDoc(doc(citiesRef, "LA"), {
          name: "Los Angeles",
          state: "CA",
          country: "USA",
          capital: false,
          population: 3900000,
          regions: ["west_coast", "socal"],
        });
        await setDoc(doc(citiesRef, "DC"), {
          name: "Washington, D.C.",
          state: null,
          country: "USA",
          capital: true,
          population: 680000,
          regions: ["east_coast"],
        });
        await setDoc(doc(citiesRef, "TOK"), {
          name: "Tokyo",
          state: null,
          country: "Japan",
          capital: true,
          population: 9000000,
          regions: ["kanto", "honshu"],
        });
        await setDoc(doc(citiesRef, "BJ"), {
          name: "Beijing",
          state: null,
          country: "China",
          capital: true,
          population: 21500000,
          regions: ["jingjinji", "hebei"],
        });
      }
    };

    init();
  }, [db]);

  const onMouseDown = (event: any) => {
    setIsMouseMove(true);
  };

  const onMouseUp = () => {
    setIsMouseMove(false);
  };

  const handleWindowMouseMove = (event: any) => {
    if (isMouseMove) {
      const xMove =
        event.movementX < 0
          ? Math.abs(event.movementX * 1.5)
          : -Math.abs(event.movementX * 1.5);

      const yMove =
        event.movementY < 0
          ? Math.abs(event.movementY * 1.5)
          : -Math.abs(event.movementY * 1.5);

      setViewBox({
        ...viewBox,
        x: viewBox.x + xMove,
        y: viewBox.y + yMove,
      });
    }
  };
  const svg = document.getElementById("svg");

  const handleOnWheel = (event: any) => {
    if (mapRef?.current?.offsetLeft) {
      let r = 1;

      if (event.deltaY > 0) {
        r = 0.9;
      } else if (event.deltaY < 0) {
        r = 1.1;
      } else {
        r = 1;
      }
      setViewBox({
        ...viewBox,
        width: viewBox.width * r,
        height: viewBox.height * r,
      });
    }
  };

  const sortMountainList = (dataName: string) => {
    const tempResult = mountainListData.filter(
      (ele: any) => ele.dataName !== dataName
    );
    const find = mountainListData.find((ele: any) => ele.dataName === dataName);
    return [...tempResult, find];
  };

  const handleLocationOnClick = (title: string, info: string) => {
    setIsMouseMove(false);
    const sortResult = sortMountainList(title);
    setMountainListData(sortResult);
    setMountainData({
      title,
      info,
    });
  };

  const handleOnMouseOver = (title: string) => {
    const sortResult = sortMountainList(title);
    setMountainListData(sortResult);
    setMouseOverTarget(title);
  };

  const targetTag = (dataName: string) => {
    if (dataName === mouseOverTarget) {
      return "target";
    }
    return "";
  };

  return (
    <Style.MainWrapper>
      <Style.MapWrapper
        ref={mapRef}
        id="mapWrapper"
        onMouseMove={handleWindowMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onWheel={(event: any) => handleOnWheel(event)}
      >
        <svg
          id="svgElement"
          xmlns="http://www.w3.org/2000/svg"
          width={viewPort.width}
          height={viewPort.height}
          viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
        >
          <g id="圖層_1" data-name="圖層 1">
            {taiwanCountryData.map((ele: any) => (
              <path
                id={ele.id}
                className={ele.className}
                d={ele.d}
                transform={ele.transform}
                key={ele.id}
              />
            ))}
          </g>
          <g id="圖層_4" data-name="圖層 4">
            {mountainListData.map((ele: any) => (
              <g
                id={ele.id}
                data-name={ele.dataName}
                key={ele.id}
                onClick={() =>
                  handleLocationOnClick(ele.dataName, ele.dataName)
                }
                onMouseOver={() => handleOnMouseOver(ele.dataName)}
              >
                <path
                  className={`${ele.className} ${targetTag(ele.dataName)}`}
                  d={ele.d}
                  transform={ele.transform}
                />
                <circle
                  className={`${ele.className} ${targetTag(ele.dataName)}`}
                  cx={ele.cx}
                  cy={ele.cy}
                  r={ele.r}
                />
              </g>
            ))}
          </g>
        </svg>
      </Style.MapWrapper>
      <div style={{ width: 800 }}>
        <h1>{mountainData.title}</h1>
        <h5>{mountainData.info}</h5>
      </div>
    </Style.MainWrapper>
  );
};

export default MapPage;
