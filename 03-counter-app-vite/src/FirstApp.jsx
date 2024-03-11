import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle + 1}</h2>
      <p>Soy un subtitulo</p>
    </>
  );
};

FirstApp.propTypes = {
  subTitle: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subTitle: 11,
  title: "no hay",
};
