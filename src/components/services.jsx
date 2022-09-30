import Frontend from "../assets/frontend.svg"
import Backend from "../assets/backend.svg"
import Fullstack from "../assets/fullstack.svg"

export default function Services(){
    return(
        <div className="services">
            <div className="writeup">
                <div className="title">
                    <p>SERVICES</p>
                    <h1>My Services</h1>
                </div><br />
                <div className="info">
                Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. <br />
                It helps show how text will look once a piece of content is finished, during the planning phase.
                </div>
            </div> <br /><br />
            <div className="cards">
                <div className="card normal">
                    <img src={Frontend} alt="" /><br />
                    <h2>Frontend Development</h2><br />
                    <p>Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit.</p>
                </div>
                <div className="card standOut">
                    <img src={Fullstack} alt="" /><br />
                    <h2>Fullstack Web Development</h2><br />
                    <p>Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit.</p>
                </div>
                <div className="card normal">
                    <img src={Backend} alt="" /><br />
                    <h2>Backend Development</h2><br />
                    <p>Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit.</p>
                </div>
            </div>
        </div>
    )
}