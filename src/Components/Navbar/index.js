import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();

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
              {content
                .filter(e =>
                  e.paths
                    ? e.paths.includes(location.pathname)
                    : e.excludedPaths
                    ? !e.excludedPaths.includes(location.pathname)
                    : true
                )
                .map(e => (
                  <NavItem key={e.to + "-link"}>
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
                to="/signin"
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