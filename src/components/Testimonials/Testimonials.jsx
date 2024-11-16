import './Testimonials.css'
import girlTalking from './../../assets/images/ctaThumb1_1.webp'
import Heading from '../SectionHeading/Heading'
import Container from 'react-bootstrap/Container';
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';
import { FaArrowRight } from 'react-icons/fa6';
import weirdShape from './../../assets/images/ctaShape1_1.webp'
import client1 from './../../assets/images/testiThumb3_1.webp'
import client2 from './../../assets/images/testiThumb3_2.webp'
import client3 from './../../assets/images/testiThumb3_3.webp'
import testiShape from './../../assets/images/testimonialShape3_1.webp'
export default function Testimonials() {
  return (
    <section className='Testimonials'>
        <Container className='position-relative'>
            <div className="position-absolute mainPageContactUs rounded-4">
                <img src={girlTalking} alt="" className='girlTalking'/>
                <Heading name={'contact us'} title={'24/7 expert hosting support our customers love'} alignment={true}/>
                <button className='text-uppercase contactButton rounded-pill'>talk to a specialist <FaArrowRight className='ms-2'/></button>
                <div className="position-relative">
                    <img src={weirdShape} alt="" className='position-absolute weirdShape'/>
                </div>    
            </div>
            <Heading name={'Testimonials'} title={'our latest client feedback'} alignment={false}/>
            <div className="testimoncontainer">
                <div className="testicards">
                    <TestimonialsCard Cname={'hasan whatfa'} Cimg={client1} Cjob={'front-end dev'} cOpinion={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum eveniet nulla cum iusto? Repudiandae, dolor dolores perferendis minima ab fugit nostrum, maxime veniam consectetur incidunt animi!'}/>
                    <TestimonialsCard Cname={'krisitn hoerf'} Cimg={client2} Cjob={'web desiger'} cOpinion={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum eveniet nulla cum iusto? Repudiandae, dolor dolores perferendis minima ab fugit nostrum, maxime veniam consectetur incidunt animi!'} shape={testiShape}/>
                    <TestimonialsCard Cname={'mark zogerberg'} Cimg={client3} Cjob={'meta owner'} cOpinion={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum eveniet nulla cum iusto? Repudiandae, dolor dolores perferendis minima ab fugit nostrum, maxime veniam consectetur incidunt animi!'}/>
                </div>
                <div className="sldingBar rounded-pill">
                    <div className="rounded-pill"></div>
                </div>
            </div>
        </Container>
    </section>
  )
}
