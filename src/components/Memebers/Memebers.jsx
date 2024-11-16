import './Memebers.css'
import Heading from './../SectionHeading/Heading'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import MemeberCard from '../MemeberCard/MemeberCard'
import meme1 from './../../assets/images/04.webp'
import meme3 from './../../assets/images/06.webp'
import meme4 from './../../assets/images/07.webp'

export default function Memebers() {
    const memebersData = [
        {
            id:1,
            name:'masirul islam',
            job:'web designer',
            photo:meme1
        },
        {
            id:2,
            name:'jeseca mardo',
            job:'cyber expert',
            photo:meme3
        },
        {
            id:3,
            name:'arnold himngway',
            job:'web expert',
            photo:meme3
        },
        {
            id:4,
            name:'shikon haque',
            job:'data analyst',
            photo:meme4
        }
    ]
  return (
    <section className="Memebers py-5">
        <Heading name={'team members'} title={'our dedicated team members'} alignment={true}/>
        <Container className='membersContainer'>
            <Row>
            {memebersData.map(item => (
                <MemeberCard key={item.id} {...item} />
            ))}
            </Row>
        </Container>
    </section>
  )
}
