import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    // useParams은 URL에 존재하는 변수를 가져온다.
    // App.js에서 Route를 사용하여 URL에 지정한 :id값을 가져온다.
    const {id} = useParams();
    const getMovie = async () => {
        // !! 중요 : await는 async 함수 내부에 있지 않으면 사용할 수 없다.
        const json = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return(
        <h1>Detail</h1>
    );
}

export default Detail;
