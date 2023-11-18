import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import { motion as m } from 'framer-motion';
import Transition from '@/components/transition';
import Navbar from '@/components/navbar';
import Button from "@/components/button";
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
          <div className={styles.content} style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '1rem 3.5rem 0 3.5rem' }}>
            <div className={styles.intro} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap' }}>
              <p className={styles.name} style={{ fontSize: '45px', margin: 0 }}>Hello, I am Jordan Nguyen</p>
              <div className={styles.description} style={{ display: 'flex', textAlign: 'left', flexDirection: 'column' }}>
                <div className={styles.role} style={{ display: 'flex', flexDirection: 'row', margin: "1rem 0" }}>
                  <p className={styles.role_label} style={{ fontSize: '28px', margin: 0 }}>Passionate&nbsp;</p>
                  <h2 className={styles.role_title} style={{ fontSize: '28px', margin: 0, fontWeight: '700' }}>
                    <Typewriter
                      options={{
                        strings: ["Front-End Developer", "UI/UX Developer", "Web Designer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h2>
                </div>
                <p className={styles.bio} style={{ width: "50%", marginTop: "1.5rem" }}>I specialize in website development, and my belief is that well-crafted websites leave a lasting impression and foster meaningful connections. I focus on creating visually captivating, functional, and user-friendly websites using a strong foundation in web development languages and frameworks.</p>
              </div>
              <Button />
              <div className={styles.social} style={{ display: "flex", marginTop: "1.4rem" }}>
                <Image src="/email.svg" alt="LinkedIn" width={35} height={35} />
                <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={35} />
                <Image src="/instagram.svg" alt="LinkedIn" width={35} height={35} />
              </div>
            </div>
          </div>
        </main>
      </m.div>
    </>
  );
}
