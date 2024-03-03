import React, {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion"
import styles from "styles/Header.first.module.scss";
import logoWhite from "uploads/BMLogoWhite.svg";
import logoText from "uploads/logo/BMText.svg"
import useScrollPosition from "../hooks/useScrollPosition";
import {navElemenet} from "../data";
import {INavElemenet} from "../types/INavElements";


const HeaderFirst = () => {
    const [fullWidth, setFullWidth] = useState(true);
    const {scrollY, direction} = useScrollPosition();
    const [hover, setHover] = useState(false);
    const [selectedItem, setSelectedItem] = useState<INavElemenet | null>(navElemenet[6]);
    const [selectedBottom, setSelectedBottom] = useState<INavElemenet[] | null>(null);
    const [isPanelAnimating, setIsPanelAnimating] = useState(false); // Состояние для отслеживания анимации panel

    const bottomRef = useRef<HTMLDivElement>(null);
    const zalupaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollY < 400) {
            setFullWidth(true);
        }
        if (scrollY > 400 && direction === 'DOWN') {
            setFullWidth(false);
        }
    }, [scrollY]);

    useEffect(() => {
        if (direction === 'DOWN' && scrollY > 400) {
            setFullWidth(true);
        }
        if (direction === 'UP') {
            setFullWidth(true);
        }
    }, [direction]);



    useEffect(() => {
        if (selectedItem && Array.isArray(selectedItem?.subTitle)) {
            const containsArrays = selectedItem?.subTitle.some(item => Array.isArray(item?.subTitle));
            if (containsArrays) {
                setSelectedBottom(selectedItem.subTitle)
            } else {
                setSelectedBottom(null)
            }
        }
    }, [selectedItem]);

    return <>
        <motion.header className={styles.root}>
            <motion.div className={styles.header}>
                <motion.a className={styles.logo}>
                    <motion.img
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        src={logoWhite}
                        alt="logo"
                    />
                    <motion.img
                        initial={{opacity: 0, width: "97%", x: -10}}
                        animate={{opacity: 1, width: "100%", x: 10}}
                        src={logoText}
                        alt={"logo-text"}
                    />
                </motion.a>
                <motion.div className={styles.buttons}>
                    <motion.button>{"Купить билет"}</motion.button>
                    <motion.button>{"Магазин"}</motion.button>

                </motion.div>
            </motion.div>
            <motion.div
                onMouseLeave={(e) => {
                    // Игнорирование сброса selectedItem во время анимации panel

                    setTimeout(() => {
                        if (!hover) {
                            setSelectedItem(null)
                        }
                    }, 1000)
                }}
                className={styles.menu}>
                {
                    navElemenet.map((item, index) => <motion.a
                        onMouseEnter={() => item.subTitle ? setSelectedItem(item) : setSelectedItem(null)}
                        href={item.link}
                        key={index}
                    >
                        {item.title}
                    </motion.a>)
                }
            </motion.div>
            <div className={styles.zalupa} ref={zalupaRef} onMouseEnter={() => {
                setSelectedItem(prevState => prevState);
                setHover(true);
            }}></div>
            <AnimatePresence>
                {selectedItem && <motion.div
                    ref={bottomRef}
                    key={selectedItem.title}
                    initial={{opacity: 0, width: "97%", y: -10}}
                    animate={{opacity: 1, width: "100%", y: 10}}
                    exit={{opacity: 0, width: "97%", y: -10}}
                    className={styles.panel}
                    onMouseEnter={() => {
                        setSelectedItem(prevState => prevState);
                        setHover(true);
                    }}
                    onMouseLeave={(e) =>  {
                        setSelectedItem(null);
                        setHover(false);
                    }}
                    onAnimationStart={() => setIsPanelAnimating(true)} // Устанавливаем состояние при начале анимации
                    onAnimationComplete={() => setIsPanelAnimating(false)} // Сбрасываем состояние после завершения анимации
                >
                    <AnimatePresence>
                        {selectedItem && <>
                            <motion.ol
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                {
                                    selectedItem.subTitle?.map((item, index) => <li key={index} onMouseEnter={() => setSelectedBottom((prevState) => item.subTitle ? item.subTitle : prevState)}>{item.title}</li>)
                                }
                            </motion.ol>
                            <motion.ol
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                {
                                    selectedBottom && selectedBottom.map((item, index) => <li  key={index}>{item.title}</li>)
                                }
                            </motion.ol>
                        </>}
                    </AnimatePresence>
                </motion.div>}
            </AnimatePresence>
        </motion.header>
    </>
};

export default HeaderFirst;
