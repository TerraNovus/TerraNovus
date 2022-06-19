import React, {useState, useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll';
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
    exclude,
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

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);


    useEffect(() => {window.addEventListener('scroll', changeNav)}, [])

    var logoElement = logoImg ? <NavLogoImg src={logoImg} alt='logo' /> : logoText

    return (
      <>
        <Nav
          background={siteBg}
          alpha={opacity}
          scrollNav={scrollNav}
          exclude={exclude}
        >
          <NavContainer>
            <NavLogo
              to="/"
              onClick={location.pathname == "/" ? scroll.scrollToTop : () => {}}
              color={highlightBg}
            >
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
                .filter((e) =>
                  e.paths
                    ? e.paths.includes(location.pathname)
                    : e.excludedPaths
                    ? !e.excludedPaths.includes(location.pathname)
                    : true
                )
                .map((e) => (
                  <NavItem key={e.to + "-link"}>
                    <NavLink
                      to={e.to}
                      txtcolor={siteText}
                      activecolor={highlightBg}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
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