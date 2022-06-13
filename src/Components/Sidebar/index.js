import React from 'react'
import content from './content.json'
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
  elementBg,
  elementText,
  highlightBg,
  highlightText,
  hoverHighlightBg,
  hoverHighlightText,
}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} background={siteBg}>
      <Icon onClick={toggle}>
        <CloseIcon txtcolor={highlightText} hovertxtcolor={hoverHighlightText} />
      </Icon>
      <SidebarWrapper txtColor={siteText}>
        <SidebarMenu>
          {content.map(e => (
            <SidebarLink
              to={e.to}
              onClick={toggle}
              txtcolor={siteText}
              hovertxtcolor={hoverHighlightText}
              key={e.to + '-link'}
            >
              {e.content}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            to="/signup"
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