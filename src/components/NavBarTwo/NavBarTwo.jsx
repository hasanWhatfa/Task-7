import Container from 'react-bootstrap/esm/Container'
import './NavBarTwo.css'
import logo from './../../assets/images/logo.svg'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa6'
import NavPlane from './../../assets/images/plane.webp'
export default function NavBarTwo() {
  return (
    <div className='NavBarTwo poistion-relative'>
        <img src={NavPlane} alt="" className='PlaneNav'/>
        <Container>
            <img src={logo} className='logo-navtwo'/>
            <div className="NavBarTwolinks">
                <ul>
                    <li>
                        <Link to={'/'}>Home<IoIosArrowDown /></Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>Services<IoIosArrowDown /></li>
                    <li>Pages<IoIosArrowDown /></li>
                    <li>Blog<IoIosArrowDown /></li>
                    <li>
                        <Link to={'/contact'} >Contact<IoIosArrowDown /></Link>
                    </li>
                </ul>
                <button className='searchBtn'><CiSearch /></button>
                <button className='quoteBtn ms-4 rounded-pill'>Get A Quote<FaArrowRight /></button>
            </div>
        </Container>
        <div className="blueShape"></div>
        <div className="thatTraingleThing"></div>
    </div>
  )
}
