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
      <Transition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.6, ease: "easeInOut" }}
      >
        <main className={styles.main}>
          <Navbar />
          <div style={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap' }}>
              <p style={{ fontSize: '45px', margin: 0 }}>Hello, I am Jordan Nguyen</p>
              <hr style={{ width: '10%', border: 'none', borderTop: '3px solid var(--white)', margin: '20px 0' }} />
              <div style={{ display: 'flex', textAlign: 'left' }}>
                <p style={{ fontSize: '25px', margin: 0 }}>Passionate&nbsp;</p>
                <h2 style={{ fontSize: '25px', margin: 0, fontWeight: '700' }}>
                  <Typewriter
                    options={{
                      strings: ["Web Developer", "UI/UX Designer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
              </div>
              <button style={{ margin: '10rem 0 0 0', width: '40%', height: '5rem', backgroundColor: 'var(--beige)', fontFamily: 'var(--Montserrat-Bold)', fontWeight: '550', fontSize: '15px', transition: 'all 0.3s ease' }}
                onClick={handleButtonClick}>
                <h2>Get in Touch</h2>
              </button>
            </div>
            <div style={{ width: '450px', height: '450px', borderRadius: '50%', backgroundColor: 'red' }}></div>
          </div>
        </main>
      </m.div>
    </>
  );
}
