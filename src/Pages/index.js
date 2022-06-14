import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import whiteLogo from '../Images/TerraNovus_logo_01_REDROSES.png'
import redLogo from '../Images/TerraNovus_logo_01_REDTEXT.png'
import {content as infoContent} from '../Components/InfoSection/content.js'
import {
  DarkTheme,
  DarkTheme_hc,
  LightTheme,
  LightTheme_hc,
  darkHighlight,
  lightHighlight,
} from "../Theme/colors";
import InfoSection from '../Components/InfoSection'
import Services from '../Components/ServicesSection'

const Home = () => {
  const getTheme = (dark, hc) =>
    dark ? (hc ? DarkTheme_hc : DarkTheme) : hc ? LightTheme_hc : LightTheme;

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [navAlpha, setNavAlpha] = useState(1)
  const [heroAlpha, setHeroAlpha] = useState(0)
  const [logo, setLogo] = useState(whiteLogo)
  const [theme, setTheme] = useState({
    darkMode: true,
    highContrast: false,
    ...getTheme(true, false)
  })

  const toggleSideBar = () => {setSidebarOpen(!sidebarOpen)}
  const toggleNavAlpha = () => {setNavAlpha(navAlpha ? 0 : 1)}
  const toggleHeroAlpha = () => {setHeroAlpha(heroAlpha ? 0 : 0.5)}
  const toggleLogo = () => {setLogo(logo == whiteLogo ? redLogo : whiteLogo)}
  const toggleDarkMode = () => {
    setTheme({
      darkMode: !theme.darkMode,
      highContrast: theme.highContrast,
      ...getTheme(!theme.darkMode, theme.highContrast),
    });
  };
  const toggleHighContrast = () => {
    setTheme({
      darkMode: theme.darkMode,
      highContrast: !theme.highContrast,
      ...getTheme(theme.darkMode, !theme.highContrast),
    });
  };

  document.getElementsByTagName('html')[0].style.background = theme.siteBg

  return (
    <>
      <Sidebar
        isOpen={sidebarOpen}
        toggle={toggleSideBar}
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
        toggle={toggleSideBar} 
        logoImg={logo} 
        siteBg={theme.siteBg} 
        siteText={theme.siteText}
        highlightBg={darkHighlight}
        highlightText={lightHighlight}
        hoverHighlightBg={lightHighlight}
        hoverHighlightText={darkHighlight}
        opacity={navAlpha}
      />
      <HeroSection 
        siteBg={theme.siteBg}
        siteText={theme.siteText}
        highlightBg={darkHighlight}
        highlightText={lightHighlight}
        hoverHighlightBg={lightHighlight}
        hoverHighlightText={darkHighlight}
        opacity={heroAlpha}
      />
      {infoContent.map(e => {
        return (
          <InfoSection
            id={e.id}
            key={e.id + "-info"}
            imgOnLeft={typeof e.imgOnLeft == "boolean" 
              ? e.imgOnLeft : false}
            topLine={e.topLine}
            headline={e.headline}
            description={e.description}
            buttonLabel={e.buttonLabel}
            img={e.img}
            alt={e.alt}
            siteBg={theme.siteBg}
            siteText={theme.siteText}
            highlightBg1={darkHighlight}
            highlightText1={lightHighlight}
            highlightBg2={lightHighlight}
            highlightText2={darkHighlight}
          />
        );})}
        <Services
          siteBg={theme.siteBg} 
          siteText={theme.siteText}
          elementBg={theme.elementBg}
          elementText={theme.elementText}
          highlightBg1={darkHighlight}
          highlightText1={lightHighlight}
          highlightBg2={lightHighlight}
          highlightText2={darkHighlight}
        />
    </>
  );
}

export default Home