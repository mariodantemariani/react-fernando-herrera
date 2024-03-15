import { PropTypes } from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <section style={{ height: "200px" }}>
      <h2 className="text-capitalize" ref={pRef}>
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>

      <code>{JSON.stringify({ boxSize })}</code>
    </section>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.arrayOf(PropTypes.string),
};
