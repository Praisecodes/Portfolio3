import Html from "../assets/html.svg"
import Css from "../assets/css.svg"
import JavaScript from "../assets/javascript.svg"
import Php from "../assets/php.svg"
import sql from "../assets/sql.svg"
import cpp from "../assets/cpp.svg"
import {FaDotCircle} from "react-icons/fa"

export default function Skills(){
    return (
        <div className="skills">
            <h1>Skills</h1><br />
            <p>What my skill include</p><br /><br />

            <div className="skillset">
                <div className="skill">
                    <div className="writeandimg">
                        <img src={Html} alt="" />
                        <h3>HTML</h3>
                    </div>
                </div>

                <div className="skill">
                    <div className="writeandimg">
                        <img src={Css} alt="" />
                        <h3>CSS</h3>
                    </div>
                </div>

                <div className="skill">
                    <div className="writeandimg">
                        <img src={JavaScript} alt="" />
                        <h3>JavaScript</h3>
                    </div>
                </div>

                <div className="skill">
                    <div className="writeandimg">
                        <img src={Php} alt="" />
                        <h3>PHP</h3>
                    </div>
                </div>

                <div className="skill">
                    <div className="writeandimg">
                        <img src={sql} alt="" />
                        <h3>SQL</h3>
                    </div>
                </div>

                <div className="skill">
                    <div className="writeandimg">
                        <img src={cpp} alt="" />
                        <h3>C++</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}