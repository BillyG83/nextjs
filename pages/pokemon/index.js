import { useRouter } from 'next/router'
import styles from './Pokemon.module.css'

function PokemonList() {
	const pokemon = require('pokemon');
	const allPokemonANames = pokemon.all();
	const router = useRouter()

	const handleSelection = function(event) {
		event.preventDefault()
		if(!event.target.id) return
		router.push(`pokemon/${event.target.id}`)
	}

	return(
		<div className={styles.container}>
			<main className={styles.main}>
				{
					allPokemonANames ?
						<ul className={styles.pokeList}>
							{
								allPokemonANames.map((pokemon, i) => {
									return (
										<li key={i}>
											<p>{pokemon}</p>
											<button 
												alt="click to view the online Pokedex" 
												id={pokemon}
												onClick={handleSelection} 
												type="button"
												>
												Catch em!
											</button>
										</li>
									)
								})
							}
						</ul>
						:
						<p>Sorry we can't find any Pokemon</p>
					}
			</main>
		</div>
	)
}

export default PokemonList