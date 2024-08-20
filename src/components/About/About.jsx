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
                            <p>Aspiring software engineer with a solid foundation in multiple programming languages and technologies, eager to apply problem-solving skills to develop scalable applications and grow expertise in end-to-end solution architecture.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Motivated frontend developer with a keen eye for design, proficient in modern frameworks and committed to creating responsive, user-friendly interfaces that enhance the overall user experience.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Dedicated backend developer with a strong theoretical understanding of server-side technologies, databases, and API development, ready to contribute to building efficient and scalable backend systems.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};