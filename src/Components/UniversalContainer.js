import React from "react";
import styled from 'styled-components';

const UniversaleContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
    padding-top: ${props => props.padding || 'initial'};

`

export default UniversaleContainer;