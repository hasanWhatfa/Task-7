import './HeroTwo.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import BlueLeft from './../../assets/images/element.webp'
export default function HeroTwo({headH2 , desti}) {
  return (
    <div className="HeroTwo position-relative">
        <div className="HeroTwoContent position-absolute">
            <h2>{headH2}</h2>
            <h4><span className="sourc">Home</span> <MdKeyboardArrowRight /> <span className="desti">{desti}</span></h4>
        </div>
        <div className='blueBackground position-absolute w-100 h-100'></div>
        <img src={BlueLeft} className='position-absolute BlueLeft'/>
    </div>
  )
}
