import React from 'react'
import underConstruction from '../../Images/under-construction.svg'
import { ConstructionContainer, ConstructionH1, ConstructionImg } from './ConstructionComponents'

const UnderConstruction = ({background, txtColor}) => {
  return (
    <ConstructionContainer background={background}>
        <ConstructionH1 txtColor={txtColor}>Under Construction</ConstructionH1>
        <ConstructionImg src={underConstruction}/>
    </ConstructionContainer>
  )
}

export default UnderConstruction