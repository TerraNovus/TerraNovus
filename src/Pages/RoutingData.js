import Home from ".";
import Portfolio from "../Components/Portfolio";
import Signin from "../Components/Signin";
import UnderConstruction from "../Components/UnderConstruction";

const routingData = [
    {
        id: 'home',
        path: '/',
        getElement: props => (
            <Home theme={props.theme} getTheme={props.getTheme} />
        )
    },
    {
        id: 'portfolio',
        path: '/portfolio',
        getElement: props => (
            <Portfolio 
                siteText={props.theme.siteText}
                elementBg={props.theme.elementBg}
                elementBg2={props.theme.elementBg2}
                highlightTxtColor={props.theme.darkHighlight}
            />
        )
    },
    {
        id: 'signup',
        path: '/signup',
        getElement: props => (
            <UnderConstruction background={props.theme.background} />
        )
    },
    {
        id: 'signin',
        path: '/signin',
        getElement: props => (
            <UnderConstruction background={props.theme.background} />
        )
        /*excludeNav: true,
        excludeFooter: true,
        getElement: props => (
            <Signin theme={props.theme} />
        )*/
    },
    {
        id: 'values',
        path: '/values',
        getElement: props => (
            <UnderConstruction background={props.theme.background} />
        )
    },
    {
        id: 'careers',
        path: '/careers',
        getElement: props => (
            <UnderConstruction background={props.theme.background} />
        )
    }
]

export default routingData;