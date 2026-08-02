import {
    FaDove,
    FaBalanceScale,
    FaHandsHelping,
    FaHeart
} from "react-icons/fa";



const BeliefCards = () => {

    const beliefs = [
        {
            number: "01",
            icon: <FaDove />,
            title: "Peace",
            text: "We believe peace begins with dialogue, understanding and mutual respect."
        },
        {
            number: "02",
            icon: <FaBalanceScale />,
            title: "Justice",
            text: "We advocate for fairness, dignity and accountability in every community."
        },
        {
            number: "03",
            icon: <FaHandsHelping />,
            title: "Community",
            text: "We strengthen communities through collaboration, trust and collective action."
        },
        {
            number: "04",
            icon: <FaHeart />,
            title: "Healing",
            text: "We believe lasting change begins with healing individuals, families and communities."
        }
    ];

    return (

        <section className="who-we-are">

            <div className="who-content">

                <div className="who-text">

                    <span className="section-tag">
                        ABOUT US
                    </span>

                    <h1>
                        Building Peace,<br />
                        One Community at a Time.
                    </h1>

                    <p>
                        We are a collective of eight women united by a shared
                        commitment to building peaceful, resilient and inclusive
                        communities across South Africa. Through dialogue,
                        education and community engagement, we work alongside
                        citizens and leaders to transform conflict into
                        opportunities for healing, justice and lasting social
                        change.
                    </p>

                </div>

                <div className="belief-timeline">

                    {beliefs.map((belief) => (

                        <div
                            key={belief.number}
                            className="belief-step"
                        >

                            <span className="belief-number">
                                {belief.number}
                            </span>

                            <div className="belief-icon">

                                {belief.icon}

                            </div>

                            <div className="belief-info">

                                <h2>{belief.title}</h2>

                                <p>{belief.text}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
};

export default BeliefCards;