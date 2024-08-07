import React from 'react';
import styles from './About.module.css';
import {getImageUrl} from '../../utils';

export const About = () => {
    return ( 
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} 
                    alt="picture of me"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor"/>
                        <div className={styles.aboutItemText}>
                            <h3>Software Engineer</h3>
                            <p>I'm a software engineer with experience in multiple programming languages, technologies and developed software applications</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and user friendly applications</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I'm a backend developer with experience in developing fast and optimized backend systems and APIs for applications</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};