import { useNavigate } from "react-router-dom"
const OpinionPiece = () => {
const navigate = useNavigate() 

    const handleClick = () => {
        navigate('/opinion-piece-page')
    }
    return(<>
       <section className="opinion-piece">

            <div className="opinion-content">

                <div className="opinion-text">

                    <span className="section-tag">Peace Initiative</span>
                    <h2>Promoting Peace Through Community</h2>

                    <p>
                        We all want to see a stronger, safer and more united South Africa. 
                        While we have every right to raise our voices against injustice, 
                        unemployment and inequality, we also have a shared responsibility 
                        to protect our communities and our future. 
                        <br></br>
                        This opinion piece explores how we can demand accountability, pursue meaningful 
                        change and stand for justice without allowing anger to turn into destruction. 
                         Together, we can build the South Africa we want by choosing peace, unity 
                         and collective action.

                    </p>
                    <button className="mission-btn"
                    onClick={handleClick}>
                    Explore the Full Article →</button>
                 </div> 
                </div> 
                </section> 
    </>)
}

export default OpinionPiece