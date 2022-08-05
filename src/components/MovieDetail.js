import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons"

function MovieDetail({ movieId, title, genres, year, description, coverImg, rating, runtime,
language, like_count, movieURL}){
    const navigate = useNavigate();
    return (
        <div className={styles.detail_container}>
            <div>
            <button className={styles.detail_backButton}onClick={()=> navigate(-1)}>
                <FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>
            <img src={coverImg} alt={title} className={styles.detail_img}/>
            <div>
                <h2 className={styles.detail_title}>{title}</h2>
                <h3 className={styles.detail_year}>{year}</h3>
                <div className={styles.detail_info_container}>
                    <span><strong className={styles.detail_rating}>{`rating : ${rating}`}</strong></span><br/>
                    <span><strong className={styles.detail_runtime}>{`runtime : ${runtime}`}</strong></span><br/>
                    <span><strong className={styles.detail_language}>{`language : ${language}`}</strong></span><br/>
                    <span><strong className={styles.detail_like_count}>{`like_count : ${like_count}`}</strong></span>
                </div>
                <p>{description}</p>
                <ul className={styles.detail_genres}>
                    {
                        genres.map((genres) => (
                            <li key={genres}>{genres}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

MovieDetail.propTypes={ 
    movieId: PropTypes.number.isRequired, // 영화 식별값
    title: PropTypes.string.isRequired, // 영화 제목
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, // 영화 장르
    year: PropTypes.number.isRequired, // 영화 제작년도
    description: PropTypes.string.isRequired, // 영화 설명
    coverImg: PropTypes.string.isRequired, // 영화 이미지
    rating: PropTypes.number.isRequired, // 영화 평점
    runtime:PropTypes.number.isRequired, // 영화 러닝타임
    language:PropTypes.string.isRequired, // 영화 제작 언어
    like_count:PropTypes.number.isRequired, // 영화 좋아요 수
    movieURL:PropTypes.string.isRequired // 영화 URL
};

export default MovieDetail;
