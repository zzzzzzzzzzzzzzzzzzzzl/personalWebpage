import { useLocation } from "react-router-dom";

const NavArr = ["", "Grrrr", "About", "Contact"];
//I dont know how to make this code more readable becasue of the inner react functions
function NavItems(props) {
  const location = useLocation();

  function storePreviousURL() {
    const path = location.pathname.replace(/^\//, "");
    localStorage.setItem("previousURL", path);
  }

  function getPreviousURL() {
    return localStorage.getItem("previousURL");
  }
  const path = location.pathname.replace(/^\//, "");
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    localStorage.setItem("previousURL", path);
  }
  let style;
  let animateBorder;

  if (path == props.name) {
    const animate = NavArr.indexOf(getPreviousURL()) - NavArr.indexOf(path);

    const newstyle = document.createElement("style");

    newstyle.appendChild(
      document.createTextNode(`
      @keyframes slideInFromLeft {
        from {
          left: ${animate * 70}%;
        }
        to {
          left: 0;
        }
      }
    `)
    );

    document.head.appendChild(newstyle);

    animateBorder = {
      position: "relative",
      animation: "slideInFromLeft .3s forwards",
      borderBottom: "2px solid rgb(124,172,248)",
    };
    style = {
      color: "rgb(168,199,250)",
    };
  }

  return (
    <a href={`/${props.name}`} className="parent" onClick={storePreviousURL}>
      <div className="navBarChildren" style={style}>
        {props.name ? props.name : "Home"}
      </div>
      <div className={`border`} style={animateBorder}></div>
    </a>
  );
}
function BottomNav() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
      <div className="navBar nav" style={{ textAlign: "right" }}>
        {NavArr.map((item, index) => (
          <NavItems key={index} name={item} />
        ))}
      </div>
    </div>
  );
}

export default BottomNav;
