import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import {getImageUrl} from "../../utils";
import history from "../../data/history.json";

export const Experience = () => {
    return (<section className={styles.container} id="experience">
        <h2 className={styles.title}>Skills & Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}> {
                skills.map((skill, id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                    );
                })}
                </div>
            <ul>
                {
                    history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <div className={styles.historyImageContainer}>
                                <img 
                                    src={getImageUrl(historyItem.imageSrc)} 
                                    alt={`${historyItem.organization} Logo`}
                                />
                            </div>
                            <div>
                                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>{historyItem.experiences.map((Experience, id) => {
                                    return <li key={id}>{Experience}</li>
                                })}</ul>
                            </div>

                        </li>
                );
                })}
            </ul>
        </div>
    </section>
    );
};