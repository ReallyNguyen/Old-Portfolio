import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/components/transition/Transition.module.css';

const Transition = () => {
    return (
        <>
            <motion.div
                className={styles.background_beige}
                initial={{ x: '0%', width: "100%" }}
                animate={{ x: '100%', width: "0%" }}
                exit={{ x: ['100%', "0%"], width: ["0%", "100%"] }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
                className={styles.background_brown}
                initial={{ x: '0%', width: "100%" }}
                animate={{ x: '100%', width: "0%" }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
                className={styles.background_grey}
                initial={{ x: '0%', width: "100%" }}
                animate={{ x: '100%', width: "0%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            />
        </>
    );
};

export default Transition;
