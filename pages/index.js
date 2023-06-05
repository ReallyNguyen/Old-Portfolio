import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import { motion as m } from 'framer-motion';
import Transition from '@/components/transition';
import Navbar from '@/components/navbar';
import Background from "@/components/background";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/about");
  };

  return (
    <>
      <Transition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.6, ease: "easeInOut" }}
      >
        <div style={{ zIndex: -1, position: "fixed" }}>
          <Background />
        </div>
        <main className={styles.main}>
          <Navbar />
          <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '1.5rem 8.5rem 0 8.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap' }}>
              <p style={{ fontSize: '45px', margin: 0 }}>Hello, I am Jordan Nguyen</p>
              <hr style={{ width: '10%', border: 'none', borderTop: '3px solid var(--white)', margin: '20px 0' }} />
              <div style={{ display: 'flex', textAlign: 'left', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontSize: '28px', margin: 0 }}>Passionate&nbsp;</p>
                  <h2 style={{ fontSize: '28px', margin: 0, fontWeight: '700' }}>
                    <Typewriter
                      options={{
                        strings: ["Front-End Developer", "UI/UX Developer", "Web Designer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h2>
                </div>
                <p style={{ width: "60%" }}>I specialize in website development, and my belief is that well-crafted websites leave a lasting impression and foster meaningful connections. I focus on creating visually captivating, functional, and user-friendly websites using a strong foundation in web development languages and frameworks.</p>
              </div>
              <button
                className={styles.button}
                onClick={handleButtonClick}
              >
                <h2>Get in Touch</h2>
              </button>

            </div>
          </div>
        </main>
      </m.div>
    </>
  );
}
