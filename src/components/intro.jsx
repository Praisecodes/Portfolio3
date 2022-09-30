import {FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare} from "react-icons/fa"
import IntroPic from "../assets/praise.png"

export default function Intro(){
    return (
        <div className="intro">
            <div className="writeUp">
                <div className="socials">
                    <a href="https://facebook.com/PraiseCodes"><i><FaFacebookF /></i></a>
                    <a href="https://twitter.com/PraiseCodes"><i><FaTwitter /></i></a>
                    <a href="https://linkedin.com"><i><FaLinkedin /></i></a>
                    <a href="https://instagram.com"><i><FaInstagramSquare /></i></a>
                </div> <br /><br />
                <h1>I am Okeypraise Junior</h1><br />
                <p>I am Okeypraise Junior<br />
                A fullstack web developer with 2 years experience as a software developer.</p> <br />
                <button>Hire Me</button>
            </div>
            <div className="image">
                <img src={IntroPic} alt="" />
            </div>
        </div>
    )
}