import PropTypes from "prop-types";

function Movie({coverImg, title, summary, genres}){
    return (
      <div>
        <img src={coverImg} alt={title}/> {/* 모든 img는 alt를 가진다. */}
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
          { // movies의 map 매개변수 movie에 컴포넌트를 할당하고,
            // 각 movie에 있는 장르(genres)를 다시 map으로 할당
          genres.map((g) => (
            <li key={g}>{g}</li>
            ))}
        </ul>
      </div>
    );
}

Movie.propTypes = {
  coverImg : PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;