import eightFigures from "../assets/8_FIGURES.png";

const VisionMission = () => {

    return (

        <section className="mission-section">

            <div className="mission-header">

                <span className="section-tag">
                    OUR PURPOSE
                </span>

                <h1>
                    Building Peace Through Conversation
                </h1>

                <p>
                    Lasting peace begins when people gather around the same table,
                    listen with empathy, share ideas openly and work together
                    towards justice, healing and meaningful community action.
                </p>

            </div>


            <div className="conversation-section">

                <div className="orange-blob blob-one"></div>
                <div className="orange-blob blob-two"></div>

                <div className="conversation-image">

                    <img
                        src={eightFigures}
                        alt="Building Peace Through Dialogue"
                    />

                    <div className="conversation-centre">

                        <span className="conversation-label">
                            EVERY VOICE MATTERS
                        </span>

                        <h2>
                            Building Peace
                        </h2>

                        <p>
                            Through Dialogue,<br />
                            Justice & Community Action
                        </p>

                    </div>

                </div>

            </div>


            <div className="mission-grid">

                <article className="purpose-card mission-card">

                    <div className="card-top">

                        <span className="card-number">
                            01
                        </span>

                        <h2>
                            Our Mission
                        </h2>

                    </div>

                    <p>
                        To encourage South Africans to transform anger into
                        constructive action by promoting peaceful protest,
                        collective safety, accountability and community-led
                        peacebuilding while preventing violence and protecting
                        lives.
                    </p>


                </article>


                <article className="purpose-card vision-card">

                    <div className="card-top">

                        <span className="card-number">
                            02
                        </span>

                        <h2>
                            Our Vision
                        </h2>

                    </div>

                    <p>
                        A South Africa where justice and peace coexist; where
                        people's grievances are heard, communities are safe,
                        dignity is protected, leaders are accountable and
                        social change is achieved without violence.
                    </p>

                    

                </article>

            </div>

        </section>

    )

}

export default VisionMission;