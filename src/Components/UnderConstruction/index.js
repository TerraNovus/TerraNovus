import React from 'react'
import underConstruction from '../../Images/Under_Construction_WhiteText_01.png'
import Video from '../../Videos/HeroVideo1 - Red Compressed.m4v'
import {
  ConstructionContainer,
  ConstructionBg,
  VideoBg,
  ConstructionContent,
  ConstructionImg,
} from "./ConstructionElements";

const UnderConstruction = ({background}) => {
  return (
    <ConstructionContainer background={background}>
      <ConstructionBg>
        <VideoBg
          background={background}
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </ConstructionBg>
      <ConstructionContent>
        <ConstructionImg
          src={underConstruction}
          alt="Under Constructon"
          aria-label="Under Construction"
        />
      </ConstructionContent>
    </ConstructionContainer>
  );
}

export default UnderConstruction