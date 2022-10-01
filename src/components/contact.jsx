export default function Contact(){
    return (
        <div className="contact">
            <h1>Contact Me</h1><br /><br />

            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <textarea name="text" placeholder="Message" ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}