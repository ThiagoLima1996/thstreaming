
import { MdDarkMode, MdLightMode } from "react-icons/md";
import React from 'react'
import { useTheme } from "../hooks/useTheme";

function DarkMode() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <p className="font-bold text-3xl dark:text-white">teste</p>
            {theme === "ligth" ? (
                <MdDarkMode
                    size={30}
                    className=" cursor-pointer"
                    onClick={() => setTheme("dark")} />
            ) : (
                <MdLightMode
                    size={30}
                    className=" cursor-pointer text-white"
                    onClick={() => setTheme("ligth")} />
            )}

        </div>
    )
}

export default DarkMode