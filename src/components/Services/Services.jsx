import Heading from '../SectionHeading/Heading'
import './Services.css'
import Container from 'react-bootstrap/Container';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import SrviceCard from '../SrviceCard/SrviceCard';
import firstIcon from './../../assets/images/serviceIconFirstOne.svg'
import secondIcon from './../../assets/images/serviceIconSecondOne.svg'
import thirdIcon from './../../assets/images/serviceIconThirdOne.svg'
import lastIcon from './../../assets/images/serviceIconLastOne.svg'
export default function Services() {
  return (
    <section className='services'>
        <Heading name={'our services'} title={'elvating businesses with it engenuity'} alignment={true}/>
        <div className="servicesCards">
          <Container>
            <SrviceCard icon={firstIcon} heading={'Woo Commerce'} desc={"Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.CRM Solutions"} />
            <SrviceCard icon={secondIcon} heading={'CRM Solutions'} desc={'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'} />
            <SrviceCard icon={thirdIcon} heading={'Web Design'} desc={'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'} />
            <SrviceCard icon={lastIcon} heading={'Data Guard Sentinel'} desc={'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'} />
            <div className="servicesArrows position-absolute">
              <div className="iconContainer">
                <FaArrowLeftLong />
              </div>
              <div className="iconContainer">
                <FaArrowRightLong />
              </div>
            </div>
          </Container>
        </div>
    </section>
  )
}
