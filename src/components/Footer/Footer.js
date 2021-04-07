import React from "react";
import FooterIcon from "../Icons/FooterIcon.js";
import s from "./Footer.module.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className={s.footer}>
        <span className={s.footerLabel}>2021 &copy; Flatlogic. Hand-crafted & Made with</span>
        <FooterIcon />
      </div>
    )
  }
}

export default Footer;
