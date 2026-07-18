import "./PeaceInitiative.css"
import Enyobeni from '../assets/MC.jpg'
import enyobeni21 from "../data/enyobeniData"

const PeaceInitiative = () => {

    return (
        <main className="peace-page">


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


                    <button className="peace-button">
                        Learn Their Story
                    </button>


                </div>


                <div className="peace-image">

                    <img src={Enyobeni}
                    alt="Enyobeni Memorial Image"/>


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



            {/* PURPOSE */}



            <section className="purpose-section">


                <div className="purpose-content">


                    <h2>
                        Why We Are Here
                    </h2>


                    <p>
                        The Enyobeni 21 Peace Initiative was created
                        to provide a platform for remembrance,
                        healing and meaningful conversations within
                        communities.
                    </p>


                    <p>
                        Through unity, dialogue and compassion,
                        the initiative seeks to honour those lost
                        while supporting families and encouraging
                        safer communities.
                    </p>


                </div>



            </section>


            {/* CALL TO ACTION */}


            <section className="peace-cta">


                <h2>
                    Continue The Journey Of Healing
                </h2>


                <p>
                    Join us in remembering the Enyobeni 21 and
                    building communities founded on compassion,
                    understanding and peace.
                </p>


                <button>
                    Support The Initiative
                </button>


            </section>


        </main>
    )
}


export default PeaceInitiative