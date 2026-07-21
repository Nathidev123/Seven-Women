import { useNavigate } from "react-router-dom"


const OpinionPiecePage = () => {
    const navigate = useNavigate()
    return(
        
        <div className="pdf-page">
         <button
         className="back-btn"
        onClick={() => navigate(-1)}
        >
            ← Back
        </button>
        <iframe 
        src="/documents/opinion-piece.pdf"
        title="Opinion Piece"
        width="100%"
        height="900"
        />
       
    </div>
    )
    
}

export default OpinionPiecePage