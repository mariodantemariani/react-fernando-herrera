import { useFetch, useCounter } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const url = `https://pokeapi.co/api/v2/pokemon/${counter}/`;
  const { data, isLoading, hasError, error } = useFetch(url);

  return (
    <>
      MultipleCustomHooks
      <h1>Informacion del pokemon</h1>
      <hr />
      {/* {isLoading ? <LoadingMessage /> : <PokemonCard {...data} />} */}
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data?.id}
          name={data?.name}
          sprites={[
            data.sprites?.front_default,
            data.sprites?.front_shiny,
            data.sprites?.back_default,
            data.sprites?.back_shiny,
          ]}
        />
      )}
      {hasError && <div>{error.message}</div>}
      <button
        disabled={counter === 1}
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrement(1) : null)}
      >
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment(1)}>
        Siguiente
      </button>
    </>
  );
};
