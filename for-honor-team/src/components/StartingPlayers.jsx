import { connect } from 'react-redux'
import field from '../img/field.jpg'

const StartingPlayers = ({startingPlayers, quitStartingPlayer}) => (
    <section>
        <h2>Titulares</h2>
        <div className="field">
            {
                startingPlayers.map(p => (
                    <article className='starting' key={p.id}>
                        <div>
                            <img src={p.photo} alt={p.name}/>
                            <button onClick={() => quitStartingPlayer(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
            }
            <img src={field} alt="fighting field" />
        </div>
    </section>
)

const mapStateToProps = state => ({
    startingPlayers: state.startingPlayers
})

const mapDispatchToProps = dispatch => ({
    quitStartingPlayer(player) {
        dispatch({
            type: "QUIT_STARTING_PLAYER",
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StartingPlayers)