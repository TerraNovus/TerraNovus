import React from 'react'
import {Button} from '../ButtonElement'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2, 
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img 
} from './InfoElements'

const InfoSection = ({
    id,
    imgOnLeft,
    topLine,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    siteBg,
    siteText,
    highlightBg1,
    highlightText1,
    highlightBg2,
    highlightText2
}) => {
  return (
    <>
        <InfoContainer id={id} background={siteBg}>
            <InfoWrapper>
                <InfoRow imgOnLeft={imgOnLeft}>
                    <Column1>
                        <TopLine txtColor={highlightText2}>{topLine}</TopLine> 
                        <Heading txtColor={siteText}>{headline}</Heading>
                        <Subtitle txtColor={siteText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button 
                                to='Home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                background={highlightBg1}
                                txtcolor={highlightText1}
                                hoverbg={highlightBg2}
                                hovertxtcolor={highlightText2}
                            >
                                {buttonLabel}
                            </Button>
                        </BtnWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/> 
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection