import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import { motion as m } from 'framer-motion';
import Transition from '@/components/transition';
import Navbar from '@/components/navbar';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/about");
  };

  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.6, ease: "easeInOut" }}
      >
        <main className={styles.main}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.home}>
              <p>Hello, I am Jordan Nguyen</p>
              <hr className={styles.line} />
              <div className={styles.me}>
                <p className={styles.passionate}>Passionate&nbsp;</p>
                <h2 className={styles.position}>
                  <Typewriter
                    options={{
                      strings: ["Web Developer", "UI/UX Designer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
              </div>
              <button className={styles.button} onClick={handleButtonClick}>
                <h2>Get in Touch</h2>
              </button>
            </div>
            <div className={styles.placeholder}></div>
          </div>
        </main>
      </m.div>
    </>
  );
}
