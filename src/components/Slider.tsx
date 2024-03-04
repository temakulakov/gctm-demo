import React, {RefObject} from 'react';
import styles from "styles/Slider.module.scss";
import VideoBackground from "./VideoBackground";

interface SliderProps {
    reference:  RefObject<HTMLDivElement>;
}

const Slider = ({ reference }: SliderProps) => {
    return <div className={styles.root} ref={reference}>
        <div className={styles.controls}>
            <svg style={{transform: 'rotate(90deg)'}} xmlns="http://www.w3.org/2000/svg" width="27px" height="27px"
                 fill="none"
                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6"></path>
            </svg>
        </div>
        <div className={styles.controls}>
            <svg style={{transform: 'rotate(270deg)'}} xmlns="http://www.w3.org/2000/svg" width="27px" height="27px"
                 fill="none"
                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6"></path>
            </svg>
        </div>
        <div className={styles.loader}></div>
    </div>
};

export default Slider;