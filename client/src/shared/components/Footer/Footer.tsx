import React from "react";
import {
  FaFacebook,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RedirectURL } from "../../../constants";
import Logo from "../Logo/Logo";
import "./Footer.scss";

interface Props {
  theme?: string;
}

const Footer = (props: Props) => {
  return (
    <div className="zubi-footer">
      <div className="inner">
        <div className="logo">
          <Logo theme={props.theme} title={null} />
          <h2>Zubi.io</h2>
        </div>
        <div className="content">
          <div>
            <h2>Company</h2>
            <a href={RedirectURL.Zubi.About}>About</a>
            <a href={RedirectURL.Zubi.Carrers}>Carrers</a>
            <a href={RedirectURL.Zubi.Hiring}>Hiring</a>
          </div>
          <div>
            <h2>Products</h2>
            <a href={RedirectURL.Zubi.Asses}>Z.Assess</a>
            <a href={RedirectURL.Zubi.Learn}>Z.Learn</a>
            <a href={RedirectURL.Zubi.Certificates}>Z.Certz</a>
          </div>
          <div>
            <h2>Contact Us</h2>
            <p>Corp. Office:</p>
            <p>A3, Sector 04, Noida,</p>
            <p> Uttar Pradesh - 201301.</p>
            <a href={RedirectURL.Zubi.Contact}>E-mail: contact@zubi.io</a>
          </div>
        </div>
      </div>
      <div className="zubi-copyright">
        <small>&copy; Zubi Infotech Pvt. Ltd. 2020</small>
        <ul>
          <li>
            <a
              href={RedirectURL.Socials.Facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href={RedirectURL.Socials.Telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a
              href={RedirectURL.Socials.Instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href={RedirectURL.Socials.Linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href={RedirectURL.Socials.Twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href={RedirectURL.Socials.Youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
