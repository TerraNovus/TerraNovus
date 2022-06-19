import React from 'react'
import { useLocation } from 'react-router-dom';
import content from './content.js'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({
  isOpen,
  toggle,
  siteBg,
  siteText,
  highlightBg,
  highlightText,
  hoverHighlightBg,
  hoverHighlightText,
}) => {
  const location = useLocation();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} background={siteBg}>
      <Icon onClick={toggle}>
        <CloseIcon
          txtcolor={highlightText}
          hovertxtcolor={hoverHighlightText}
        />
      </Icon>
      <SidebarWrapper txtColor={siteText}>
        <SidebarMenu>
          {content
            .filter(e => (
              e.paths
                ? e.paths.includes(location.pathname)
                : e.excludedPaths
                ? !e.excludedPaths.includes(location.pathname)
                : true
            ))
            .map((e) => (
              <SidebarLink
                to={e.to}
                onClick={toggle}
                txtcolor={siteText}
                hovertxtcolor={hoverHighlightText}
                key={e.to + "-link"}
              >
                {e.content}
              </SidebarLink>
            ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            to="/signin"
            background={highlightBg}
            txtcolor={highlightText}
            hoverbg={hoverHighlightBg}
            hovertxtcolor={hoverHighlightText}
          >
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar