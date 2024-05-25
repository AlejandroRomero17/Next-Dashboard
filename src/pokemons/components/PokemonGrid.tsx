import { SimplePokemon } from "../interfaces/simple-pokemon";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}


const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
        {
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/> 
            // <Image
            //   key={pokemon.id}
            //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            //   alt={pokemon.name}
            //   width={100}
            //   height={100}
            // />
          ))
        }

      </div>
  )
}

export default PokemonGrid
