import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/'
import Portfolio from './Pages/portfolio';
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import whiteLogo from './Images/TerraNovus_logo_01_REDROSES.png'
import redLogo from './Images/TerraNovus_logo_01_REDTEXT.png'
import {
  DarkTheme,
  DarkTheme_hc,
  LightTheme,
  LightTheme_hc,
  darkHighlight,
  lightHighlight,
} from "./Theme/colors";

function App() {
  const getTheme = (dark, hc) =>
    dark ? (hc ? DarkTheme_hc : DarkTheme) : hc ? LightTheme_hc : LightTheme;

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [navAlpha, setNavAlpha] = useState(1)
  const [logo, setLogo] = useState(whiteLogo)
  const [theme, setTheme] = useState({
    darkMode: true,
    highContrast: false,
    ...getTheme(true,false)
  })

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleNavAlpha = () => setNavAlpha(navAlpha ? 0 : 1)
  const toggleLogo = () => setLogo(logo == whiteLogo ? redLogo : whiteLogo) 
  const darkMode = () => setTheme({
    darkMode: !theme.darkMode,
    highContrast: theme.highContrast,
    ...getTheme(!theme.darkMode, theme.highContrast)
  })
  const toggleHighContrast = () => setTheme({
    darkMode: theme.darkMode,
    highContrast: !theme.highContrast,
    ...getTheme(theme.darkMode, !theme.highContrast)
  })

  document.getElementsByTagName('html')[0].style.background = theme.siteBg

  return (
    <Router className="App">
      <Sidebar isOpen={sidebarOpen}
        toggle={toggleSidebar}
        siteBg={theme.siteBg}
        siteText={theme.siteText}
        elementBg={theme.elementBg}
        elementText={theme.elementText}
        highlightBg={darkHighlight}
        highlightText={lightHighlight}
        hoverHighlightBg={lightHighlight}
        hoverHighlightText={darkHighlight}
      />
      <Navbar 
        toggle={toggleSidebar} 
        logoImg={logo} 
        siteBg={theme.siteBg} 
        siteText={theme.siteText}
        highlightBg={darkHighlight}
        highlightText={lightHighlight}
        hoverHighlightBg={lightHighlight}
        hoverHighlightText={darkHighlight}
        opacity={navAlpha}
      />
      <Routes>
        <Route path='/' element={<Home theme={theme} getTheme={getTheme}/>} exact />
        <Route path='/portfolio' element={<Portfolio />} exact />
      </Routes>
    </Router>
  );
}

export default App;
