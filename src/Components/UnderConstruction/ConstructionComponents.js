import React from "react";
import styled from "styled-components";

export const ConstructionContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.background};
    height: ${props => props.height || '100vh'};
    width: ${props => props.width || '100vw'};
`

export const ConstructionH1 = styled.h1`
    color: ${props => props.txtColor};
    padding: 50px;
`

export const ConstructionImg = styled.img`
    max-width: 90%;
    max-height: 50%;
`