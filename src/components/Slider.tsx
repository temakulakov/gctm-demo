import React from 'react';
import styles from "styles/Slider.module.scss";
import VideoBackground from "./VideoBackground";

const Slider = () => {
    return <div className={styles.root}>
        <VideoBackground videoUrl="https://www.gctm.ru/img/promo.mp4" />
    </div>
};

export default Slider;