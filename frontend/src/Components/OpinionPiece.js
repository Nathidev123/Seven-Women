const OpinionPiece = () => {

    const handleClick = () => {
        window.open("/documents/opinion-piece.pdf", "_blank");
    };

    return (

        <section className="opinion-piece">

            <div className="opinion-wrapper">

                <div className="opinion-badge">
                    Peace Initiative
                </div>

                <h2>
                    An Invitation To Choose Peace
                </h2>

                <p className="opinion-lead">
                    Every generation is remembered by the choices it makes during
                    difficult moments. This opinion piece reflects on how South
                    Africans can pursue justice, accountability and meaningful
                    change while protecting the communities we all call home.
                </p>

                <blockquote className="opinion-quote">
                    "Peace is not silence. Peace is choosing dialogue over
                    destruction, courage over fear, and unity over division."
                </blockquote>

                <button
                    className="opinion-btn"
                    onClick={handleClick}
                >
                    Read The Full Opinion Piece →
                </button>

            </div>

        </section>

    );

};

export default OpinionPiece;