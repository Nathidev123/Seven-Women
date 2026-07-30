import './WhatWeDo.css'
import { useNavigate } from 'react-router-dom'
const WhatWeDo = () => {
const navigate = useNavigate()

    const handleClick = () => {
        navigate('/our-work')
    }
    return(<>
            
            <section className="what-we-do">
            <div className="header1">
            <h1>What We Do</h1>
            <p>The Eight Women Initiative is dedicated to advancing justice, equality, 
                and human dignity through advocacy, legal action, community engagement, 
                and public education. We amplify marginalized voices, influence policy, 
                and create spaces for dialogue and collaboration to drive meaningful social 
                change across South Africa.</p>

                <button onClick={handleClick}>Discover More</button>
            </div>

            
            </section>
            </>)
}



export default WhatWeDo