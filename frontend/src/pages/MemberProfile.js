import members from "../data/members";
import { useParams } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./MemberProfile.css";

const MemberProfile = () => {
    const { id } = useParams();
    

    const member = members.find(
        (m) => m.id === Number(id)
    );

    if (!member) {
        return (
            <div className="member-not-found">
                <h2>Member not found</h2>
            </div>
        );
    }

    return (
        <main className="member-page">

            

            

            <section className="profile-hero">

                <div className="profile-image-wrapper">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="member-profile-image"
                    />
                </div>

                <div className="profile-info">

                    <h1>{member.name}</h1>

                    <span className="role-pill">
                        {member.role}
                    </span>


                </div>

            </section>

            

            <section className="profile-card">

                <h2>About</h2>

                <p className="member-bio">
                    {member.bio}
                </p>

            </section>

            

            <section className="profile-card">

                <h2>Contact</h2>

                <div className="contact-list">

                    <div className="contact-row">

                        <FaEnvelope className="contact-icon" />

                        <div>

                            <h4>Email</h4>

                            <p>{member.email}</p>

                        </div>

                    </div>

                    <div className="contact-row">

                        <FaPhoneAlt className="contact-icon" />

                        <div>

                            <h4>Phone</h4>

                            <p>{member.phone}</p>

                        </div>

                    </div>

                </div>

            </section>

            
            {member.videos && member.videos.length > 0 && (

                <section className="profile-card">

                    <h2>Featured Interviews</h2>

                    <div className="video-grid">

                        {member.videos.map((video, index) => (

                            <div
                                key={index}
                                className="video-card"
                            >

                                <h3>{video.title}</h3>

                                <iframe
                                    width="100%"
                                    height="315"
                                    loading="lazy"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />

                            </div>

                        ))}

                    </div>

                </section>

            )}

        </main>
    );
};

export default MemberProfile;