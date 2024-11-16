import './PricingCard.css'
import cloud from'./../../assets/images/pricingIcon1_1.svg'
import Col from 'react-bootstrap/Col';
import { CiCircleQuestion } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


export default function PricingCard( {title , featuers} ) {
    return (
    <Col lg={4} md={6} sm={12}>
        <div className='PricingCard rounded-4 p-4'>
            <div className="planType d-flex align-items-center justify-content-between rounded-4 mx-auto p-2">
                <div className="leftPlanType pt-2 px-2 text-white">
                    <h4 className='text-white planType-headign fw-bold'>{title}</h4>
                    <p className='Price-per'><span className='Price'>$49</span>/Month</p>
                </div>
                <div className="rightPlanType pt-2 px-2 d-flex align-items-center justify-content-center">
                    <img src={cloud} alt="" className='cloud'/>
                </div>
            </div>
            <ul className="featuers">
                {featuers.map((item , index) => (
                    <li key={index}>
                        <div>
                            {index < 5 ? (
                                <GiCheckMark className='Avaliable me-2'/>
                            ):
                            (
                                <FaXmark className='notAvaliable me-2'/>
                            )}
                            <span className='text-start'>{item}</span>
                        </div>
                        <CiCircleQuestion className='questionMark'/>
                    </li>
                ))}
            </ul>
            <button className='startNowPricing w-100 rounded-4 text-uppercase px-3 py-3'>get started now <FaArrowRight className='ms-3'/></button>
        </div>  
    </Col>
    )
}

