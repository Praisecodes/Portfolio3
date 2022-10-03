import { useState } from "react"

export default function Contact(){
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sending, setSending] = useState(false);

    function sendMessage(e){
        e.preventDefault();

        fetch(`https://portfoliopraise.000webhostapp.com/sendemail.php?message=${message}&&name=${name}&&email=${email}`)
        .then(res=>res.json())
        .then((data)=>{console.log(data); setSending(false)})
        .catch((err)=>{console.log(err); setSending(false)});
    }

    return (
        <div className="contact">
            <h1>Contact Me</h1><br /><br />

            <form onSubmit={(e)=>{sendMessage(e); setSending(true)}}>
                <input type="text" placeholder="Full Name" onChange={(e)=>{setName(e.target.value)}} />
                <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
                <textarea name="text" placeholder="Message" onChange={(e)=>{setMessage(e.target.value)}} ></textarea>
                <button type="submit">
                    {(sending)?"Sending...":"Send"}
                </button>
            </form>
        </div>
    )
}