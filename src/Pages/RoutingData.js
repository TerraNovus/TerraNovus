import Home from ".";
import Careers from "./careers";
import Portfolio from "./portfolio";
import Signin from "./signin";
import Signup from "./signup";
import Values from "./values";

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
            <Portfolio background={props.theme.siteBg} />
        )
    },
    {
        id: 'signup',
        path: '/signup',
        getElement: props => (
            <Signup background={props.theme.background} />
        )
    },
    {
        id: 'signin',
        path: '/signin',
        getElement: props => (
            <Signin background={props.theme.background} />
        )
    },
    {
        id: 'values',
        path: '/values',
        getElement: props => (
            <Values background={props.theme.background} />
        )
    },
    {
        id: 'careers',
        path: '/careers',
        getElement: props => (
            <Careers background={props.theme.background} />
        )
    }
]

export default routingData;