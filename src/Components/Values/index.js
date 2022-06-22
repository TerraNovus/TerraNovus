import React from 'react'
import Container from '../UniversalContainer.js'
import content from './content.json'
import { TextH1, TextP, TextWrapper } from '../TextTemplate.js'

const Values = ({
    siteText,
    highlightText
}) => {
    console.log(highlightText)
  return (
    <Container padding='110px'>
        <TextWrapper>
            <TextH1 txtColor={highlightText}>
                Our Values
            </TextH1>
        </TextWrapper>
        {content.map((e,i) => (
            <TextWrapper>j
                <TextP key={`paragraph${i}`} txtColor={siteText}>
                    {e}
                </TextP>
            </TextWrapper>
        ))}
    </Container>
  )
}

export default Values