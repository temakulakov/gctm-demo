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
            initial={{y: 10, opacity: 0, width: '97%'}}
            animate={{y: 23, opacity: 1, width: '100%'}}
            exit={{y: 10, opacity: 0, width: '97%'}}
            className={styles.wrapper}
        >
            <motion.div
                className={styles.panel}
                style={{backgroundColor: background}}
            >
                <div style={{display: 'flex'}}>
                    <ul>
                        {
                            selectedMenu && selectedMenu.subTitle?.map((subTitle, index) => <li
                                onMouseEnter={() => {
                                    if (selectedMenu && selectedMenu.subTitle && subTitle && subTitle.subTitle) {
                                        setSelectedPanelMenu(selectedMenu.subTitle[index]);
                                    }
                                }}
                                key={index}
                            >{subTitle.title}</li>)
                        }
                    </ul>

                    <AnimatePresence>
                        {selectedPanelMenu && selectedPanelMenu.subTitle && <>
                            <VerticalLine/>

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
                        </>
                        }
                    </AnimatePresence>
                </div>

                <div>

                        {
                            !selectedSecondMenu  && selectedPanelMenu && selectedPanelMenu.imageUrl && <motion.img
                                initial={{y: -10, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: -10, opacity: 0}}
                                key={selectedPanelMenu.title}
                                src={selectedPanelMenu.imageUrl}/>
                        }
                        {
                            selectedSecondMenu && selectedSecondMenu.imageUrl &&
                            <motion.img
                                initial={{y: -10, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: -10, opacity: 0}}
                                transition={{ stiffness: 0.1}}
                                key={selectedSecondMenu.title}
                                src={selectedSecondMenu.imageUrl}/>
                        }
                </div>

            </motion.div>
        </motion.div>}
    </AnimatePresence>
};

export default Panel;