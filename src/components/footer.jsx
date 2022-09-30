import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from "react-icons/fa"

export default function Footer(){
    return (
        <div className="footer">
            <h2>PraiseC<span>o</span>des</h2>
            <p>Copyright&copy;2022</p>
            <div className="socials">
                <a href="https://web.facebook.com/praisecodes"><i><FaFacebookF /></i></a>
                <a href="https://twitter.com/PraiseCodes"><i><FaTwitter /></i></a>
                <a href="https://www.linkedin.com/in/okechukwu-praise-okeypraise-97a961239/"><i><FaLinkedin /></i></a>
                <a href="https://www.instagram.com/praisecodes/"><i><FaInstagramSquare /></i></a>
            </div>
        </div>
    )
}