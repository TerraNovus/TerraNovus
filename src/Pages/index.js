import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection'
import {content as infoContent} from '../Components/InfoSection/content.js'
import {
  darkHighlight,
  lightHighlight,
} from "../Theme/colors";
import InfoSection from '../Components/InfoSection'
import Services from '../Components/ServicesSection'

const Home = ({theme, getTheme}) => {
  const [heroAlpha, setHeroAlpha] = useState(0)
  const toggleHeroAlpha = () => setHeroAlpha(heroAlpha ? 0 : 0.5)

  return (
    <>
      <HeroSection 
        siteBg={theme.siteBg}
        siteText={theme.siteText}
        highlightBg={darkHighlight}
        highlightText={lightHighlight}
        hoverHighlightBg={lightHighlight}
        hoverHighlightText={darkHighlight}
        opacity={heroAlpha}
      />
      {infoContent.map((e,i) => {
        return (
          <InfoSection
            id={e.id}
            key={e.id + "-info"}
            to={e.to}
            route={e.route ? true : false}
            imgOnLeft={typeof e.imgOnLeft == "boolean" ? e.imgOnLeft : false}
            topLine={e.topLine}
            headline={e.headline}
            description={e.description}
            buttonLabel={e.buttonLabel}
            img={e.img}
            alt={e.alt}
            siteBg={
              e.background
                ? e.background
                : i % 2 == 0
                ? theme.siteBg
                : getTheme(!theme.darkMode, theme.highContrast).siteBg
            }
            siteText={
              e.txtColor
                ? e.txtColor
                : i % 2 == 0
                ? theme.siteText
                : getTheme(!theme.darkMode, theme.highContrast).siteText
            }
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