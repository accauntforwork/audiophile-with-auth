import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../scroll/ScrollToTop";

function ButtonShop(props) {
  return (
    <Link className="text-subtitle " to={props.to} onClick={props.onClick}>
      <button
        className="text-gray hover:text-brightOrange transition-colors duration-300"
        onClick={ScrollToTop}
      >
        SHOP{" "}
        <img
          className="inline-block align-middle -mt-1"
          src="/assets/shared/desktop/icon-arrow-right.svg"
          aria-label="hidden"
        />
      </button>
    </Link>
  );
}

export default ButtonShop;
