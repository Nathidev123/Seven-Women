import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEventFormContext } from "../hooks/useEventFormContext";

const FormTwo = () => {
    const { formData, dispatch2 } = useEventFormContext();

    const navigate = useNavigate();

    const [emptyFields, setEmptyFields] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        dispatch2({
            type: "UPDATE_FIELD",
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        dispatch2({
            type: "UPDATE_FIELD",
            field: "image",
            value: file
        });
    };

    const handleSubmit = () => {
        navigate("/formThree");
    };

    const handleBackBtn = () => {
        navigate("/formOne");
    };

    return (
        <div className="event-form-page">

            <div className="event-form-card">

                <button
                    className="back-btn"
                    onClick={handleBackBtn}
                >
                    ← Back
                </button>

                <form>

                    <div className="form-header">

                        <span className="step">
                            Step 2 of 4
                        </span>

                        <h1>
                            Define your event's purpose and identity.
                        </h1>

                        <p>
                            Let attendees know how they'll participate, who the event is for, and what your event represents.
                        </p>

                    </div>

                    <label htmlFor="event_format">
                        Event Format
                    </label>

                    <select
                        id="event_format"
                        name="event_format"
                        value={formData.event_format}
                        onChange={handleChange}
                        className={emptyFields.includes("event_format") ? "error" : ""}
                    >
                        <option value="">Select Event Format</option>
                        <option value="In Person">In Person</option>
                        <option value="Online">Online</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>

                    <br />

                    <label htmlFor="meeting_link">
                        Meeting Link (Optional)
                    </label>

                    <input
                        id="meeting_link"
                        type="url"
                        placeholder="https://..."
                        name="meeting_link"
                        value={formData.meeting_link}
                        onChange={handleChange}
                    />

                    <br />

                    <label htmlFor="purpose">
                        Event Purpose
                    </label>

                    <select
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className={emptyFields.includes("purpose") ? "error" : ""}
                    >
                        <option value="">Select Purpose</option>
                        <option value="Peacebuilding">Peacebuilding</option>
                        <option value="Community Dialogue">Community Dialogue</option>
                        <option value="Youth Empowerment">Youth Empowerment</option>
                        <option value="Women's Empowerment">Women's Empowerment</option>
                        <option value="Healing & Reconciliation">Healing & Reconciliation</option>
                        <option value="Remembrance & Memorial">Remembrance & Memorial</option>
                        <option value="Violence Prevention">Violence Prevention</option>
                        <option value="Education & Awareness">Education & Awareness</option>
                        <option value="Leadership Development">Leadership Development</option>
                        <option value="Community Service">Community Service</option>
                        <option value="Fundraising">Fundraising</option>
                        <option value="Networking">Networking</option>
                    </select>

                    <br />

                    <label htmlFor="audience">
                        Intended Audience
                    </label>

                    <select
                        id="audience"
                        name="audience"
                        value={formData.audience}
                        onChange={handleChange}
                        className={emptyFields.includes("audience") ? "error" : ""}
                    >
                        <option value="">Select Audience</option>
                        <option value="Everyone">Everyone</option>
                        <option value="Children">Children</option>
                        <option value="Youth">Youth</option>
                        <option value="Adults">Adults</option>
                        <option value="Women">Women</option>
                        <option value="Men">Men</option>
                        <option value="Families">Families</option>
                        <option value="Parents & Guardians">Parents & Guardians</option>
                        <option value="Students">Students</option>
                        <option value="Educators">Educators</option>
                        <option value="Community Leaders">Community Leaders</option>
                        <option value="Faith Communities">Faith Communities</option>
                        <option value="Volunteers">Volunteers</option>
                        <option value="Professionals">Professionals</option>
                    </select>

                    <br />

                    <label htmlFor="image">
                        Event Image
                    </label>

                    <input
                        id="image"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />

                    <br />

                </form>

                <button
                    className="form-btn"
                    onClick={handleSubmit}
                >
                    Next →
                </button>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

            </div>

        </div>
    );
};

export default FormTwo;