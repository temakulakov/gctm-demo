import React, { useState } from 'react';
import styles from 'styles/VideoBackground.module.scss';

interface VideoBackgroundProps {
    videoUrl: string; // URL видеофайла
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl }) => {
    const [backgroundColor, setBackgroundColor] = useState<string>('black');

    // Функция для изменения цвета фона
    const changeBackgroundColor = (color: string) => {
        setBackgroundColor(color);
    };

    return (
        <div  className={styles.root}>
            <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src={videoUrl} type="video/mp4" />
                Ваш браузер не поддерживает элемент <code>video</code>.
            </video>
            {/* Пример кнопок для изменения цвета фона */}
            <div style={{ position: 'absolute', top: 0, padding: '10px' }}>
            </div>
        </div>
    );
};

export default VideoBackground;
