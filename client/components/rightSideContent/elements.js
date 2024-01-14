import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import { Rando } from "../rando";

export function Elements() {
  return (
    <div className="elements">
      <div className="comment">I've chopped off all my limbs</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
