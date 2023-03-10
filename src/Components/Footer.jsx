import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-md-8">
          <a href="#" className="ms-2"><img src={"images/facebook.svg"} alt={"Facebook"} width={35} /></a>
          <a href="#" className="ms-2"><img src={"images/instagram.svg"} alt={"Instagram"} width={35} /></a>
          <a href="#" className="ms-2"><img src={"images/twitter.svg"} alt={"Twitter"} width={35} /></a>
          <a href="#" className="ms-2"><img src={"images/geo-alt.svg"} alt={"Twitter"} width={35} /></a>
        </div>
        <div className="col-md-4 text-center">
          <span>Copyright &copy; Damian Grela - 2023</span>
          <p>Montevideo Uruguay</p>
          <p><a href="mailto:damian.grelaviera@gmail.com">damian.grelaviera@gmail.com</a> </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
