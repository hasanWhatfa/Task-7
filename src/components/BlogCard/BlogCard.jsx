import Col from 'react-bootstrap/esm/Col'
import './BlogCard.css'
import { FaArrowRight } from 'react-icons/fa6'

export default function BlogCard({categ , date , opin , name , job , img , bg}) {
  return (
    <Col lg={4} md={6} sm={12} className='colOfBlog'>
        <div className="BlogCard w-100 p-2 position-relative">
            <div className="blogImageContaienr">
                <img src={bg} className='w-100'/>
            </div>
            <div className="blogCardInfo mx-auto p-3 rounded-2">
                <div className='first-top d-flex align-items-center justify-content-between w-100'>
                    <p className='categ rounded-pill text-capitalize'>{categ}</p>
                    <p className='date text-uppercase'>{date}</p>
                </div>
                <h4 className='blogCardHeading text-capitalize'>{opin}</h4>
                <span className="straightLine"></span>
                <div className="someOneInfo">
                    <div className="someOneid">
                        <img src={img} className='someonePhoto'/>
                        <div>
                            <h5 className='someOneName text-capitalize'>{name}</h5>
                            <p className='someOneJob text-capitalize'>{job}</p>
                        </div>
                    </div>
                    <button><FaArrowRight /></button>
                </div>
            </div>
        </div>
    </Col>
  )
}
