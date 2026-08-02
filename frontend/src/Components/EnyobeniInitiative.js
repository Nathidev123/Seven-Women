import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Enyobeni21 from "../assets/Enyobeni21.png";


const EnyobeniInitiative = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    

    const handleClick = () => {

        setIsLoading(true);

        setTimeout(() => {
            navigate("/peace-initiative");
        }, 250);

};
     return (
    <>
        {isLoading && (
            <div className="page-loading">
                
            </div>
        )}

        <section className="initiative-piece">

            <div className="initiative-content">

                <div className="initiative-image">
                    <img
                        src={Enyobeni21}
                        alt="Remembering the Enyobeni 21"
                    />
                </div>

                <div className="initiative-text">

                    <span className="section-tag">
                        Peace Initiative
                    </span>

                    <h2>
                        Remembering the Enyobeni 21
                    </h2>

                    <p>
                        Twenty-one young lives were lost...
                    </p>

                    <button
                        className="mission-btn1"
                        onClick={handleClick}
                    >
                        Explore the Initiative →
                    </button>

                </div>

            </div>

        </section>

    </>
);
};

export default EnyobeniInitiative;