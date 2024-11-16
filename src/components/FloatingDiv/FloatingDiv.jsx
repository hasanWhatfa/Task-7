import './FloatingDiv.css';
import someGuystandin from './../../assets/images/ctaThumb.webp';
import shapeTwo from './../../assets/images/ctaShape2_1.webp';
import shapeThree from './../../assets/images/ctaShape2_4.webp';
import { FaArrowRight } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';


export default function FloatingDiv() {
  return (
    <Container className='floatingContainer'>
      <div className="floatingDiv px-5 rounded-5">
        <div className="floatingDivContent position-relative">
          <div className="imgThumbContainer position-relative">
            <img src={someGuystandin} alt="some Guy standing" className='someGuystandin'/>
            <img src={shapeTwo} className='circleShape position-absolute'/>
            <img src={shapeThree} className='linesBehind position-absolute'/>
          </div>
          <h3 className='floatingDivHeading'>stay connectd with cutting edge IT</h3>
          <button className='text-uppercase rounded-pill mainFooterButton-HW'>talk to a specialist<FaArrowRight className='ms-2' /></button>
          <img src={shapeThree} className='linesMiddle position-absolute start-50'/>
          <img src={shapeTwo} className='endRightShape position-absolute'/>
        </div>
    </div>
    </Container>
  )
}
