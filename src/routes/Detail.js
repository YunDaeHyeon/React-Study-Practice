import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detailMovie, setDetailMovie] = useState([]);
    const getMovies = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        console.log(json);
        setDetailMovie(json.data.movie);
    };
    useEffect(()=> {
        getMovies();
    },[]);
    return (
        <div className={styles.container}>
            {
                loading ? (
                    <h1 className={styles.loader}>Page Loading...</h1>
                ) : (
                    <div className={styles.movies}>
                        <MovieDetail
                            movieId={detailMovie.id}
                            title={detailMovie.title}
                            genres={detailMovie.genres}
                            year={detailMovie.year}
                            description={detailMovie.description_intro}
                            coverImg={detailMovie.medium_cover_image}
                            rating={detailMovie.rating}
                            runtime={detailMovie.runtime}
                            language={detailMovie.language}
                            like_count={detailMovie.like_count}
                            movieURL={detailMovie.url}/>
                    </div>
                )
            }
        </div>
    );
}

export default Detail;

/*
    json.data.movie...
    id (number)
    title (string)
    genres (array)
    year (number)
    description_intro(=full) (string)
    large_cover_image (string)
    rating (number)
    runtime (number)
    language (string)
    like_count (number)
    url (string)
*/