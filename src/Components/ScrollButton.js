import styled from 'styled-components'
import {Link} from 'react-scroll'

const Button = styled(Link)`
    border-radius: 50px;
    background: ${props => props.background};
    white-space: nowrap;
    padding: ${({large}) => (large ? '14px 48px' : '12px 30px')};
    color: ${props => props.txtcolor};
    font-size: ${({largeFont}) => (largeFont ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${props => props.hoverbg};
        color: ${props => props.hovertxtcolor};
    }
`
export default Button