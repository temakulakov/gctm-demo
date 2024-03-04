import React, {RefObject} from 'react';
import styles from "styles/Slider.module.scss";
import VideoBackground from "./VideoBackground";

interface SliderProps {
    reference:  RefObject<HTMLDivElement>;
}

const Slider = ({ reference }: SliderProps) => {
    return <div className={styles.root} ref={reference}>
        <VideoBackground videoUrl="https://www.gctm.ru/img/promo.mp4" />
    </div>
};

export default Slider;