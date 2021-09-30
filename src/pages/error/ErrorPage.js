import React from "react";
import {
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import s from "./ErrorPage.module.scss";

import errorImage from "../../assets/errorImage.svg"
import FooterIcon from "../../components/Icons/FooterIcon.js";

const ErrorPage = () => {
  return (
    <div className={s.pageContainer}>
      <div className={s.errorContainer}>
        <h1 className={s.errorCode}>404</h1>
        <p className={s.errorInfo}>
          Oops. Looks like the page you're looking for no longer exists
        </p>
        <p className={s.errorHelp}>
          But we're here to bring you back to safety
        </p>
        <Link to="/template/dashboard">
          <Button className={`${s.errorBtn} rounded-pill`} type="submit" color="secondary-red">
            Back to Home
          </Button>
        </Link>
      </div>
      <div className={s.imageContainer}>
        <img className={s.errorImage} src={errorImage} alt="Error page" width="80" />
      </div>
      <div className={s.footer}>
        <span className={s.footerLabel}>2021 &copy; Flatlogic. Hand-crafted & Made with</span>
        <FooterIcon />
      </div>
    </div>
  );
}

export default ErrorPage;
