// import { PokemonsResponse } from '@/app/pokemons';
// import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';

import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

  const pokemons = data.results.map(pokemon =>  
  ({
    id: '',
    name: pokemon.name,
  })
  )

  return pokemons;
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div>
      {JSON.stringify(pokemons)}
    </div>
  );
}
