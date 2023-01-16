import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "./assets/avatar.jpg";
export default function Info() {
  return (
    <section className="info">
      <img src={avatar} className="info__avatar" />
      <h1 className="info__name">Ngoc Tran</h1>
      <h5 className="info__title">Frondend Developer</h5>
      <span className="info__twitter">@hiimngoctran</span>
      <div className="info__contact">
        <a className="info__email" href="tranngocteam79@gmail.com">
          <FontAwesomeIcon icon="envelope" />
          Email
        </a>
        <a
          className="info__linkedin"
          href="https://www.linkedin.com/in/imngoctran"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
