import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import hexRgb from 'hex-rgb'

export const HeroContainer = styled.div`
    display: flex;
    background: ${props => props.background};
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    //ad :before styles
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            transparent
        );
        z-index: 2;
    }
`

  export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: ${props => props.background};
`

export const HeroContent = styled.div`
    z-index: 3;
    // width: 95%;
    border-radius: 20px;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({background,opacity}) => hexRgb(background, {alpha:opacity, format:'css'})}
`

export const HeroH1 = styled.h1`
    color: ${props => props.txtColor};
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    font-size: 24px;
    margin-top: 24px;
    color: ${props => props.txtColor};
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroSubtitle = styled.p`
    font-size: 24px;
    margin-top: 24px;
    color: ${props => props.txtColor};
    text-align: center;
    max-width: 600px;
    font-style: italic;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward) `
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px
    font-size: 20px
`