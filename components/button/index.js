import React from 'react';
import { useState } from 'react';
import styles from '@/components/button/Button.module.css'

export default function Button() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            className={styles.button}
            style={{
                margin: '8rem 0 0 0',
                width: '20%',
                height: '5rem',
                backgroundColor: isHovered ? 'var(--beige-hover)' : 'var(--beige)',
                fontFamily: 'var(--Montserrat-Bold)',
                fontWeight: '550',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: isHovered
                    ? '0 4px 8px rgba(0, 0, 0, 0.3)'
                    : '0 2px 4px rgba(0, 0, 0, 0.2)',
                // Additional style for text color on hover
                color: isHovered ? 'var(--beige)' : 'initial',
                border: '4px solid var(--beige)'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2>Get in Touch</h2>
        </button>
    );
};
