import members from "../data/members";
import "./Members.css";
import { useNavigate } from "react-router-dom";

const MemberCards = () => {
    const navigate = useNavigate();

    const handleClick = (member) => {
        navigate(`/member-profile/${member.id}`);
    };

    return (
        <>
            <h1 className="meet-members">
                Meet the Eight Women
            </h1>

            <p className="members-subtitle">
                Every conversation begins with a voice. Click a portrait to
                discover the women leading the movement.
            </p>

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

                        <span className="view-profile">
                            View Profile →
                        </span>
                    </button>
                ))}
            </div>
        </>
    );
};

export default MemberCards;