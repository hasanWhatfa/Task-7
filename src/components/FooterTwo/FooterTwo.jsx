import Container from 'react-bootstrap/esm/Container'
import Footer from '../Footer/Footer'
import './FooterTwo.css'
import { IoLocation } from "react-icons/io5";
import { BsFillEnvelopeAtFill } from 'react-icons/bs';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
export default function FooterTwo() {
return (
    <>
    <div className='footerTow'>
        <div className="blueDiv p-3">
            <Container className='footertwoCntne d-flex align-items-center justify-content-between rounded-4'>
                <div className="blueDivSection">
                    <div className="footertwoIcon">
                    <IoLocation />
                    </div>
                    <div className="footertowText">
                        <p>Adress</p>
                        <p className='footertwoBold'>4648 Rocky Road Philadlephia PA</p>
                    </div>
                </div>
                <div className="blueDivSection">
                    <div className="footertwoIcon">
                    <BsFillEnvelopeAtFill />
                    </div>
                    <div className="footertowText">
                        <p>Send Email</p>
                        <p className='footertwoBold'>info@example.com</p>
                    </div>
                </div>
                <div className="blueDivSection">
                    <div className="footertwoIcon">
                    <MdOutlinePermPhoneMsg />
                    </div>
                    <div className="footertowText">
                        <p>Call Emeregency</p>
                        <p className='footertwoBold'>+88 0123 654 99</p>
                    </div>
                </div>
            </Container>
        </div>
        <Footer />
    </div>
    </>
    )
}
