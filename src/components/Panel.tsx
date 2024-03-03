import React, {useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styles from "styles/Panel.module.scss"
import {INavElemenet} from "../types/INavElements";

interface PanelProps {
    selectedMenu: INavElemenet | null;
    setSelectedMenu: React.Dispatch<React.SetStateAction<INavElemenet | null>>;
    background: string;
}

const Panel = ({selectedMenu, setSelectedMenu, background}: PanelProps) => {
    const [ selectedPanelMenu, setSelectedPanelMenu ] = React.useState<INavElemenet | null>(null);

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
        console.log(selectedPanelMenu);
    }, [selectedPanelMenu]);

    return <AnimatePresence>
        { selectedMenu && <motion.div
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
                <ul>
                    {
                        selectedMenu && selectedMenu.subTitle?.map((subTitle, index) => <li
                            key={index}>{subTitle.title}</li>)
                    }
                </ul>

                <ul>
                    {
                        selectedPanelMenu && <h1>{selectedPanelMenu.title}</h1>
                    }
                </ul>
            </motion.div>
        </motion.div>}
    </AnimatePresence>
};

export default Panel;