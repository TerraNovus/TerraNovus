import jpg1 from '../../Images/jpg-1.jpg'
import jpg2 from '../../Images/jpg-2.jpg'

export const content = [
    {
        id: 'about',
        topLine: 'Premium Websites',
        headline: 'Sleek Website Solutions',
        description: 'Whether you need a small static website with a memorable name for customers to find when they turn to google, or a complex website with a lot of moving parts, we have you covered. Contact us to have your website built today.',
        buttonLabel: 'Get Started',
        to: 'Home',
        route: true,
        img: jpg2,
        alt: 'Image showing a desk with two computer monitors displaying a website alongside a code editor.'
    },
    {
        id: 'discover',
        topLine: 'Portfolio',
        healine: 'Browse Our Previous Work',
        description: 'Browse a selection of past websites. See a design or element that catches your eye? Let us know, we\'ll incorporate it into your your website.',
        buttonLabel: 'View Portfolio',
        to: '/portfolio',
        route: true,
        img: jpg1,
        alt: 'Image of a laptop on a wooden surface next to a bundle of white flowers displaying a web page.'
    }
]