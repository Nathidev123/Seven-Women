import members from "../data/members"
import { useNavigate, useParams } from "react-router-dom"
import "../Components/MemberProfile.css"
const MemberProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const member = members.find(
        (m) => m.id === Number(id)
    )

    if(!member){
        return <h2>Member not found</h2>
    }

    return(<>
        <button
         className="back-btn"
        onClick={() => navigate(-1)}
        >
            ← Back
        </button>

        <div className="member-page">
        
        <img
            src={member.image}
            alt={member.name}
            className="member-profile-image"
        />
        <h2 className="name-section">{member.name}</h2>
        <h2>{member.role}</h2>
        <p className="member-bio">{member.bio}</p>

        <h3>Contact</h3>
        <p>{member.email}</p>
        <p>{member.phone}</p>

        <h3>Interviews</h3>

        {member.videos?.map((video, index) => (
            <div key={index} className="member-video">
                <h3>{video.title}</h3>

                <iframe
                    width="100%"
                    height="315"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        ))}
        </div>
            </>)
}

export default MemberProfile