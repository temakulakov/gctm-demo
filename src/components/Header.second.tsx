import React, {useEffect} from "react";
import styles from "styles/Header.second.module.scss";
import {AnimatePresence, motion} from "framer-motion";

import BMLogoLeft from "uploads/logo/BMLogoLeft.svg";
import BMLogoLine from "uploads/logo/BMLogoLine.svg";
import BMLogoRight from "uploads/logo/BMLogoRight.svg";
import BMText from "uploads/logo/BMText.svg";

import { navElemenet } from "../data";
import {INavElemenet} from "../types/INavElements";
import Panel from "./Panel";
import useScrollPosition from "../hooks/useScrollPosition";

interface HeaderProps {
    scrolled: boolean
}

const Header = ({scrolled} :HeaderProps) => {
    const [ fullHead, setFullHead ] = React.useState<boolean>(true);
    const [ background, setBackground ] = React.useState<'#8A1635' | 'rgba(138,22,53,0.52)'>('rgba(138,22,53,0.52)');
    const [ selectedMenu, setSelectedMenu ] = React.useState<INavElemenet | null>(null);
    const { scrollY, direction} = useScrollPosition();

    useEffect(() => {
        if (scrolled && direction !== 'UP') {
            setFullHead(false);
            setSelectedMenu(null);
        } else {
            setFullHead(true);
        }

        if (scrolled) {
            setBackground('#8A1635');
        } else {
            setBackground('rgba(138,22,53,0.52)');
        }
    }, [scrollY]);



    return <React.Fragment>
        <motion.div className={styles.header}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >
            <motion.div
                onMouseEnter={() => setFullHead(true)}
                className={styles.head}
                style={fullHead ? {borderRadius: "5px 5px 0 0", backgroundColor: background} : {borderRadius: "5px", backgroundColor: background}}>
                <motion.a className={styles.logoWrapper}>
                    <motion.img
                        initial={{opacity: 0, x: 30}}
                        animate={{opacity: 1, x: 0}}
                        src={BMLogoLeft}
                        alt="BMLogoLeft"
                        draggable={false}
                    />
                    <motion.img
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        src={BMLogoLine}
                        alt="BMLogoLine"
                        draggable={false}
                    />
                    <motion.img
                        initial={{opacity: 0, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        src={BMLogoRight}
                        alt="BMLogoRight"
                        draggable={false}
                    />
                    <motion.img
                        className={styles.stylesLogo}
                        initial={{opacity: 0, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        src={BMText}
                        alt="BMText"
                        draggable={false}
                    />
                </motion.a>
                <motion.div
                    className={styles.buttonGroup}>
                    <motion.button>{"Купить билет"}</motion.button>
                    <motion.button>{"Магазин"}</motion.button>
                </motion.div>
            </motion.div>
            <AnimatePresence>
                {
                    fullHead && <motion.div className={styles.menu}
                                            initial={{opacity: 1, y: -30}}
                                            animate={{opacity: 1, y: -0.1}}
                                            exit={{opacity: 1, y: -30}}
                                            transition={{ type: "tween", duration: 0.2 }}
                                            style={{backgroundColor: background, zIndex: -1}}
                                            onMouseLeave={() => setSelectedMenu(null)}
                    >
                        {
                            navElemenet && navElemenet.map((item, index) => <a
                                onMouseEnter={() => item.subTitle ? setSelectedMenu(item) : setSelectedMenu(null)}
                                key={index}
                                href={"#"}>
                                {item.title}
                            </a>)
                        }
                        <Panel selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} background={background}/>
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    </React.Fragment>
};

export default Header;