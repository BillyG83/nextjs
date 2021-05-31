const PokemonList = () => {
    const pokemon = require('pokemon');
    const allPokemonANames = pokemon.all();

    return(
        <main className="main">
            {
                allPokemonANames ?
                <ul>
                    {
                        allPokemonANames.map((pokemon, i) => {
                            return (
                                <li key={i}>
                                    { pokemon }
                                </li>
                            )
                        })
                    }
                </ul>
                :
                <p>Sorry we can't find any Pokemon</p>
            }
        </main>
    )
}

export default PokemonList