import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "animate.css";

const CharactersByHero = ({ characters, alter_ego }) => {
  return characters === alter_ego ? (
    <></>
  ) : (
    <p className="card-text">{characters}</p>
  );
};

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  const heroUrl = `/hero/${id}`;

  ///const charactersByHero = <p className="card-text">{characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card ms-3" style={{ maxWidth: 540 }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {/* {alter_ego !== characters && charactersByHero} */}
              <CharactersByHero characters={characters} alter_ego={alter_ego} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={heroUrl}>Más...</Link>
              {/* <button className="btn btn-outline-primary mt-5" >Ver más...</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CharactersByHero.propTypes = {
  characters: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
};
