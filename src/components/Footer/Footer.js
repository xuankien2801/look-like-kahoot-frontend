import React from "react";
import { useSelector } from "react-redux"
/*
import styles from "./footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
*/

function Footer() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)
  return (<div></div>)
}

export default Footer;
