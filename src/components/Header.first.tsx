import React, {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion"
import styles from "styles/Header.first.module.scss";
import logoWhite from "../uploads/logo-white.svg";
import useScrollPosition from "../hooks/useScrollPosition";
import {navElemenet} from "../data";
import {INavElemenet} from "../types/INavElements";


const HeaderFirst = () => {
    const [ fullWidth, setFullWidth ] = useState(true);
    const { scrollY, direction} = useScrollPosition();
    const [ selectedItem, setSelectedItem ] = useState<INavElemenet | null>(null);

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if ( scrollY < 400 ) {
            setFullWidth(true);
        }
        if ( scrollY > 400 && direction === 'down') {
            setFullWidth(false);
        }
    }, [scrollY]);

    useEffect(() => {
        if (direction === 'down' && scrollY > 400) {
            setFullWidth(true);
        }
        if (direction === 'up') {
            setFullWidth(true);
        }
    }, [direction]);

    useEffect(() => {
        console.log(direction);
        console.log(scrollY);
    }, [scrollY, direction]);

    return <>

        <motion.header className={styles.root}>
            <motion.div className={styles.header}>
                <motion.a>
                    <img src={logoWhite} alt="logo"/>
                </motion.a>
                <motion.div className={styles.buttons}>
                    <motion.button>{"Купить билет"}</motion.button>
                    <motion.button>{"Магазин"}</motion.button>

                </motion.div>
            </motion.div>
            <motion.div
                onMouseLeave={(e) => setSelectedItem(null)}
                className={styles.menu}>
                {
                    navElemenet.map((item, index) => <motion.a
                        onMouseEnter={() => item.subtitle ? setSelectedItem(item) : setSelectedItem(null)}
                        href={item.link}
                        key={index}
                    >
                        {item.title}
                    </motion.a>)
                }
            </motion.div>
                <AnimatePresence>
                    {selectedItem && <motion.div
                        ref={bottomRef}
                        key={selectedItem.title}
                        initial={{opacity: 0, width: "97%", y: 0}}
                        animate={{opacity: 1, width: "100%", y: 20}}
                        exit={{opacity: 0, width: "97%", y: 0}}
                        className={styles.panel}
                        onMouseLeave={(e) => {
                            const target = e.target as Node;
                            if (bottomRef.current && !bottomRef.current.contains(target)) {
                                setSelectedItem(null);
                            }
                        }}
                        >
                        <AnimatePresence>
                            {selectedItem && <motion.ol
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                {
                                    selectedItem.subtitle?.map((item, index) => <li key={index}>{item.title}</li>)
                                }
                            </motion.ol>}
                        </AnimatePresence>
                    </motion.div>}
                </AnimatePresence>
        </motion.header>
    </>
};


export default HeaderFirst;