import React from "react";
import styled from 'styled-components';

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
`

export const TextP = styled.p`
    color: ${props => props.txtColor};
    width: 90%;
`

export const TextH1 = styled.h1`
    color: ${props => props.txtColor};
    text-align: center;
    width: 100%;
`