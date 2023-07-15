
//dark mode icon with toggle using tailwind css
import { useState, useEffect } from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const DarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [mounted, setMounted] = useState(false);
    const iconColor = useColorModeValue("black", "white");
    
    useEffect(() => setMounted(true), []);
    
    if (!mounted) return null;
    
    return (
        <div>
        <button onClick={toggleColorMode}>
            {colorMode === "light" ? (
            <MoonIcon color={iconColor} />
            ) : (
            <SunIcon color={iconColor} />
            )}
        </button>
        </div>
    );
    }

export default DarkMode

