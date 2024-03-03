import { motion } from "framer-motion";

const VerticalLine = () => {
    return (
        <motion.div
            style={{
                width: "1.5px",
                height: "200px", // Высота начального состояния линии равна 0
                backgroundColor: "white",
            }}
            initial={{ scaleY: 0 }} // Начальное состояние: линия вытянута вдоль оси Y
            animate={{ scaleY: 1 }} // Конечное состояние: линия полностью отрисована
            transition={{ duration: 0.5 }} // Длительность анимации
        />
    );
};

export default VerticalLine;