import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <a href="#">
        <span className="fa-stack">
          <FontAwesomeIcon
            icon="square"
            className="fa-stack-2x"
            color="#918E9B"
          />
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className="fa-stack-1x"
            color="#161619"
          />
        </span>
      </a>
      <a href="#">
        <span className="fa-stack">
          <FontAwesomeIcon
            icon="square"
            className="fa-stack-2x"
            color="#918E9B"
          />
          <FontAwesomeIcon
            icon={["fab", "facebook-f"]}
            className="fa-stack-1x"
            color="#161619"
          />
        </span>
      </a>
      <a href="#">
        <span className="fa-stack">
          <FontAwesomeIcon
            icon="square"
            className="fa-stack-2x"
            color="#918E9B"
          />
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="fa-stack-1x"
            color="#161619"
          />
        </span>
      </a>
      <a href="#">
        <span className="fa-stack">
          <FontAwesomeIcon
            icon="square"
            className="fa-stack-2x"
            color="#918E9B"
          />
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className="fa-stack-1x"
            color="#161619"
          />
        </span>
      </a>
    </div>
  );
}
