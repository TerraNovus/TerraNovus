import React from 'react'
import content from './content.js'
import { PortfolioContainer, PortfolioLinkWrap, PortfolioHeader, PortfolioWrapper, PortfolioLink, PortfolioLinkImg } from './PortfolioElements'

const Portfolio = ({
    highlightTxtColor,
    elementBg,
    elementBg2,
    siteText
}) => {
  return (
    <PortfolioContainer>
        <PortfolioHeader txtColor={highlightTxtColor}>
            Portfolio
        </PortfolioHeader>
        <PortfolioWrapper>
            {content.map((e,i) => (
                <PortfolioLinkWrap 
                    key={e.id} 
                    background={elementBg2}
                    num={i+1}
                >
                    <PortfolioLink 
                        to={e.link}
                        target='_blank'
                        txtcolor={siteText}
                        txthovercolor={highlightTxtColor}
                        hoverbackground={elementBg}
                    >
                    <PortfolioLinkImg
                        src={e.img}
                    />
                        {e.text}
                    </PortfolioLink>
                </PortfolioLinkWrap>
            ))}
        </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio