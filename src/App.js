import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route,useLocation } from "react-router-dom";
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import routingData from './Pages/RoutingData';
import whiteLogo from './Images/TerraNovus_logo_01_REDROSES.png'
import redLogo from './Images/TerraNovus_logo_01_REDTEXT.png'
import {
  DarkTheme,
  DarkTheme_hc,
  LightTheme,
  LightTheme_hc,
} from "./Theme/colors";
import Footer from './Components/Footer';

function App() {
  const location = useLocation();
  
  useEffect(() => {window.scrollTo(0,0)}, [location])
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
    ...getTheme(theme.darkMode, !theme.highContrast),
  })

  const excludeNav = routingData.filter(e => e.excludeNav && true)
  .map(e => e.path)
  const excludeFooter = routingData.filter(e => e.excludeFooter && true)
  .map(e => e.path)

  document.getElementsByTagName('html')[0].style.background = theme.siteBg

  return (
    <>
      <Sidebar
        exclude={excludeNav.includes(location.pathname)}
        isOpen={sidebarOpen}
        toggle={toggleSidebar}
        siteBg={theme.siteBg}
        siteText={theme.siteText}
        elementBg={theme.elementBg}
        elementText={theme.elementText}
        highlightBg={theme.darkHighlight}
        highlightText={theme.lightHighlight}
        hoverHighlightBg={theme.lightHighlight}
        hoverHighlightText={theme.darkHighlight}
      />
      <Navbar
        exclude={excludeNav.includes(location.pathname)}
        toggle={toggleSidebar}
        logoImg={logo}
        siteBg={theme.siteBg}
        siteText={theme.siteText}
        highlightBg={theme.darkHighlight}
        highlightText={theme.lightHighlight}
        hoverHighlightBg={theme.lightHighlight}
        hoverHighlightText={theme.darkHighlight}
        opacity={navAlpha}
      />
      <Routes>
        {routingData.map(e => (
          <Route
            key={`${e.id}-route`}
            path={e.path}
            element={e.getElement({theme,getTheme})}
            exact
          />
        ))}
      </Routes>
      <Footer
        exclude={excludeFooter.includes(location.pathname)}
        siteBg={theme.siteBg}
        siteText={theme.siteText}
        elementBg={theme.elementBg}
        elementText={theme.elementText}
        highlightBg={theme.darkHighlight}
        highlightText={theme.lightHighlight}
        hoverHighlightBg={theme.lightHighlight}
        hoverHighlightText={theme.darkHighlight}
      />
    </>
  );
}

export default App;
