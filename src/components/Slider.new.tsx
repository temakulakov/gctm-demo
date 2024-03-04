import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
    id: number;
    content: React.ReactNode;
}

interface SliderProps {
    slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            setElapsedTime(0);
        }, 20000);

        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setElapsedTime((prev) => prev + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [elapsedTime]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setElapsedTime(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
        setElapsedTime(0);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <AnimatePresence initial={false} custom={currentSlide}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute', width: '100%', height: '100%' }}
                >
                    {slides[currentSlide].content}
                </motion.div>
            </AnimatePresence>

            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '0',
                }}
            >
                <button onClick={prevSlide}>Prev</button>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '0',
                }}
            >
                <button onClick={nextSlide}>Next</button>
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '0',
                    right: '0',
                    height: '5px',
                    backgroundColor: '#ccc',
                }}
            >
                <motion.div
                    style={{
                        height: '100%',
                        backgroundColor: '#007bff',
                        width: `${(elapsedTime / 20) * 100}%`,
                    }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 20 - elapsedTime, ease: 'linear' }}
                />
            </div>
        </div>
    );
};

export default Slider;
