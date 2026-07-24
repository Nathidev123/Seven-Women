//import MemberModal from "./MemberModal";
//import MemberProfile from "./pages/MemberProfile";
import members from "../data/members";
import './Members.css'
import { useNavigate } from "react-router-dom";
const MemberCards = () => {
const navigate = useNavigate();
    
    const handleClick = (member) => {
        navigate(`/member-profile/${member.id}`);
    }


    return (
        <>

            <div className="member-grid">

                {members.map((member) => (

                    <button
                        key={member.id}
                        className="member-card"
                        onClick={() => handleClick(member)}
                    >

                        <img
                            src={member.image}
                            alt={member.name}
                            className="member-image"
                        />

                        <h3>{member.name}</h3>

                        

                    </button>

                ))}

            </div>

        </>
        //<span>{member.role}</span>
    );
};

export default MemberCards;