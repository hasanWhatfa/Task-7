import Container from 'react-bootstrap/esm/Container'
import './Footer.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import logo from './../../assets/images/logoWhite.svg'
import { FaArrowRight, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { RiArrowDownWideFill } from 'react-icons/ri'
import { FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa'
import FloatingDiv from '../floatingDiv/floatingDiv'
import video1 from './../../assets/images/footerThumb1_1.webp'
import video2 from './../../assets/images/footerThumb1_2.webp'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
      <FloatingDiv />
      <section className="Footer">
        <Container className='footer-contaienr'>
          <Row>
            <Col className='firstColumn'>
              <img src={logo}/>
              <p>
                Lorem ipsum dolor sit,amet consectetur adipisicing elit.
                Distinctio tempore nobis odio rem sint
              </p>
              <div className="footerIcons">
                <div className="iconContainerFotter">
                  <FaFacebookF />                  
                </div>
                <div className="iconContainerFotter">
                  <FaTwitter />
                </div>
                <div className="iconContainerFotter">
                  <FaYoutube />
                </div>
                <div className="iconContainerFotter">
                  <FaInstagram />
                </div>
              </div>
            </Col>
            <Col >
              <div className="footerLinksHeadig">
                <h5 className='footerLinks-h5'>quick links</h5>
                <RiArrowDownWideFill />
              </div>
              <ul className='FooterLinks'>
                <li className='linkTOAnotherPage'><MdKeyboardDoubleArrowRight /><Link to={'/about'}>Extexh about</Link></li>
                <li><MdKeyboardDoubleArrowRight />our services</li>
                <li><MdKeyboardDoubleArrowRight />our blogs</li>
                <li><MdKeyboardDoubleArrowRight />FAQ's</li>
                <li className='linkTOAnotherPage'><MdKeyboardDoubleArrowRight /><Link to={'/contact'}>Contact us</Link></li>
              </ul>
            </Col>
            <Col >
              <div className="footerLinksHeadig">
                <h5 className='footerLinks-h5'>recent posts</h5>
                <RiArrowDownWideFill />
              </div>
              <div className="FooterVideos">
                <div className="videoFooter">
                  <img src={video1} alt="" />
                  <div className="videoFooterDesc">
                    <p className='footerDate'><FaRegCalendarAlt />15th April 2019</p>
                    <p className='fw-bold'>10 technology things to see before you die</p>
                  </div>
                </div>
                <div className="videoFooter">
                  <img src={video2} alt="" />
                  <div className="videoFooterDesc">
                    <p className='footerDate'><FaRegCalendarAlt />15th April 2019</p>
                    <p className='fw-bold'>some man gonna blow you mind</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="footerLinksHeadig">
                <h5 className='footerLinks-h5'>Contact Us</h5>
                <RiArrowDownWideFill />
              </div>
              <p className='d-flex flex-column align-items-start justify-content between'>
                <span className='mb-2'><FaEnvelope />info@example.com</span>
                <span><FaPhoneAlt />+288-6666-1200</span>
              </p>
              <form>
                <div className="input-group my-3 w-75">
                  <input type="text" className="form-control FooterInput" placeholder="Your email address" />
                  <button className="btn btn-outline-secondary " type="button" id="button-addon2"><FaArrowRight className='footerArrowLeftThing'/></button>
                </div>
                <div className="check">
                  <input type="checkbox" />
                  <label>i agree to the <span>privacy policy</span></label>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
          <div className="blueBottomThing">
            <Container className='d-flex align-items-center justify-content-between'>
              <p>&#169; all copyright 2024 by extech</p>
              <div className='d-flex align-items-center justify-content-center'>
                <p className='me-3 footer-Links-Bottom'>terms & conditions</p>
                <p className='footer-Links-Bottom'>privacy policy</p>
              </div>
            </Container>
          </div>
      </section>  
    </>
  )
}
