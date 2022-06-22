import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeInUp } from 'react-animations';

export const PortfolioContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
    padding-top: 110px;
`

export const PortfolioHeader = styled.h1`
    display: flex;
    justify-content: center;
    color:  ${props => props.txtColor};
`

export const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: transparent;
    padding-top: 15px;
`

export const PortfolioLinkWrap = styled.div`
    width: 90%;
    height: 80px;
    background: ${props => props.background};
    border-radius: 15px;
    animation: ${props => `${props.num/2}s`} ${keyframes `${fadeInUp}`};
    margin-bottom: 10px;
`

export const PortfolioLinkImg = styled.img`
    height: 80px;
    border-radius: 15px;
`

export const PortfolioLink = styled(Link)`
    color: ${props => props.txtcolor};
    width: 100%;
    height: 80px;
    text-align: center;
    text-decoration: none;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 10px;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
    border-radius: 15px;

    &:hover {
        color: ${props => props.txthovercolor};
        background: ${props => props.hoverbackground};
        transition: 0.3s ease-in-out;
    }
`