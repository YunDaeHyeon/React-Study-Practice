import { useState, useEffect } from "react";

function App(){
  const [loading, setLoading] = useState(true);
  // coins의 경우 기본값을 지정하지 않으면 undefined 에러 발생
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
    <div>
      <h1>The Coins! ({coins.length})</h1> 
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          // key 할당을 위해 두 번째 요소를 사용할 필요 X
          // 이유는 호출한 api에 코인 별 id가 존재하기 때문
          <li>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>
        ))}
      </ul>
    </div>
  )
}

export default App;

// 실시간 Coin 가격 정보를 가져오기 위해
// coinpaprika.com의 API 사용
// api.coinpaprika.com/v1/tickers