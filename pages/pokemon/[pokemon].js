import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

// mock API call to stop annoying API in dev mode
import mockApiSuccessfulCall from './dummyData.js'

export default function Pokemon({ pokeData }) {
	console.log(pokeData);
	const router = useRouter()
	const { pokemon } = router.query

	const myLoader = function() {
		return `${pokeData.sprites.front_default}?w=250px&q=100`
	}
	
	return (
		<div>
			<Head>
				{/* SEO meta */}
				<title>
					{pokemon}, a {pokeData.types[0].type.name} type Pokemon, is number {pokeData.order} in the Pokedex
				</title>
				<meta name='description' content={`Welcome to the online Pokedex page for ${pokemon}. Here you can find out lots of cool information about this and your other favorite Pokemon`} />

				{/* Social meta */}
				<meta property="og:title" content={`Hey! Checkout ${pokemon}, a ${pokeData.types[0].type.name} type Pokemon, is number ${pokeData.order} in the Pokedex`} />
				<meta property="og:description" content={`Welcome to the online Pokedex page for ${pokemon}. Here you can find out lots of cool information about this and your other favorite Pokemon`} />
				<meta property="og:type" content="profile" />
				<meta property="og:url" content={`/pokemon/${router.query}`} />
				<meta property="og:image" content={pokeData.sprites.front_default} />

				{/* Twitter meta */}
				<meta name="twitter:title" content={`Hey! Checkout ${pokemon}, a ${pokeData.types[0].type.name} type Pokemon, is number ${pokeData.order} in the Pokedex`} />
				<meta property="twitter:description" content={`Welcome to the online Pokedex page for ${pokemon}. Here you can find out lots of cool information about this and your other favorite Pokemon`} />
				<meta property="twitter:url" content={`/pokemon/${router.query}`} />
				<meta property="twitter:image" content={pokeData.sprites.front_default} />
			</Head>
			
			<h1>I caught { pokemon }</h1>
			<Image 
				src='/img/loading.gif' 
				loader={myLoader}
				alt={`${pokemon}, a ${pokeData.types[0].type.name} type Pokemon`} 
				width={250} 
				height={250}
				layout="intrinsic"
			/>
			<h2>{pokemon} is No.{pokeData.order} in the Pokedex</h2>

			<h3>Types</h3>
			{
				pokeData.types.map((type, i) => {
					return <span key={i}>{type.type.name} </span>
				})
			}

			<h3>Info</h3>
			<ul>
				<li>Base XP: {pokeData.base_experience}</li>
				<li>height: {pokeData.height / 10}meters</li>
				<li>weight: {pokeData.weight / 10}Kilograms</li>
				<li>Total moves: {pokeData.moves.length}</li>
			</ul>

			<h3>Stats</h3>
			<ul>
				{
					pokeData.stats.map((stat, i) => {
						return (
							<li key={i}>
								{stat.stat.name.replace(/-/g, " ")} = {stat.base_stat}
							</li>
						)
					})
				}
			</ul>
				
		</div>
	)
}

export async function getStaticProps({ params }) {
    if(!params) return
    let data = {}

    // mock data, remove
    data = mockApiSuccessfulCall
    
    // await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon.toLowerCase()}`)
    // .then(response => response.json())
    // .then(requestedPokemon => { return data = requestedPokemon})

    return { props: { pokeData: data } }
}

export async function getStaticPaths() {
    const pokemon = require('pokemon');
    const allPokemonANames = pokemon.all();

    const paths = allPokemonANames.map(pokemon => {
        return { params: { pokemon: pokemon } }
    })

    return {
        paths,
        fallback: false
    }
}