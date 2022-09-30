import AboutImage from "../assets/praisecodes.png"
import Resume from "../assets/Resume.pdf"

export default function About(){
    return (
        <div className="about">
            <h1>About Me</h1><br /><br />
            <div className="innerDiv">
                <div className="image">
                    <img src={AboutImage} alt="" />
                </div>
                <div className="info">
                    <h2>Hi There!</h2><br />
                    <p>Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished,<br />
                    It helps show how text will look once a piece of content is finished, during the planning phase.</p>
                    <br /><br /><br />
                    <a href={Resume} download="Praise Codes Resume.pdf">Download CV</a>
                </div>
            </div>
        </div>
    )
}