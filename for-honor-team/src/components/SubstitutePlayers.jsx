import { connect } from 'react-redux'

const SubstitutePlayers = ({substitutePlayers, quitSubstitutePlayers}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="substitutePlayers">
            {
                substitutePlayers.map(p => (
                    <article className='substitute' key={p.id}>
                        <div>
                            <img src={p.photo} alt={p.name}/>
                            <button onClick={() => quitSubstitutePlayers(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    substitutePlayers: state.substitutePlayers
})

const mapDispatchToProps = dispatch => ({
    quitSubstitutePlayers(player) {
        dispatch({
            type: "QUIT_SUBSTITUTE_PLAYER",
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SubstitutePlayers)