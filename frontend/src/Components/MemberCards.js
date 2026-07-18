import { useState } from "react";
import MemberModal from "./MemberModal";
import members from "../data/members";

const MemberCards = () => {

    const [selectedMember, setSelectedMember] = useState(null);

    const handleClick = (member) => {
        setSelectedMember(member);
    };

    const closeModal = () => {
        setSelectedMember(null);
    };

    return (
        <>

            <div className="member-grid">

                {members.map((member) => (

                    <div
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

                        <span>{member.role}</span>

                    </div>

                ))}

            </div>

            {selectedMember && (

                <MemberModal
                    member={selectedMember}
                    closeModal={closeModal}
                />

            )}

        </>
    );
};

export default MemberCards;