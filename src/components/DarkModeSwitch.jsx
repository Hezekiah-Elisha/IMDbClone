"use client"
import { MdLightMode, MdDarkMode} from "react-icons/md";
import { useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div>
            {
                mounted && currentTheme === "dark" ? (
                    <MdLightMode
                        className="cursor-pointer text-2xl text-white hover:text-amber-500"
                        onClick={() => setTheme('light')}
                    />
                ) : (
                    <MdDarkMode
                        className="cursor-pointer text-2xl text-black hover:text-amber-500"
                        onClick={() => setTheme('dark')}
                    />
                )
            }
        </div>
    );
}