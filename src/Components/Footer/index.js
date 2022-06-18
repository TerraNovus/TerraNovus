import React from 'react'
import content from './content.json'
import socialContent from './content-social.js'
import logo from '../../Images/TerraNovus_logo_01_REDTEXT.png'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialLogo,
    SocialImage,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialMediaWrap
} from "./FooterElements";
import { FaFacebook } from 'react-icons/fa';

const Footer = ({
    siteBg,
    siteText,
    elementBg,
    elementText,
    highlightBg,
    highglightText,
    hoverHighlightBg,
    hoverHighlightText
}) => {
  return (
    <FooterContainer background={siteBg}>
      <FooterWrap>
        <FooterLinksContainer>
          {content.map((e, i) => (
            <FooterLinksWrapper key={`footer-column-${i}`}>
              {e.map((e2) => (
                <FooterLinkItems
                  key={`footer-section-${e2.id}`}
                  txtColor={siteText}
                >
                  <FooterLinkTitle>{e2.header}</FooterLinkTitle>
                  {e2.items.map((e3) => (
                    <FooterLink
                      key={`footer-item-${e3.id}`}
                      to={e3.to || '/'}
                      txtcolor={siteText}
                      hovertxtcolor={hoverHighlightText}
                    >
                    {e3.content}
                    {e3.content2 ?  <p>{e3.content2}</p> : ''}
                    </FooterLink>
                  ))}
                </FooterLinkItems>
              ))}
            </FooterLinksWrapper>
          ))}
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <SocialImage src={logo}/>
                </SocialLogo>
                <WebsiteRights txtColor={siteText}>
                    Terra Novus LLC © {new Date().getFullYear()} All rights reserved.
                </WebsiteRights>
                <SocialIcons>
                    {socialContent.map(e => (
                        <SocialIconLink
                            key={`social-${e.id}`}
                            href={e.href}
                            target='_blank'
                            aria-label={e.id}
                            txtColor={siteText}
                        >
                            {e.icon}
                        </SocialIconLink>
                    ))}
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer