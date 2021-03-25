import { connect } from 'react-redux'
import { useEffect, createRef } from 'react'

const Players = ({players, startingAdd, addSubstitute}) => {

    const gridPlayer = createRef()

    useEffect(() => {
        setScrollContainer()
        document.addEventListener('click', setScrollContainer)
    }, [])


    //funcion para fijar el tamaño de combatientes
    const setScrollContainer = (desktop = true) => {
        let container = gridPlayer.current
        if(container) {
            const generatedGrid = () => {
                let items = container.getElementsByClassName('player')
                let itemsLength = items.length
                let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

                const getWidth = () => {
                    let n = bp + (itemsLength > bp ? 0.3 : 0)
                    return (itemsLength / n) * 100
                }
                return `
                        display:grid;
                        grid-template-columns: repeat(${itemsLength}, 300px);
                        grid-gap: 1rem;
                        width: ${getWidth()}%;
                       `
            }
            let styles = !desktop && window.matchMedia("(min-width:1024px)").matches ? `display:grid; grid-row-gap:1rem;` : generatedGrid()
            container.setAttribute('style', styles)
        }
    }

    return (
        <section>
            <h2>Team</h2>
            <div className="playersContainer">
                <div ref={gridPlayer} onClick={() => setScrollContainer.bind(this)}>
                    {
                        players.map(p => (
                            <article className='player' key={p.id}>
                                <img src={p.photo} alt={p.name}/>
                                <h3>{p.name}</h3>
                                <div>
                                    <button onClick={() => startingAdd(p)}>Titular</button>
                                    <button onClick={() => addSubstitute(p)}>Suplente</button>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    players: state.players
})

const mapDispatchToProps = dispatch => ({
    startingAdd(player) {
        dispatch({
            type: "ADD_STARTING_PLAYER",
            player
        })
    },
    addSubstitute(player) {
        dispatch({
            type: "ADD_SUBSTITUTE",
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Players)