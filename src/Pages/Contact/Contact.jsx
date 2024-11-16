import './Contact.css'
import NavBarTwo from '../../components/NavBarTwo/NavBarTwo'
import HeroTwo from '../../components/HeroTwo/HeroTwo'
import ContactUsMain from '../../components/ContactUsMain/ContactUsMain'
import FooterTwo from '../../components/FooterTwo/FooterTwo'

export default function Contact() {
  return (
    <>
      <header>
        <NavBarTwo />
        <HeroTwo headH2={'Contact Us'} desti={'Contact Us'} />
      </header>
      <main className='not-home-main'>
        <ContactUsMain />
        <iframe className='iframeMap'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.9752102687385!2d153.02389537502899!3d-27.470031116719518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1b531f867d%3A0x58bc17e2f3421c47!2sElizabeth%20St%2C%20Brisbane%20City%20QLD%204000%2C%20Australia!5e0!3m2!1sen!2s!4v1731784910229!5m2!1sen!2s" 
          loading="lazy" >
        </iframe>
        <FooterTwo />
      </main>
    </>
  )
}
