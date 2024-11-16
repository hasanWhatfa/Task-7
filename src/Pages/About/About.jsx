import HeroTwo from '../../components/HeroTwo/HeroTwo'
import NavBarTwo from '../../components/NavBarTwo/NavBarTwo'
import './About.css'
import astric from './../../assets/images/asterisk.svg'
import Memebers from '../../components/Memebers/Memebers'
import Container from 'react-bootstrap/esm/Container'
import envato from './../../assets/images/envatoBlue.png'
import envatoGray from './../../assets/images/envatoGray.png'
import FooterTwo from '../../components/FooterTwo/FooterTwo'
export default function About() {
  return (
    <>
      <header>
        <NavBarTwo />
        <HeroTwo headH2={'About Us'} desti={'About Us'}/>
        <div className='AboutHeads w-100 py-4'>
          <div className='cyberSec'>
            <img src={astric} alt="" />
            <p className='About-heads'>Cyber Security</p>
            <img src={astric} alt="" />
          </div>
          <p className='About-heads'>IT Solutions</p>
          <img src={astric} alt="" />
          <p className='About-heads'>Technology</p>
          <img src={astric} alt="" />
          <p className='About-heads'>Data Security</p>
        </div>
      </header>
      <main className='not-home-main'>
        <Memebers />
        <Container>
          <div className="trustBrands">
            <div className="trustBrandsHead">
              <span className="lineHead"></span>
              <h5>1k + Brand Trust Us</h5>
              <span className="lineHead"></span>
            </div>
            <div className="envatosContainer">
              <img src={envatoGray} alt="envato logo" />
              <img src={envatoGray} alt="envato logo" />
              <img src={envato} alt="envato logo" />
              <img src={envatoGray} alt="envato logo" />
              <img src={envatoGray} alt="envato logo" />
            </div>
          </div>
        </Container>
        <FooterTwo />
      </main>
    </>
  )
}


