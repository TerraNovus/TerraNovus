import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import content from './content.json'
import {
    Nav,
    NavContainer,
    NavLogo,
    NavLogoImg,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = ({
    toggle,
    logoImg,
    logoText,
    siteBg,
    siteText,
    highlightBg,
    highlightText,
    hoverHighlightBg,
    hoverHighlightText,
    opacity,
}) => {
    var logoElement = logoImg ? <NavLogoImg src={logoImg} alt='logo' /> : logoText

    return (
        <>
        <Nav background={siteBg} alpha={opacity}>
            <NavContainer>
            <NavLogo to="/" color={highlightBg}>
                {logoElement}
            </NavLogo>
            <MobileIcon 
                onClick={toggle} 
                txtColor={highlightText}
                hoverTxtColor={highlightBg}
            >
                <FaBars />
            </MobileIcon>
            <NavMenu>
                {content.map(e => (
                    <NavItem key={e.to + '-link'}>
                        <NavLink 
                            to={e.to} 
                            txtcolor={siteText}
                            activecolor={highlightBg}
                        >
                            {e.content}
                        </NavLink>
                    </NavItem>
                ))}
            </NavMenu>
            <NavBtn>
                <NavBtnLink 
                    to="/signup"
                    background={highlightBg}
                    txtcolor={highlightText}
                    hoverbg={hoverHighlightBg}
                    hovertxtcolor={hoverHighlightText}
                >
                    Sign In
                </NavBtnLink>
            </NavBtn>
            </NavContainer>
        </Nav>
        </>
    );
};

export default Navbar