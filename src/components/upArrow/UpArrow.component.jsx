import { useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import "./UpArrow.styles.css";
// import * as Scroll from "react-scroll";

function UpArrow() {
  const [visible, setVisible] = useState(false);
  const changeVisibility = () => {
    if (window.scrollY >= 80) {
      setVisible(true);
    } else if (window.scrollY <= 80) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", changeVisibility);
  function scrollUp() {
    window.scrollTo(0, 0);
  }
  const styledIcon = {
    display: visible ? "block" : "none",
    height: "100%",
    width: "100%",
    color: "rgb(58,105,234)",
    cursor: "pointer",
  };
  return (
    <div onClick={scrollUp} className="StldUpArrow">
      <IoIosArrowDropupCircle style={styledIcon} />
    </div>
  );
}

export default UpArrow;
