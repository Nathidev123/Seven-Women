import eight from '../assets/horizontaleight.png';
import { FaComments } from "react-icons/fa";
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
                        src={eight}
                        alt="Building Peace Through Dialogue"
                    />
                    </div>
                   

            </div>
            
               <h1 className="vm-heading">Vision & Mission</h1>

        <div className="conversation-flow">

            <div className="speech">

                <span className="speech-tag">01</span>

                <h2>Our Mission</h2>

                <p>
                    To encourage South Africans to transform anger into
                    constructive action by promoting peaceful protest,
                    collective safety, accountability and community-led
                    peacebuilding while preventing violence and protecting
                    lives.
                </p>

            </div>

            <div className="dialogue-line">
                <div className="dialogue-circle">
                     <FaComments />
                </div>
            </div>

            <div className="speech">

                <span className="speech-tag">02</span>

                <h2>Our Vision</h2>

                <p>
                    A South Africa where justice and peace coexist; where
                    people's grievances are heard, communities are safe,
                    dignity is protected, leaders are accountable and
                    social change is achieved without violence.
                </p>

            </div>

        </div>

        
        </section>
    )

}

export default VisionMission;