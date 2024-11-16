import Container from 'react-bootstrap/esm/Container'
import Heading from '../SectionHeading/Heading'
import './Blog.css'
import Row from 'react-bootstrap/esm/Row'
import BlogCard from '../BlogCard/BlogCard'
import img1 from './../../assets/images/blogProfile1_1.webp'
import thumb1 from './../../assets/images/blogThumb1_1.webp'
import img2 from './../../assets/images/blogProfile1_2.webp'
import thumb2 from './../../assets/images/blogThumb1_2.webp'
import img3 from './../../assets/images/blogProfile1_3.webp'
import thumb3 from './../../assets/images/blogThumb1_3.webp'
export default function Blog() {
    const blogData = [
        {
            id:1,
            categ:'uncategorize',
            date:'march 14,2034',
            opin:'best and faster data sever ever',
            name:'admin',
            job:'co.Founder',
            img:img1,
            bg :thumb1
        },
        {   
            id:2,
            categ:'technology',
            date:'jone 8,2039',
            opin:"life won't one beast above all.",
            name:'admin',
            job:'co.Founder',
            img:img2,
            bg:thumb2
        },{
            id:3,
            categ:'shared hosting',
            date:'jone 8,2039',
            opin:"attentive was born in 2019 help sales team.",
            name:'admin',
            job:'co.Founder',
            img:img3,
            bg:thumb3
        }

    ]
    return (
        <section className="Blog">
            <Heading name={'bolg & news'} title={'featured news and insights'} alignment={true}/>
            <Container className='HW-BlogCardContainer'>
                <Row>
                {blogData.map(item => (
                <BlogCard key={item.id} {...item} />
            ))}
                </Row>
            </Container>
    </section>
    )
}
