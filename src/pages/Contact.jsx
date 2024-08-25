import {useState} from "react"
import Bottom from "../assets/bottom.png"
import Footer from "../components/Footer";
import "./Contact.css"
export default function Contact(){
const [Name,setName]=useState("");
const [Email,setEmail]=useState("");
const [Phone,setPhone]=useState("");
    return(
        <div className="contactpage">
            <h1>CONTACT</h1>
<div>
    <form method="">
        <input type="text" value={Name} onChange={()=>{setName(Name)}} placeholder="Name:" />
        <input type="email" value={Email} onChange={()=>{setEmail(Email)}} placeholder="Email:" />
        <input type="phone" value={Phone} onChange={()=>{setPhone(Phone)}} placeholder="Phone Number:" />



        <textarea name="message" id="message" rows={12} cols={12}></textarea>
        <input type="submit" value="Send Message" />
    </form>
</div>
<Footer/>
<img src={Bottom} alt="" />
        </div>
    )
}