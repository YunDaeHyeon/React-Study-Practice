import { useState, useEffect } from "react";
import Coin from "./Coin";
import "./App.style.css"

function App(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    // 해당 경로로 request를 보내고
    fetch("https://api.coinpaprika.com/v1/tickers")
    // 해당 api에 대한 응답으로 reponse를 받으면 이 오브젝트를 json으로 치환한 뒤
    .then((response) => response.json())
    // 바꾼 json 오브젝트를 useState의 coins로 할당한다.
    .then((json) => {
      setCoins(json);
      // 코인을 성공적으로 가져왔으니 loading의 값을 false로 바꾼다.
      setLoading(false);
    });
  }, []); // 1번만 실행시키기 위해 두 번째 요소를 비어놓는다.
  return (
    <div className="warpper">
      <div>
        <div className="title">
          <h2>Coin Converter</h2> 
          <h3>실시간으로 검색 된 코인의 수 : {coins.length}개</h3>
          <strong>2022-07-31 오후 5시 01분 기준 환율 : 1USD = 1303.28KRW</strong>
        </div>
        {loading ? <strong>Loading...</strong> : <Coin coins={coins}/>}
      </div>
    </div>
  )
}

export default App;

// 실시간 Coin 가격 정보를 가져오기 위해
// coinpaprika.com의 API 사용
// api.coinpaprika.com/v1/tickers

/*
  React 코드 챌린지
  1. input을 만들어 내 돈(USD)으로 얼마만큼의 비트코인을 구매할 수 있는지 작성
  2. 1번 완성될 시 비트코인이 아닌, 다양한 코인들을 select를 통해 선택하고,
     선택한 코인을 내 돈으로 얼마만큼 구매할 수 있는지 작성
     
*/