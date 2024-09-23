import image from "./img.jpg"
import { FaLongArrowAltRight } from "react-icons/fa"
export function HeroSection(){
return (
    <main className="hero-section">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1>Know all about the world</h1>
                <p>Discover about each nation its history culture sort and search anything you need in this countrypedia</p>
                <button>Start exploring <FaLongArrowAltRight></FaLongArrowAltRight></button>
            </div>
            <div className="hero-image" >
                <img src={image}  alt="" width="400" height="250" / >
            </div>
        </div>
    </main>
)}