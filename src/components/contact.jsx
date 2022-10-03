import { useState } from "react"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify";

export default function Contact(){
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sending, setSending] = useState(false);

    function sendMessage(e){
        e.preventDefault();
        e.target.disabled = true;

        fetch(`https://portfoliopraise.000webhostapp.com/sendemail.php?message=${message}&&name=${name}&&email=${email}`)
        .then(res=>res.json())
        .then((data)=>{
            setSending(false);
            console.log(data);
            e.target.disabled = false;
            if(data == "Success!!"){
                toast.success("Sent!!", {
                    draggable: false,
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            else{
                toast.error("Something Went Wrong!!", {
                    draggable: false,
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
        .catch((err)=>{console.log(err); setSending(false); toast.error("An Error Occured!", {
            draggable: false,
            position: toast.POSITION.TOP_RIGHT
        })});
    }

    return (
        <div className="contact">
            <ToastContainer />
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