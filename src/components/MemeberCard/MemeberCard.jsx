import Col from 'react-bootstrap/esm/Col'
import './MemeberCard.css'
import { FaShareAlt } from "react-icons/fa";

export default function MemeberCard({name , job , photo}) {
  return (
    <Col lg={3} sm={12} md={6}>
        <div className="MemeberCard rounded-4">
            <img src={photo} className='' />
            <div className="memeberDesc">
                <h4>{name}</h4>
                <p>{job}</p>
                <div className="curvesMem  position-absolute">
                </div>
                <div className="shareIcon">
                    <FaShareAlt />
                </div>
            </div>
        </div>
    </Col>
  )
}
