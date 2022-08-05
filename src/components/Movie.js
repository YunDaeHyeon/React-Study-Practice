import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Movie.module.css";
import { useEffect } from "react";

function Movie({ movieId, coverImg, title, year, summary, genres }){
    useEffect(()=>{
        AOS.init();
    },[]);
    return (
        <div className={styles.movie} data-aos="zoom-in">
            <img src={coverImg} alt={title} className={styles.movie_img}/>
            <div>
                <h2 className={styles.movie_title}>
                    <Link to={`/movie/${movieId}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie_year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie_genres}>
                    {
                        genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes={
    movieId: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;