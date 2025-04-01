import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        screenWidth: typeof window !== "undefined" ? window.innerWidth : 0,
        screenHeight: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setScreenSize({
                    screenWidth: window.innerWidth,
                    screenHeight: window.innerHeight,
                });
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return screenSize;
};

export default useScreenSize;