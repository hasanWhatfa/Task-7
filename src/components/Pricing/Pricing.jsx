import Heading from '../SectionHeading/Heading'
import './Pricing.css'
import diamond  from './../../assets/images/pricingShape1_2.webp'
import touchingHand from './../../assets/images/pricingShape1_1.webp'
import arrowImage from './../../assets/images/pricingIcon1_2.svg';
import Container from 'react-bootstrap/Container';
import PricingCard from '../PricingCard/PricingCard';
import Row from 'react-bootstrap/Row';

export default function Pricing() {
    return (
    <section className='Pricing'>
        <Heading name={'Our Pricing'} title={'Our Awesome Prcing Plans'} alignment={false}/>
        <img src={diamond} alt="" className='position-absolute top-0 end-0 me-5 diamond' />
        <img src={touchingHand} alt="" className='position-absolute touchingHand' />
        <div className="offerContainer d-flex align-items-center justify-content-center position-relative mb-4">
            <div className="textOffer rounded-pill border border-1 d-flex align-items-center justify-content-center px-2 py-1">
                <span className='rounded-pill me-2 p-1 mothly'>Monthly</span>
                <span className='text-capitalize p-1'>yearly</span>
            </div>
            <img src={arrowImage} alt="" className='arrowImgPr'/>
            <span className='ms-1 mt-1 saveMoney'>Save 25%</span>
        </div>  
        <Container>
            <Row>
                <PricingCard title={'Gold Plan'} featuers={["100 gb ssd storage" , "Weekly backups" , "unlimeted free SSl" , 
                    "24/y system mointoring" , "free domain($9.99 value)" , "frame 114645" , "20+ paymetn method"
                ]}/>
                <PricingCard title={'Gold Plan'} featuers={["100 gb ssd storage" , "Weekly backups" , "unlimeted free SSl" , 
                    "24/y system mointoring" , "free domain($9.99 value)" , "frame 114645" , "20+ paymetn method"
                ]}/>
                <PricingCard title={'Gold Plan'} featuers={["100 gb ssd storage" , "Weekly backups" , "unlimeted free SSl" , 
                    "24/y system mointoring" , "free domain($9.99 value)" , "frame 114645" , "20+ paymetn method"
                ]}/>
            </Row>
        </Container>
    </section>
    )
}
