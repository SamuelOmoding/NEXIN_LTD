import React, { useContext, useState } from 'react'

const ThemeContext=React.createContext()               //create a theme context
const UpdateThemeContext=React.createContext()

export function UseTheme(){               //create custom hook for theme
    return useContext(ThemeContext)
}
export function UpdateTheme(){             //create custom hook for button
    return useContext(UpdateThemeContext)
}
//function theme
function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme]=useState(true)  //set state for the theme

    const toggleColor=()=>{       
        setDarkTheme(prevTheme=>!prevTheme)
    }
  return (
    <div>
    {/* theme providers */}
      <ThemeContext.Provider value={darkTheme}>
        <UpdateThemeContext.Provider value={toggleColor}>      
            {children}
        </UpdateThemeContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
