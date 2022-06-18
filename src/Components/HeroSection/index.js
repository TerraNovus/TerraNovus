import React, {useState} from 'react'
import Video from '../../Videos/HeroVideo1 - Red Compressed.m4v'
import Button from '../ScrollButton'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    HeroSubtitle,
    ArrowForward,
    ArrowRight
} from './HeroElements.js'

const HeroSection = ({
    siteBg,
    siteText,
    highlightBg,
    highlightText,
    hoverHighlightBg,
    hoverHighlightText,
    opacity
}) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {setHover(!hover)}

    return (
      <HeroContainer background={siteBg}>
        <HeroBg>
          <VideoBg
            background={siteBg}
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent background={siteBg} opacity={opacity}>
          <HeroH1 txtColor={siteText}>Terra Novus</HeroH1>
          <HeroSubtitle txtColor={siteText}>
            Simple and Clean Website Solutions
          </HeroSubtitle>
          <HeroP txtColor={siteText}>
            Contact me to get your new website up and running today.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              background={highlightBg}
              txtcolor={highlightText}
              hoverbg={hoverHighlightBg}
              hovertxtcolor={hoverHighlightText}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
}

export default HeroSection