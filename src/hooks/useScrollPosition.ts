import { useState, useEffect } from 'react';

type ScrollDirection = 'UP' | 'DOWN' | null;

interface ScrollData {
    scrollY: number;
    direction: ScrollDirection;
}

const useScrollPosition = (): ScrollData => {
    const [scrollData, setScrollData] = useState<ScrollData>({ scrollY: 0, direction: null });

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollPosition = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? 'DOWN' : 'UP';

            setScrollData({
                scrollY,
                direction: scrollY === lastScrollY ? null : direction,
            });

            lastScrollY = scrollY <= 0 ? 0 : scrollY; // Reset to 0 when at the top to avoid negative values
        };

        window.addEventListener('scroll', updateScrollPosition, { passive: true });

        return () => window.removeEventListener('scroll', updateScrollPosition);
    }, []);

    return scrollData;
};

export default useScrollPosition;
