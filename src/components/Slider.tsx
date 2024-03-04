import React, {RefObject, useEffect, useState} from 'react';
import styles from "styles/Slider.module.scss";
import VideoBackground from "./VideoBackground";
import Loader from "./Loader";
import { motion } from "framer-motion";

interface SliderProps {
    reference:  RefObject<HTMLDivElement>;
}

export interface IData {
    id: number;
    title: string;
    description: string;
    button: IButton;
    background: IBackground;
};

interface IButton {
    title: string;
    href: string;
};

interface IBackground {
    type: "video" | "image";
    href: string;
};


const data: IData[] = [
    {
        id: 0,
        title: "Пример текста 0",
        description: "Описание 0",
        button: {
            title: "Описание кнопки 0",
            href: "/"
        },
        background: {
            type: "video",
            href: "https://www.gctm.ru/img/promo.mp4"
        }
    },
    {
        id: 1,
        title: "Пример текста 1",
        description: "Описание 1",
        button: {
            title: "Описание кнопки 1",
            href: "/"
        },
        background: {
            type: "image",
            href: "https://um.mos.ru/upload/iblock/0b1/vn(8614).jpg"
        }
    },
    {
        id: 2,
        title: "Пример текста 2",
        description: "Описание 2",
        button: {
            title: "Описание кнопки 2",
            href: "/"
        },
        background: {
            type: "image",
            href: "https://office-news.ru/wp-content/uploads/2020/06/header-89.jpg"
        }
    },
    {
        id: 3,
        title: "Пример текста 3",
        description: "Описание 3",
        button: {
            title: "Описание кнопки 3",
            href: "/"
        },
        background: {
            type: "image",
            href: "https://cdnn21.img.ria.ru/images/07e4/06/16/1573303557_0:0:3072:1728_1920x0_80_0_0_ad87aee6f8ffce4928f310fc249ba5e6.jpg.webp"
        }
    },
]

const Slider = ({ reference }: SliderProps) => {
    const [progress, setProgress] = useState(0);
    const [slider, setSlider] = useState<IData>(data[0]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress(prevProgress => prevProgress + 1);
            } else {
                console.log('Значение достигло 100');
                setProgress(0);
                if (slider.id === data.length - 1) {
                    setSlider(data[0]);
                } else {
                    setSlider(prevProgress => data[prevProgress.id + 1]);
                }
            }
        }, 200); // уменьшаем интервал для инкрементации чаще
        return () => clearInterval(timer);
    }, [progress]);
    return <div className={styles.root} ref={reference}>

        <div
            onClick={() => {
                setSlider(prevProgress => {
                    if (prevProgress.id === 0) {
                        return data[data.length - 1]
                    }
                    return data[prevProgress.id - 1];
                });
            }}
            className={styles.controlsLeft}
            style={{marginLeft: "20px"}}
        >
            <svg style={{transform: 'rotate(90deg)'}} xmlns="http://www.w3.org/2000/svg" width="27px" height="27px"
                 fill="none"
                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6"></path>
            </svg>
        </div>
        <div
            onClick={() => {
                setSlider(prevProgress => {
                    if (prevProgress.id === data.length - 1) {
                        return data[0]
                    }
                    return data[prevProgress.id + 1];
                });
            }}
            className={styles.controlsLeft}
            style={{right: 0, marginRight: "20px"}}>
            <svg style={{transform: 'rotate(270deg)'}} xmlns="http://www.w3.org/2000/svg" width="27px" height="27px"
                 fill="none"
                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6"></path>
            </svg>
        </div>
        <motion.div>

        </motion.div>
        <div className={styles.indicators}>
            {
                data.map((item, index) => <Loader key={index} progress={progress}
                                                  active={item.id === slider.id ? true : false}/>)
            }
        </div>
    </div>
};

export default Slider;