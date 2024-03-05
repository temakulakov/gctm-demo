import React, {useEffect, useRef, useState} from 'react';
import styles from "styles/App.module.scss"
import Header from "./components/Header";
import Slider from "./components/Slider";
import SliderNew from "components/Slider.new";
import HeaderFirst from "./components/Header.first";
import HeaderSecond from "./components/Header.second";

import { motion } from "framer-motion";

import c1 from "uploads/mvp/с1.png";
import c2 from "uploads/mvp/с2.png";
import concept from "uploads/concept.png";



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
        {/*<SliderNew />*/}
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -10 }}
        >
            <motion.img src={concept} style={{marginTop: "25px"}}/>

            {/*<img src={c1}/>*/}
            {/*<img src={c2}/>*/}
        </motion.div>
    </div>
  );
}

export default App;