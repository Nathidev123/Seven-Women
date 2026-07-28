import {
    FaDove,
    FaBalanceScale,
    FaHandsHelping,
    FaHeart
} from "react-icons/fa";

const BeliefCards = () => {
    return (
        <section className="who-we-are">

            <div className="who-content">

                <div className="who-text">

                    <span className="section-tag">ABOUT US</span>

                    <h1>Who We Are</h1>

                    <p>
                        We are a collective of seven women united by a shared
                        commitment to building peaceful, resilient and inclusive
                        communities across South Africa. Through dialogue,
                        education and community engagement, we work alongside
                        citizens and leaders to transform conflict into
                        opportunities for healing, justice and lasting social
                        change.
                    </p>

                </div>

                <div className="belief-path">
               
                    <div className="belief-step">
                        <FaDove className="belief-icon"/>
                        <div>
                        <h2>Peace</h2>
                        <p>
                            We believe peace begins with dialogue,
                            understanding and mutual respect.
                        </p>
                        </div>
                    </div>

                    <div className="belief-step">
                        <FaBalanceScale className="belief-icon"/>
                        <div>
                        <h2>Justice</h2>
                        <p>
                            We advocate for fairness, dignity and accountability
                            in every community.
                        </p>
                        </div>
                    </div>

                    <div className="belief-step">
                        <FaHandsHelping className="belief-icon"/>
                        <div>
                        <h2>Community</h2>
                        <p>
                            We strengthen communities through collaboration,
                            trust and collective action.
                        </p>
                        </div>
                    </div>

                    <div className="belief-step">
                        <FaHeart className="belief-icon"/>
                        <h2>Healing</h2>
                        <p>
                            We believe lasting change begins with healing
                            individuals, families and communities.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default BeliefCards