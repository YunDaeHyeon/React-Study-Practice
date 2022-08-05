import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home(){
    // 로딩 State
    const [loading, setLoading] = useState(true);
    // 영화 State
    const [movies, setMovies] = useState([]);
    // 영화 호출 API
    const getMovies = async() => {
        const json = await(
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year")
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    // 영화 호출 API를 웹이 실행될 때 단 한번 실행.
    useEffect(()=>{
        getMovies();
    }, []);
    return (
        <div>
            <div className={styles.container}>
                {
                    loading ? (
                        <div>
                            <h1>Page Loading...</h1>
                            <div className={styles.loader}>
                            <span>Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.movies}>
                                {movies.map((movie) => (
                                    <Movie
                                        key={movie.id}
                                        movieId={movie.id}
                                        year={movie.year}
                                        coverImg={movie.medium_cover_image}
                                        title={movie.title}
                                        summary={movie.summary}
                                        genres={movie.genres}/>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
    
export default Home;