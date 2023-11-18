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
                <div style={{ margin: "2.5rem 4rem" }}>
                    <div className="me_section" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "6rem" }}>
                        <div className="bio" style={{ width: "50%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h1 style={{ margin: 0 }}>Who Am I?</h1>
                                <hr className={styles.separator} style={{ width: '30%', border: 'none', borderTop: '3px solid var(--white)', margin: '0px 2.5rem' }} />
                            </div>
                            <p style={{ width: "75%", margin: "2.5rem 0", fontSize: "17px" }}>Hello! My name is <span style={{ fontWeight: "semi-bold" }}>Jordan</span>, a frontend developer and UI/UX designer passionate about creating engaging user interfaces. With a strong background in frontend development and design, I craft visually appealing websites and applications. </p>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", listStyle: "none", margin: "0", padding: "0" }}>
                                <li style={{ display: "flex" }}>
                                    <span style={{ minWidth: "150px", fontWeight: "bold" }}>Name:</span>
                                    <span style={{ flex: "1" }}>Jordan Nguyen</span>
                                </li>
                                <li style={{ display: "flex" }}>
                                    <span style={{ minWidth: "150px", fontWeight: "bold" }}>Address:</span>
                                    <span style={{ flex: "1" }}>Vancouver, BC</span>
                                </li>
                                <li style={{ display: "flex" }}>
                                    <span style={{ minWidth: "150px", fontWeight: "bold" }}>Phone:</span>
                                    <span style={{ flex: "1" }}>604-725-9607</span>
                                </li>
                                <li style={{ display: "flex" }}>
                                    <span style={{ minWidth: "150px", fontWeight: "bold" }}>Email:</span>
                                    <span style={{ flex: "1" }}>Jordannguyen513@gmail.com</span>
                                </li>
                                <li style={{ display: "flex" }}>
                                    <span style={{ minWidth: "150px", fontWeight: "bold" }}>Study:</span>
                                    <span style={{ flex: "1" }}>British Columbia Institute of Technology</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.circle}></div>
                    </div>

                    <div className="skills_section">
                        <div style={{ width: "55%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h1 style={{ margin: 0 }}>Skills</h1>
                                <hr className={styles.separator} style={{ width: '30%', border: 'none', borderTop: '3px solid var(--white)', margin: '0px 2.5rem' }} />
                            </div>
                            <p style={{ width: "75%", margin: "2.5rem 0", fontSize: "17px" }}>With a solid foundation in HTML, CSS, JavaScript, and NextJs, I strive for seamless collaboration in transforming concepts into tangible digital experiences. Although my professional journey may not be extensive, I am deeply dedicated to constantly expanding my knowledge and keeping pace with the dynamic landscape of the industry.</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "5rem", margin: "3rem 0" }}>
                            <div style={{ width: "390px", height: "240px", backgroundColor: "red", borderRadius: "40px" }}></div>
                            <div style={{ width: "390px", height: "240px", backgroundColor: "red", borderRadius: "40px" }}></div>
                            <div style={{ width: "390px", height: "240px", backgroundColor: "red", borderRadius: "40px" }}></div>

                        </div>
                    </div>
                </div>
            </m.div >
        </>
    );
}
