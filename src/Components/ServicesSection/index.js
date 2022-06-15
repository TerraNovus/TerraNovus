import React from 'react'
import content from './content.js'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServiceElements'

const Services = ({
  siteBg,
  siteText,
  elementBg,
  elementText,
  highlightBg1,
  highlightText1,
  highlightBg2,
  highlightText2
}) => {
  return (
    <ServicesContainer id='services' background={siteBg}>
        <ServicesH1 txtColor={siteText}>Our Services</ServicesH1>
        <ServicesWrapper>
            {content.map((e,i) => (
                <ServicesCard key={`service-${i}`} background={elementBg}>
                    <ServicesIcon src={e.img} />
                    <ServicesH2 txtColor={highlightText2}>{e.heading}</ServicesH2>
                    <ServicesP>{e.description}</ServicesP>
                </ServicesCard>
            ))}
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services