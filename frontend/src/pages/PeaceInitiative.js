import "./PeaceInitiative.css"
import Enyobeni from '../assets/MC.jpg'
import enyobeni21 from "../data/enyobeniData"
import { useNavigate } from "react-router-dom"

const PeaceInitiative = () => {
    const navigate = useNavigate()
    return (
        <main className="peace-page">

        <button
            className="back-btn"
            onClick={() => navigate(-1)}
        >
            ← Back
        </button>
            {/* HERO */}

            <section className="peace-hero">

                <div className="peace-hero-content">

                    <span className="section-tag">
                        Peace Initiative
                    </span>


                    <h1>
                        Remembering The Enyobeni 21
                    </h1>


                    <p>
                        Honouring the lives of the 21 young people
                        who were lost at the Enyobeni tragedy while
                        creating spaces for remembrance, healing and
                        community unity.
                    </p>


                   <button
                    className="peace-button"
                    onClick={() => {
                        document.getElementById("action")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        });
                    }}
                    >
                    Read More
                    </button>


                </div>


                <div className="peace-image">

                    <img src={Enyobeni}
                    alt="Memorial for the Enyobeni 21"/>


                </div>


            </section>



            {/* ABOUT THE 21 */}


            <section className="memorial-section">


                <div className="section-heading">

                    <span className="section-tag">
                        The Enyobeni 21
                    </span>


                    <h2>
                        Remembering lives, not just numbers
                    </h2>


                    <p>
                        Behind every number was a person with dreams,
                        family, friendships and a future ahead of them.
                        This initiative exists to ensure their stories
                        continue to be remembered.
                    </p>

                </div>



                <div className="memory-grid">

{
    enyobeni21.map((person)=>(
        
        <div 
            className="memory-card"
            key={person.id}
        >

            <h3>
                {person.id}
            </h3>

            <h4>
                {person.name}
            </h4>

            <p>
                Born: {person.dateOfBirth}
            </p>

        </div>

    ))
}

</div>


            </section>

            {/* CALL TO ACTION */}
            <section className="story-section" 
            id="action">


                <div className="story-header">
                <span className="section-tag">
                        A Call To Action 
                        </span>
                    

                    <div className="story-divider">
                    
                    </div>

                    <div className="story-content">
                    <p>This concept note has been drafted by Eight Women, who have chosen to accept responsibility for their role in responding to this tragedy. Two of the women grew up in the Eastern Cape and can testify to the love, guidance, and support they received from their families, communities, and educational institutions—support that helped shape different futures for them. The remaining six women, from Mpumalanga, Gauteng, North West, the Free State, and the Western Cape, have likewise dedicated themselves to strengthening the communities from which they come.

Together, the Eight Women have worked across social, cultural, and legal spheres. They understand that none of them is self-made. Each is the product of countless acts of care, mentorship, opportunity, and intervention. They also recognise that their own life experiences are exceptions rather than the norm. Too many young people in South Africa are born into circumstances where unemployment, alcohol abuse, substance dependency, and despair become more likely outcomes than opportunity and hope.

As they come together, the Eight Women acknowledge that meaningful change requires more than individual success. It requires bringing others along, creating opportunities for collective healing, and working alongside communities to build a future in which every young person has the chance to thrive.

The Eight Women approached the families of the children who died at Enyobeni with a request to work alongside them. At the heart of this partnership is the belief that every African life is deeply significant and that every death is a loss not only to a family, but to an entire community. Together, they seek to honour the lives of the Enyobeni 21 by ensuring that they are remembered not only for the tragedy that claimed them, but for the futures they deserved to live.
</p>
                
                </div>
                </div>
            </section>



            


            <section className="peace-cta">
            <div className="peace-cta-content">
                
                <h2>
                    Continue The Journey Of Healing
                </h2>


                <p>
                    Join us in remembering the Enyobeni 21 and
                    building communities founded on compassion,
                    understanding and peace.
                </p>


                <button onClick={() => navigate('/get-involved')}>
                    Support The Initiative
                </button>
            </div>

            </section>


        </main>
    )
}


export default PeaceInitiative