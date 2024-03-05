import React, {RefObject, useEffect, useState} from 'react';
import styles from "styles/Slider.module.scss";
import VideoBackground from "./VideoBackground";
import Loader from "./Loader";
import {AnimatePresence, motion} from "framer-motion";

import  slider2  from "uploads/sliders/slider2.jpg"
import  slider3  from "uploads/sliders/slider3.jpg"
import  slider4  from "uploads/sliders/slider4.webp"

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
            href: slider2
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
            href: slider3
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
            href: slider4
        }
    },
];



const Slider = ({reference}: SliderProps) => {
    const [progress, setProgress] = useState(0);
    const [slider, setSlider] = useState<IData>(data[0]);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const sliderrs  = [
        <motion.div
            style={{
                position: 'relative',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
            initial={{opacity: 1, x: direction === 'right' ? -440 : 440}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 1, x: direction === 'right' ? 440 : -440}}
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
        >
            <motion.video
                autoPlay
                loop
                muted
                style={{
                    zIndex: 1,
                    position: 'absolute',
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <source src="https://www.gctm.ru/img/promo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </motion.video>
        </motion.div>,
        <motion.div
            key={data[1].id}
            initial={{opacity: 1, x: direction === 'right' ? '100%' : '-100%'}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 1, x: direction === 'right' ? '-100%' : '100%'}}
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
            style={{
                position: 'relative',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                backgroundImage: `url(${data[1].background.href})`,
                backgroundSize: 'cover'
            }}
        >
            <div className={styles.slider} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}>
                <div>
                    <h1>{data[1].title}</h1>
                    <h3>{data[1].description}</h3>
                    <a href={data[1].button.href}>{data[1].button.title}</a>
                </div>
            </div>
        </motion.div>,
        <motion.div
            key={data[2].id}
            initial={{opacity: 1, x: direction === 'right' ? '100%' : '-100%'}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 1, x: direction === 'right' ? '-100%' : '100%'}}
            style={{
                position: 'relative',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                backgroundImage: `url(${data[2].background.href})`,
                backgroundSize: 'cover'
            }}
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
        >
            <div className={styles.slider} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}>
                <div>
                    <h1>{data[2].title}</h1>
                    <h3>{data[2].description}</h3>
                    <a href={data[2].button.href}>{data[2].button.title}</a>
                </div>
            </div>
        </motion.div>,
        <motion.div
            key={data[3].id}
            initial={{opacity: 1, x: direction === 'right' ? '100%' : '-100%'}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 1, x: direction === 'right' ? '-100%' : '100%'}}
            style={{
                position: 'relative',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                backgroundImage: `url(${data[3].background.href})`,
                backgroundSize: 'cover'
            }}
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
        >
            <div className={styles.slider} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}>
                <div>
                    <h1>{data[3].title}</h1>
                    <h3>{data[3].description}</h3>
                    <a href={data[3].button.href}>{data[3].button.title}</a>
                </div>
            </div>
        </motion.div>,
    ]

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
                setDirection('left');
                setSlider(prevProgress => {
                    if (prevProgress.id === 0) {
                        return data[data.length - 1]
                    }
                    return data[prevProgress.id - 1];
                });
                setProgress(0);
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
                setDirection('right');

                setSlider(prevProgress => {
                    if (prevProgress.id === data.length - 1) {
                        return data[0]
                    }
                    return data[prevProgress.id + 1];
                });
                setProgress(0);
            }
        }
            className={styles.controlsLeft}
            style={{right: 0, marginRight: "20px"}}>
            <svg style={{transform: 'rotate(270deg)'}} xmlns="http://www.w3.org/2000/svg" width="27px" height="27px"
                 fill="none"
                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                 viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6"></path>
            </svg>
        </div>

        {
            sliderrs[slider.id]
        }

        <div className={styles.indicators}>
            {
                data.map((item, index) => <Loader key={index} keyy={index} progress={progress}
                                                  active={item.id === slider.id ? true : false} slider={slider}/>)
            }
        </div>
    </div>
};

export default Slider;