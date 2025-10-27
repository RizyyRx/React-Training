import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
 
export default function ThemedButton() {
    const {theme,toggleTheme}=useContext(ThemeContext);
    const style={
        backgroundColor:theme==="light"?"#fff":"#333",
        color:theme==='light'?"#000":"#fff",
        padding:"10px 20px",
        border:"none",
        cursor:"pointer",
        marginTop:"20px"
    }
  return (
    <button style={style} onClick={toggleTheme}>
        Current Theme:{theme.toUpperCase()}
    </button>
  )
}
 