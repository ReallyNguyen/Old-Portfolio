import React from "react";
import { motion as m } from 'framer-motion';
import Transition from "@/components/transition";
import Navbar from "@/components/navbar";
import styles from "@/styles/About.module.css"

export default function About() {
    return (
        <>
            <Transition />
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.6, ease: "easeInOut" }}
            >
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.about}>
                        <div className={styles.introduction}>
                            <div className={styles.intro}>
                                <h1>Who Am I?</h1>
                                <hr className={styles.line} />
                            </div>
                            <div className={styles.about_me}>
                                <p>
                                    I'm Jordan, a frontend developer and UI/UX designer passionate about creating engaging user interfaces. With a strong background in frontend development and design, I craft visually appealing websites and applications.
                                </p>
                                <p>
                                    Experienced in HTML, CSS, JavaScript, and React, I collaborate effectively to bring ideas to life. I'm committed to continuous learning and staying up-to-date with industry trends.
                                </p>
                                <p>
                                    I prioritize user-centric design, aiming for delightful experiences that align with business goals.
                                </p>
                            </div>
                        </div>
                        <div className={styles.placeholder}></div>
                    </div>
                </div>
            </m.div>
        </>
    );
}
