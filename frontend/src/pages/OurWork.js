import eight from '../assets/8women.png'
import GetInvolvedComponent from '../Components/GetInvolvedComponent'
import './OurWork.css'
const OurWork = () => {

    return(<>
            
            <section className="our-work-container">

    <div className="our-work-section">

        <div className="eight-div">
            <img src={eight} alt="Eight Women" />
        </div>

        <div className="our-work-text">
            <h1>Driving Change. Inspiring Hope.</h1>

            <p>
                The Eight Women Initiative exists to challenge injustice,
                amplify unheard voices, and build a future rooted in
                equality, dignity, and peace. By bringing together
                experienced leaders, advocates, and changemakers, we work
                alongside communities to confront today's challenges while
                shaping a stronger, more inclusive South Africa for
                generations to come.
            </p>
        </div>

    </div>

</section>

            <section className="pillars-section">

        <div className="pillars-heading">
          <h1>What We Stand For</h1>
          <p>
            Our work is guided by a commitment to justice, equality, peace,
            and community empowerment. These principles shape every initiative
            we undertake and every partnership we build.
          </p>
        </div>

        <div className="pillars-grid">

          <div className="pillar-div">
            <h2>Justice and Human Dignity</h2>
            <p>
              Defending constitutional rights while protecting the dignity
              and safety of every person.
            </p>
          </div>

          <div className="pillar-div">
            <h2>Peacebuilding</h2>
            <p>
              Promoting dialogue, de-escalation, and peaceful solutions to
              conflict rather than violence.
            </p>
          </div>

          <div className="pillar-div">
            <h2>Community Safety</h2>
            <p>
              Building safer communities by preventing violence and
              encouraging collective responsibility.
            </p>
          </div>

          <div className="pillar-div">
            <h2>Healing and Reconciliation</h2>
            <p>
              Addressing historical and social trauma to create lasting
              change.
            </p>
          </div>

          <div className="pillar-div">
            <h2>Advocacy and Civic Engagement</h2>
            <p>
              Encouraging communities to organize, speak out, and participate
              in democracy responsibly.
            </p>
          </div>

          <div className="pillar-div">
            <h2>Equality and Inclusion</h2>
            <p>
              Rejecting discrimination, dehumanization, and violence while
              promoting an inclusive society.
            </p>
          </div>

          <div className="pillar-div">
            <h2>Collective Safety and Justice</h2>
            <p>
              Peace and justice must exist together to build a stronger South
              Africa.
            </p>
          </div>

          <div className="pillar-div">
            <h2>Accountability</h2>
            <p>
              Calling for transparent leadership and public institutions that
              serve people fairly.
            </p>
          </div>

        </div>

      </section>
    <GetInvolvedComponent />


            </>)
}


export default OurWork