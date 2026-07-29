import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import './GetInvolved.css' 
const GetInvolved = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(null)
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        
    //EmailJS service ID, template ID, public key
    const serviceId = 'service_gww7xur'
    const templateId = 'template_tqe19wu'
    const publicKey = 'eCS5a5yRYSaLDbX4R'

    //Creating object that contains dynamic template params
    const templateParams = {
        from_name: name, 
        from_email: email,
        phone: phoneNumber,
        message: message,
        to_name: 'Eight Women'
    }

    //Sending email with EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent successfully', response)
        setAlert({ type: 'success', message: 'Your message has been sent. We will get back to you shortly'})
        setName('')
        setEmail('')
        setMessage('')
        setPhoneNumber('')
        setLoading(false);

        setTimeout(() => {
            setAlert(null);
        }, 5000);
    })
    .catch((error) => {
        console.error('Error sending email:', error)
        setLoading(false);
        setAlert({ type: 'error', message: 'Failed to send email' })
        
    })

}    

    return(<>
            <section className='get-involved-container'>
            <div className='header'>
            <h1>Ways To Get Involved</h1>
            <p>Thank you for your interest in getting involved with Eight Women. 
                Every act of support, whether through your time, skills, resources, 
                or advocacy, strengthens our mission and helps create meaningful change. 
                We welcome your participation and look forward to making an impact together.
                {/*  to have a nice background image behind this   */}
            </p>

            </div>
            </section>

            <section className='ways-involved-section'>
                <div className='ways-involved'>
                <h1>Volunteer</h1>
               
                <p>
                Volunteers are at the heart of our work. Whether you can give a few hours, support us regularly, or contribute your 
                skills to a specific project, your time and commitment make a meaningful difference. Every contribution helps us 
                strengthen our programmes and create lasting impact in the communities we serve.
                </p>


                <h1>Become A Partner Or Sponsor</h1>

                <p>
                Meaningful change is built through collaboration. By becoming a partner or sponsor, you help us expand our reach, 
                strengthen our programmes, and create lasting opportunities for the communities we serve. Whether through financial 
                support, in-kind contributions, or strategic partnerships, your organisation can play a vital role in advancing our 
                mission and making a lasting impact.
                </p>


                <h1>Attend Our Events</h1>
                <p>Our events provide opportunities to learn, connect, and be part of meaningful conversations that inspire positive 
                    change. Whether you join a community dialogue, workshop, remembrance, or public gathering, your presence helps strengthen 
                    our collective voice and supports our mission of building more compassionate, inclusive communities.</p>
                </div>
            
            </section>

            <section className='donate-container'>
                <div className='donate-div'>
                <h1>Make A Donation</h1>
                <p>Every donation, no matter the size, helps us continue our work and expand our impact. Your generosity supports our programmes,
                     community initiatives, advocacy efforts, and opportunities for healing and empowerment. Together, we can create lasting change 
                     and build stronger, more resilient communities for future generations.</p>
                </div>
            </section>

            <section className='get-involved'>
            <div className='involved'>
            <h1>Get Involved With Eight Women</h1>
            <p>
            Whether you'd like to volunteer, become a partner or sponsor, attend our events, or support our work through a donation, we'd be 
            delighted to hear from you. Complete the form below, and we'll be in touch to discuss how you can become part of the Eight Women 
            community. We look forward to welcoming you.
            </p>
            </div>

           <div className="contact-details">

    <div className="contact-item">
        <FaPhoneAlt className="contact-icon" />
        <div>
            <h3>Call Us</h3>
            <a href='tel:0815556358'>0815556358</a>
        </div>
    </div>

    <div className="contact-item">
        <MdEmail className="contact-icon" />
        <div>
            <h3>Email Us</h3>
            <p>eightwomen@icloud.com</p>
        </div>
    </div>

    <div className="contact-item">
        <IoLocationSharp className="contact-icon" />
        <div>
            <h3>Visit Us</h3>
            {/* when get real address will link to google maps    */}
            <p>
                Second Floor Orange Drive, National Office,
                Block C, Braamfontein, Johannesburg 1756
            </p>
        </div>
    </div>

</div>
            </section>

            <section className='email-container'>

            <div className='email-form'>
            <form onSubmit={handleSubmit} className="emailForm">
            <h1><strong>Contact Us</strong></h1>
            <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <input 
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input 
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            />
            <textarea
            cols="30"
            placeholder="Your Message"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required>
            
            </textarea>
            <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
        </button>
            {alert && (
                <div className={`alert alert-${alert.type}`}>
                    {alert.message}
                </div>
            )}
            
            
        </form>
            </div>
            </section>

            </>)
}


export default GetInvolved