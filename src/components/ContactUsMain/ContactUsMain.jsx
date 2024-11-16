import Container from 'react-bootstrap/esm/Container'
import './ContactUsMain.css'
import girlPhone from './../../assets/images/video.webp'
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { BsFillEnvelopeAtFill } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ContactUsMain() {
  return (
    <section className='ContactUsMain'>
        <Container className='contactUsMainCone'>
            <div className="leftContact">
                <div className='leftContactText'>
                    <div className='d-flex align-items-center justify-content-start leftContactTHing'>
                        <div className="IconCOntact">
                            <MdOutlinePermPhoneMsg />
                        </div>
                        <div className="COntactTEXT">
                            <p>Call Us7/24</p>
                            <p>+208-555-0112</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start leftContactTHing'>
                        <div className="IconCOntact">
                        <BsFillEnvelopeAtFill />
                        </div>
                        <div className="COntactTEXT">
                            <p>Make A Qoute</p>
                            <p>infotech@gmail.com</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start leftContactTHing'>
                        <div className="IconCOntact">
                            <IoLocation />
                        </div>
                        <div className="COntactTEXT">
                            <p>Location</p>
                            <p>4517 washington ave.</p>
                        </div>
                    </div>
                </div>
                <img src={girlPhone} alt="" />
            </div>
            <div className='rightContact'>
                <div className="rightContactHEading">
                    <h2>Ready To Get Started?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Esse optio consectetur totam possimus sint dolorem illo quibusdam praesentium.
                    </p>
                </div>
                <div className="rightContactFORM">
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <div className="mb-3">
                                <label className="form-label">Your Name*</label>
                                <input type="email" className="form-control" />
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className="mb-3">
                                <label className="form-label">Your Email*</label>
                                <input type="email" className="form-control"/>
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <div className="mb-3">
                                    <label className="form-label">Right Message</label>
                                    <textarea className="form-control" rows="3"></textarea>
                            </div>
                        </Col>
                        <button className='contactFormBtn rounded-pill'>Send Message <FaArrowRightLong /></button>
                    </Row>
                </div>
            </div>
        </Container>
    </section>
  )
}
