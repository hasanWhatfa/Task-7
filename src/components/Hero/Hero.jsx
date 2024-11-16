import './Hero.css'
import Container from 'react-bootstrap/Container';
import { FaArrowRight } from "react-icons/fa6";
import photo from './../../assets/images/profileShape1_1.webp';
import { TbActivityHeartbeat } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import photo2 from './../../assets/images/heroShape1_3.webp'
import heroThumb from './../../assets/images/heroThumb1_1.webp'
import rightArrow from './../../assets/images/HeroRightArrow.png';
import leftArrow from './../../assets/images/HeroLeftArrow.png';
import rightShape from './../../assets/images/heroShape1_1.webp'
import PstHero from './../../assets/images/heroBrands.png'

export default function Hero() {
    return (
        <>
            <section className='Hero'>
                <div className="hero-container position-relative">
                    <Container>
                        <img src={photo2} alt="brand" className='position-absolute heroBrand'/>
                        <div className='LeftSide'>
                            <div className="welcomeContent">
                                <p> <TbActivityHeartbeat />everything you need to creat a website</p>
                                <h2>buisness innovation with it services experties</h2>
                                <ul>
                                    <li><GiCheckMark />deployment and support</li>
                                    <li><GiCheckMark />discovery and analysis</li>
                                    <li><GiCheckMark />flexbility and adaptability</li>
                                    <li><GiCheckMark />competitve advantage</li>
                                </ul>
                                <button>get started<FaArrowRight /></button>
                            </div>
                            <div className="bottom-content">
                                <div className="first1">
                                    <h5><IoIosStar />trustipilot</h5>
                                    <div className="bottom-content-content">
                                        <img src={photo} alt="" />
                                        <div className="startRate">
                                            <div className="starts">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <span>450+ erviewes</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sec1">
                                <h5>google</h5>
                                    <div className="bottom-content-content">
                                        <img src={photo} alt="" />
                                        <div className="startRate">
                                            <div className="starts">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <span>450+ erviewes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightSide position-relative">
                            <img src={heroThumb} alt="" className='heroGUY'/>
                            <div className="rightar position-absolute">   
                                <img src={rightArrow} />
                                <p className='rightPara'>Solation</p>
                            </div>
                            <div className="leftar position-absolute">
                                <img src={leftArrow}/>
                                <p className='leftPara'>Technology</p>
                            </div>
                        </div>
                    </Container>
                    <img src={rightShape} alt="" className='position-absolute rightShape'/>
                </div>
            </section>
            <img src={PstHero} className='heroBrands'/>
        </>
    )
}
