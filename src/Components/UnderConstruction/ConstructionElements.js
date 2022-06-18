import React from "react";
import styled from "styled-components";

export const ConstructionContainer = styled.div`
  display: flex;
    background: ${props => props.background};
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

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
            rgba(0,0,0,0.2) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            transparent
        );
        z-index: 2;
    }
`

export const ConstructionBg = styled.div`
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
export const ConstructionContent = styled.div`
    z-index: 3;
    border-radius: 20px;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0,0,0,0);
`
export const ConstructionImg = styled.img`
    width: 100%;
`