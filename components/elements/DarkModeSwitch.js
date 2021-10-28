import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {MoonIcon} from '@heroicons/react/solid';
import {SunIcon} from '@heroicons/react/outline'
import { motion } from "framer-motion";

export default function DarkModeSwitch() {
    const { theme, setTheme } = useTheme();
    const [enabled, setEnabled] = useState(false);

    useEffect(()=>{
        setEnabled(theme === 'dark')
    },[theme,enabled])

    const handleThemeChange = () => {
        setEnabled(enabled => !enabled)
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        animate={{opacity:[0,1],
            y:[-10,0],
            rotate:[-60,0]}}>
        <Switch
            checked={enabled}
            onChange={handleThemeChange}
            className={`${
                enabled ? "bg-gray-700 ring-gray-100 " : "bg-gray-200  ring-gray-500"
            } p-2 rounded-lg hover:ring-[2px]  flex items-center justify-center ring-opacity-80 transition-all text-gray-900 dark:text-gray-100`}
        > 
            <span className="sr-only">Dark mode toggle</span>
        
            {enabled?<SunIcon className='h-6 w-6'/>:<MoonIcon className='h-6 w-6'/>}
      
        </Switch>
        </motion.div>
    );
}
