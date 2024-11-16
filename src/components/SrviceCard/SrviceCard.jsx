import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import './SrviceCard.css'
// import firstIcon from './../../assets/images/serviceIconFirstOne.svg'
// import secondIcon from './../../assets/images/serviceIconSecondOne.svg'
// import thirdIcon from './../../assets/images/serviceIconThirdOne.svg'
// import lastIcon from './../../assets/images/serviceIconLastOne.svg'
export default function SrviceCard({ icon , heading , desc}) {
    return (
    <>
        <div className="SrviceCard">
            <img src={icon}/>
            <div className="service-text">
                <h4>{heading}</h4>
                <p>{desc}</p>
            </div>
            <button>Read more<MdKeyboardDoubleArrowRight /></button>
        </div>
    </>
    )
}
