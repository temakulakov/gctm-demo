import React from 'react';
import styles from "styles/Slider.module.scss";
import VideoBackground from "./VideoBackground";

const Slider = () => {
    return <div className={styles.root}>
        <VideoBackground videoUrl="https://intranet.gctm.ru/test/promo.mp4" />
    </div>
};

export default Slider;