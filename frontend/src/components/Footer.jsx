import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./Footer.css";

const Footer = ({ forwardedRef }) => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="footer" ref={forwardedRef}>
            <div className="footer-container">
                <div className="socials">
                    
                    <a href="mailto: nadeem192121@gmail.com" target="_blank" rel="noopener noreferrer">
                        <CiMail size={20} style={{ color: "orange", marginRight: "2rem" }} />
                    </a>
                    
                    <a href="https://github.com/NadeemRashid2000" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} style={{ color: "orange", marginRight: "2rem" }} />
                    
                    </a>
                </div>

                <div className="copyright">
                    <p>© {currentYear} Breaking Bad API.</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;