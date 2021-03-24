import React from 'react';
import { connect } from 'react-redux';

const Players = ({players}) => {
    <section>
        <h2>Players</h2>
        <div className="playerContainer">
            {
                players.map(p => (
                    <article className="player">
                        <img src={p.photo} alt={p.name}/>
                        <h3>{p.name}</h3>
                        <div>
                            <button>Titular</button>
                            <button>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
}

const mapStateToProps = state => ({
    players: state.players
})

export default connect(mapStateToProps, mapDispatchToProps)(Players)