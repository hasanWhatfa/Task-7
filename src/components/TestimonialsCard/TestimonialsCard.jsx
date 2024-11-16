import './TestimonialsCard.css'
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
export default function TestimonialsCard({Cname ,Cimg ,Cjob ,cOpinion , shape}) {
  return (
    <div className='TestimonialsCard position-relative rounded-4'>
        <div className="starts">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
        </div>
        <div className="clientOpenion">
            <p className='someTalking'>
                &#x0022;{cOpinion}&#x0022;
            </p>
            <div className='clientInfo'>
                <img src={Cimg} className='clientImage'/>
                <div className="clientInfo-ide">
                    <h5 className='Cname'>{Cname}</h5>
                    <p className='Cjob'>{Cjob}</p>
                </div>
            </div>
        </div>
        <RiDoubleQuotesR className='position-absolute quote'/>
        <img src={shape} className='testicardShape'/>
    </div>
  )
}
