import homeImg1 from "./assets/home-image-1.jpg"
import homeImg2 from "./assets/home-image-2.avif"
import homeImg3 from "./assets/home-image-3.jpg"
import homeImg4 from "./assets/home-image-4.jpg"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import {AiOutlineDropbox} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
import {CiDiscount1} from 'react-icons/ci'


export const navLinks=[
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 4, name: "Products", link: "/products" },
];

export const homeHero=[
    { id: 1, title: 'Latest winter collection', button: 'Shop the look', url: '/products', img: homeImg1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, title: 'Latest smartphones at best prices', button: 'View more', url: '/products', img: homeImg2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Best home furnishing items', button: 'View more', url: '/products', img: homeImg3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
    { id: 4, title: 'Latest jewellery collections at best prices and a lot more....', button: 'View more', url: '/products', img: homeImg4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
];

export const socialLinks= [
    { id: 1, url: 'https://www.facebook.com/', icon: <FaFacebookF/> },
    { id: 2, url: 'https://www.instagram.com/', icon: <FaInstagram/> },
    { id: 3, url: 'https://www.twitter.com/', icon: <FaTwitter/> },
    { id: 4, url: 'https://www.youtube.com/', icon: <FaYoutube/> },
    { id: 5, url: 'https://www.linkedin.com/', icon: <FaLinkedinIn/> },
];

export const features= [
    { id: 1, title: 'Express Delivery', icon: <AiOutlineDropbox/>, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' },
    { id: 2, title: 'Order Tracking', icon: <FiMapPin/>, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' },
    { id: 3, title: 'Regular Discounts', icon: <CiDiscount1/>, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '}
]
