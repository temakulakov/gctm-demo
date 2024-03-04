import React, {useEffect, useRef, useState} from 'react';
import styles from "styles/App.module.scss"
import Header from "./components/Header";
import Slider from "./components/Slider";
import HeaderFirst from "./components/Header.first";
import HeaderSecond from "./components/Header.second";

import { motion } from "framer-motion";

function App() {
    const bottomRef = useRef<HTMLDivElement>(null);
    const [bottomPosition, setBottomPosition] = useState<number>(0);
    const [ scolled, setScolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (bottomRef.current) {
                const rect = bottomRef.current.getBoundingClientRect();
                const bottomPosition = rect.bottom;
                setBottomPosition(bottomPosition);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log("--")
        console.log(bottomPosition)
        if (bottomPosition > 100) {
            setScolled(false);
        } else {
            setScolled(true);
        }
    }, [bottomPosition]);
  return (
    <div className={styles.root}>
        <HeaderSecond scrolled={scolled}/>
        <Slider reference={bottomRef}/>
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -10 }}
        >
            <h1>Текст текст текст</h1>
            <p>Little маленький Текст текст текст</p>
        </motion.div>
    </div>
  );
}

export default App;
