import './NavBar.css';
import logo from './../../assets/images/logo.svg';
import { CiSearch } from "react-icons/ci";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
    const [displayNav, setDisplay] = useState(false); // Use boolean for better clarity

    const toggleNav = () => {
        setDisplay(prevDisplay => !prevDisplay); // Toggle the display state
    };

    return (
        <Container>
            <nav className="HW-Nav">
                <img src={logo} alt="logo" />
                <ul className="links">
                    <li>Home<IoIosArrowDown /></li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>Services<IoIosArrowDown /></li>
                    <li>Pages<IoIosArrowDown /></li>
                    <li>Blog</li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
                <div className="navIcons">
                    <CiSearch />
                    <FaShoppingCart />
                </div>
                <button>GET A QUOTE<FaArrowRight /></button>
            </nav>
            <nav className='MobileNav'>
                <img src={logo} alt="logo" />
                <div className="nonLogo">
                    <div className="navIcons">
                        <CiSearch />
                        <FaShoppingCart />
                    </div>
                    <FaBars className='bars' onClick={toggleNav} /> {/* Corrected onClick */}
                </div>
                <ul className={displayNav ? 'displayMobileNav links' : 'mobileNavNone'}>
                    <li>
                        <Link to={'/'} >Home<IoIosArrowDown /></Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>Services<IoIosArrowDown /></li>
                    <li>Pages<IoIosArrowDown /></li>
                    <li>Blog</li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
