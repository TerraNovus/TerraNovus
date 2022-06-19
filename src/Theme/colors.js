//---COLORS---//
export const bloodred = '#880808'
export const darkred = '#8b0000'

export const lightred = '#ff726f'
export const vividred = '#f70d1a'
export const crimson = '#dc143c'
export const cherry = '#d2042d'
export const venetian = '#a42a04'

export const black = '#000'

export const grey1 = '#2f2f2f'

export const white = '#fff'
export const white1 = '#f9f9f9'
export const white2 = '#f7f8fa'

//---STYLES---//
/* hc = high contrast */

export const darkHighlight = bloodred
export const darkHighlight2 = darkred
export const lightHighlight = white

export const highlights = {darkHighlight, darkHighlight2, lightHighlight}

export const darkBgSite = black
export const darkBgSite_hc = black
export const darkBgElement = bloodred
export const darkBgElement_hc = bloodred

export const darkTextSite = black
export const darkTextSite_hc = black
export const darkTextElement = bloodred
export const darkTextElement_hc = bloodred

export const lightBgSite = white1;
export const lightBgSite_hc = white;
export const lightBgElement = white2;
export const lightBgElement_hc = white;

export const lightTextSite = white1;
export const lightTextSite_hc = white;
export const lightTextElement = white2;
export const lightTextElement_hc = white;

//---THEMES---//
export const DarkTheme = {
    siteBg: darkBgSite,
    siteText: lightTextSite,
    elementBg: lightBgElement,
    elementText: darkTextElement,
    ...highlights
}

export const DarkTheme_hc = {
    siteBg: darkBgSite_hc,
    siteText: lightTextSite_hc,
    elementBg: lightBgElement_hc,
    elementText: darkTextElement_hc,
    ...highlights
}

export const LightTheme = {
    siteBg: lightBgSite,
    siteText: darkTextSite,
    elementBg: darkBgElement,
    elementText: lightTextElement,
    ...highlights
}

export const LightTheme_hc = {
    siteBg: lightBgSite_hc,
    siteText: darkTextSite_hc,
    elementBg: darkBgElement_hc,
    elementText: lightTextElement_hc,
    ...highlights
}