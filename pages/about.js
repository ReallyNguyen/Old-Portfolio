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
                                    Hello, I'm Jordan, a website developer specializing in crafting impactful online experiences that foster meaningful connections. I believe that well-crafted websites leave a lasting impression on users.
                                </p>
                                <p>
                                    With a strong foundation in web development languages and frameworks such as HTML, CSS, JavaScript, and React, I focus on creating visually captivating, functional, and user-friendly websites.
                                </p>
                                <p>
                                    Collaborating effectively, I bring ideas to life while staying up-to-date with industry trends and continuously learning. My priority is to deliver delightful user experiences that align with business goals.
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
