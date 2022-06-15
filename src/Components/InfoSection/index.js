import React from 'react'
import RouteButton from '../RouteButton'
import ScrollButton from '../ScrollButton'
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
    to,
    route,
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

    var buttonElement = route ?
        (
            <RouteButton
                to={to}
                smooth='true'
                duration={500}
                spy='true'
                exact='true'
                offset={-80}
                background={highlightBg1}
                txtcolor={highlightText1}
                hoverbg={highlightBg2}
                hovertxtcolor={highlightText2}
            >
                {buttonLabel}
            </RouteButton>
        ) :
        (
            <ScrollButton
                to={to}
                smooth='true'
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
            </ScrollButton>
        )

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
                                {buttonElement}
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