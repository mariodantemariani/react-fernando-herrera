import { startLoadingPokemons, setPokemons } from "./PokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //   // TODO: realizar petición http con fetch
    //   const resp = await fetch(
    //     `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    //   );
    //   const data = await resp.json();
    //   //console.log(data);
    //   // const { data } = await pokemonApi.get(
    //   //   `/pokemon?limit=10&offset=${page * 10}`
    //   // );

    //   dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    // };
    //TODO: usando axions
    const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    const { data } = resp;
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
