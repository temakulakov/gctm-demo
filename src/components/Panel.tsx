import React, {useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styles from "styles/Panel.module.scss"
import {INavElemenet} from "../types/INavElements";
import VerticalLine from "./VerticaleLine";

interface PanelProps {
    selectedMenu: INavElemenet | null;
    setSelectedMenu: React.Dispatch<React.SetStateAction<INavElemenet | null>>;
    background: string;
}

const Panel = ({selectedMenu, setSelectedMenu, background}: PanelProps) => {
    const [selectedPanelMenu, setSelectedPanelMenu] = React.useState<INavElemenet | null>(null);
    const [selectedSecondMenu, setSelectedSecondMenu] = React.useState<INavElemenet | null>(null);

    useEffect(() => {
        if (selectedMenu) {
            if (selectedMenu.subTitle && selectedMenu.subTitle.length > 0) {
                // Предполагая, что вы хотите выбрать первый подзаголовок здесь
                setSelectedPanelMenu(selectedMenu.subTitle[0]);
            } else {
                setSelectedPanelMenu(null); // Если подзаголовков нет, устанавливаем null
            }
        } else {
            setSelectedPanelMenu(null); // Если selectedMenu null, устанавливаем null
        }
    }, [selectedMenu]);

    useEffect(() => {
        // console.log(selectedPanelMenu);
    }, [selectedPanelMenu]);

    return <AnimatePresence>
        {selectedMenu && <motion.div
            onMouseLeave={() => {
                setSelectedPanelMenu(null)
                setSelectedSecondMenu(null)
            }}
            key={selectedMenu.title}

            initial={{y: 27, opacity: 0, width: '95%'}}
            animate={{y: 33, opacity: 1, width: '100%'}}
            exit={{y: 27, opacity: 0, width: '95%'}}
            className={styles.wrapper}
        >
            <motion.div
                className={styles.panel}
                style={{backgroundColor: background === '#8A1635' ? background : '#6C192B'}}
            >
                <div className={styles.content}>
                    <ul>
                        {
                            selectedMenu && selectedMenu.subTitle?.map((subTitle, index) => <li
                                onMouseEnter={() => {
                                    if (selectedMenu && selectedMenu.subTitle && subTitle && subTitle.subTitle) {
                                        setSelectedPanelMenu(selectedMenu.subTitle[index]);
                                    }
                                }}
                                key={index}
                            >{subTitle.title}
                                {
                                    subTitle.subTitle &&
                                    <svg style={{transform: 'rotate(270deg)'}} xmlns="http://www.w3.org/2000/svg"
                                         width="14px" height="19px" fill="none"
                                         stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                         viewBox="0 0 24 24">
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                }
                            </li>)
                        }
                    </ul>

                    <AnimatePresence>
                        {selectedPanelMenu && selectedPanelMenu.subTitle && <>
                            <VerticalLine background={"white"}/>
                        </>
                        }
                    </AnimatePresence>
                </div>
                <div className={styles.content}>
                    <motion.ul
                        initial={{y: -10, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: -10, opacity: 0}}
                    >
                        {
                            selectedPanelMenu && selectedPanelMenu.subTitle?.map((subTitle, index) => {
                                console.log(subTitle);

                                return <li key={index}
                                           onMouseEnter={() => setSelectedSecondMenu(subTitle)}
                                           onMouseLeave={() => setSelectedSecondMenu(null)}
                                >{subTitle.title}</li>
                            })
                        }
                    </motion.ul>
                </div>

                    <div>

                        {/*{*/}
                        {/*    !selectedSecondMenu && selectedPanelMenu && selectedPanelMenu.imageUrl && <motion.img*/}
                        {/*        initial={{y: -10, opacity: 0}}*/}
                        {/*        animate={{y: 0, opacity: 1}}*/}
                        {/*        exit={{y: -10, opacity: 0}}*/}
                        {/*        key={selectedPanelMenu.title}*/}
                        {/*        src={selectedPanelMenu.imageUrl}/>*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    selectedSecondMenu && selectedSecondMenu.imageUrl &&*/}
                        {/*    <motion.img*/}
                        {/*        initial={{y: -10, opacity: 0}}*/}
                        {/*        animate={{y: 0, opacity: 1}}*/}
                        {/*        exit={{y: -10, opacity: 0}}*/}
                        {/*        transition={{stiffness: 0.1}}*/}
                        {/*        key={selectedSecondMenu.title}*/}
                        {/*        src={selectedSecondMenu.imageUrl}/>*/}
                        {/*}*/}
                    </div>

                {
                    !selectedSecondMenu && selectedPanelMenu && selectedPanelMenu.imageUrl &&
                    <motion.div
                        className={styles.preview}
                        initial={{opacity: 0, y: -10}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: 10, opacity: 0}}
                        key={selectedPanelMenu?.title}
                    >
                        <div>
                            <h2>{selectedPanelMenu?.title}</h2>
                            <p>{selectedPanelMenu?.description}</p>
                            <button>{"Узнать подробнее"}</button>
                        </div>
                        <img src={selectedPanelMenu?.imageUrl} alt={selectedPanelMenu?.title}/>
                    </motion.div>
                }
                {
                    selectedSecondMenu && selectedSecondMenu.imageUrl &&
                <motion.div
                    className={styles.preview}
                    initial={{opacity: 0, y: -10}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: 10, opacity: 0}}
                    key={selectedSecondMenu?.title}
                >
                    <div>
                        <h2>{selectedSecondMenu?.title}</h2>
                        <p>{selectedSecondMenu?.description}</p>
                        <button>{"Узнать подробнее"}</button>
                    </div>
                    <img src={selectedSecondMenu?.imageUrl} alt={selectedSecondMenu?.title}/>
                </motion.div>
                }

            </motion.div>
        </motion.div>}
    </AnimatePresence>
};

export default Panel;