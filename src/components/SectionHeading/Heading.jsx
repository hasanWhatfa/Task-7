import './Heading.css'
import Container from 'react-bootstrap/Container';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

export default function Heading({ name , title ,alignment }) {
    return (
        <>
            <div className={alignment ? 'sectionHeading' : 'sectionHeading-center'}>{/* if true then start if false then center*/}
                <Container>
                    <h4 className='sectionHeading-h4'><BsArrowLeft />{name}<BsArrowRight /></h4>
                    <h2 className='sectionHeading-h2'>{title}</h2>
                </Container>
            </div>
        </>
    )
}
