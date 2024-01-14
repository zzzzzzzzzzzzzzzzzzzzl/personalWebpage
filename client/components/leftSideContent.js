import { useState } from "react";
import { useSelector } from "react-redux";

function indexValid(index, array) {
  return index >= 0 && index < array.length;
}

function TopHover() {
  const s = [1024, 768, 425, 375, 320];

  function Recurve(s, idx = 0) {
    if (idx < s.length) {
      const width = s[idx];
      return (
        <div className={`f a${idx}`} style={{ width: `${width}px` }}>
          {Recurve(s, idx + 1)}
        </div>
      );
    }
  }
  return (
    <div className="color-a f" style={{ width: "100%" }}>
      {" "}
      {Recurve(s)}
    </div>
  );
}

function TopBorder() {
  return (
    <div>
      <TopHover />
      <div className="" style={{ display: "flex" }}>
        <div className="" style={{ backgroundColor: "rgb(40,40,40)", width: "100%", height: "40px" }}>
          2
        </div>
      </div>
    </div>
  );
}
export function LeftSideContent() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <>
      <TopBorder />
      <div className="leftSideContent">
        <div className="gridItem" style={{ display: "flex", height: "100%" }}>
          <div className="gridItem" style={{ width: "40px" }}></div>
          <div className="gridItem" style={{ width: "100%", height: "100%" }}>
            <div style={{ backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1674788286491-ICT89B507GJ74RIPIVKK/amano2.jpg)", width: "100%", height: "100%", backgroundSize: "cover" }}></div>
            content
          </div>
          <div className="gridItem" style={{ width: "40px" }}></div>
        </div>

        <div className="gridItem" style={{ display: "flex" }}>
          <div className="gridItem" style={{ width: "40px", height: "40px" }}></div>
          <div className="gridItem" style={{ width: "100%" }}></div>
          <div className="gridItem" style={{ width: "40px", height: "40px" }}></div>
        </div>
      </div>
    </>
  );
}
