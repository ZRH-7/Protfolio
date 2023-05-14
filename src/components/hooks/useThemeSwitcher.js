import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '../Icons'

function DarkSwitcher({ className }) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const preferredTheme = localStorage.getItem('theme')

        if (preferredTheme === 'dark') {
            setIsDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDarkMode])

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <button
            className={`ml-4 w-6 h-6 flex items-center justify-center rounded-full p-1 ${className} ${isDarkMode ? "bg-light text-dark" : "bg-dark text-light"}`}
            onClick={toggleDarkMode}
        >
            {
                isDarkMode ? <MoonIcon className={'fill-dark'} /> : <SunIcon className={'fill-dark'} />
            }
        </button>
    )
}

export default DarkSwitcher