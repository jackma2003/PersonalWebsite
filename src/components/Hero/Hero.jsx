import React from 'react';
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return ( 
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jack</h1>
            <p className={styles.description}>I'm an aspiring Software Engineer based in NYC with a B.S in Computer Science from NYU, I have a strong passion for full-stack development.
                Feel free to reach out if you'd like to learn more about me!
            </p>
            <a href="mailto:jiahaoma2000@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/memoji.png")} alt="Hero" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>
  );
};