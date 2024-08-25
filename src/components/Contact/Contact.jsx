import React from 'react';
import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
            <h2>Contact</h2>
            <p>Fee free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                    <a href="mailto:jiahaoma2000@gmail.com">jiahaoma2000@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon"/>
                    <a href="https://www.linkedin.com/in/jiahao-ma-0b3b33178/">linkedin.com/jackma</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon"/>
                    <a href="https://github.com/jackma2003">github.com/jackma2003</a>
                </li>
            </ul>
        </footer>
    );
};