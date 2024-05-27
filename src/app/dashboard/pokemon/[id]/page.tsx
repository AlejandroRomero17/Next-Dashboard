// Importamos el tipo Pokemon desde "@/pokemons" y Metadata desde "next"
import { Pokemon } from "@/pokemons";
import { Metadata } from "next";
// Importamos el componente Image desde "next/image"
import Image from "next/image";

// Definimos la interfaz Props que contiene un objeto params con una propiedad id de tipo string
interface Props {
  params: { id: string };
}

// Función asíncrona que genera metadatos para la página del Pokémon
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Llamamos a la función getPokemon para obtener el id y el nombre del Pokémon
    const { id, name } = await getPokemon(params.id);
    // Devolvemos un objeto Metadata con el título y la descripción de la página
    return {
      title: `#${id} - ${name}`,
      description: `Pokemon Page ${name}`,
    }
  } catch (error) {
    return {
      ti
    }
  }

}

// Función asíncrona para obtener los datos de un Pokémon desde la API
const getPokemon = async (id: string): Promise<Pokemon> => {
  // Hacemos una solicitud a la API de Pokémon usando fetch y forzamos el uso de la caché
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,
    {
      cache: 'force-cache' //TODO: Cambiar esto en un futuro
    }
  ).then(response => response.json());
  // Log para verificar el nombre del Pokémon cargado
  console.log('The Pokemon charged is', pokemon.name);
  // Devolvemos los datos del Pokémon
  return pokemon
}

// Componente principal de la página de un Pokémon
export default async function PokemonPage({ params }: Props) {
  // Obtenemos los datos del Pokémon usando su id
  const pokemon = await getPokemon(params.id);

  // Renderizamos la página del Pokémon
  return (
    <div className="flex flex-col items-center mt-5 text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border shadow-lg p-3">
        <div className="w-full mt-2 mb-8">
          <h1 className="px-2 text-xl font-bold capitalize text-slate-700">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ''}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />
            <div className="flex flex-wrap">
              {
                // Mapeamos los movimientos del Pokémon y los mostramos en un párrafo
                pokemon.moves.map(move => (
                  <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                ))
              }
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 px-2">
          <div className="flex flex-col items-start justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg">
            <p className="text-sm text-gray-600">Types</p>
            <div className="flex text-base font-medium text-navy-700">
              {
                // Mapeamos los tipos del Pokémon y los mostramos en un párrafo
                pokemon.types.map(type => (
                  <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col items-start justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="flex text-base font-medium text-navy-700">
              {pokemon.weight}
            </span>
          </div>
          <div className="flex flex-col justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
