import { useState } from "react";
import "./Coin.style.css";

// coins의 경우 기본값을 지정하지 않으면 undefined 에러 발생
function Coin({coins}){
    // 현금
    const [amount, setAmount] = useState(0);
    // 코인 이름
    const [coinName, setCoinName] = useState("");
    // 코인 가격
    const [coinPrice, setCoinPrice] = useState(0);
    // 코인 index
    const [coinIndex, setCoinIndex] = useState(0);
    // 달러 <-> 원화 변환기
    const [inverted, setInverted] = useState(false);
    // USD 입력
    const onCoinCalculateChange = (event) => {
      setAmount(event.target.value);
      // toFixed()의 반환값은 문자열이기에 꼭 정수형으로 바꿔야 한다.
      // toFiex()의 경우 parseInt로 변환이 안되기에 앞에 단항 연산자로 덧셈 연산자를 붙여야 한다.
      setCoinPrice(+(amount / coins[coinIndex].quotes.USD.price).toFixed(10));
    }
    // 코인 선택 (select option)
    const onCoinChange = (event) => {
      setCoinName(coins[event.target.value].name+" ("+coins[event.target.value].symbol+")");
      setCoinIndex(parseInt(event.target.value));
      onReset();
    }
    // 리셋 (코인 선택 시 초기화)
    const onReset = () => {
      setAmount(0);
      setCoinPrice(0); 
    }
    // 달러 <-> 원화 변환 이벤트
    const onInverted = () => {
      setInverted((current) => !current);
      onReset();
    }
    return (
      <div>
        <div className="btnContainer">
          <table>
            <tr className="usd">
              <td>
                  <input
                    onChange={onCoinCalculateChange}
                    // 1000단위로 숫자 나누기
                    value={inverted ? 
                      // true
                      amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : 
                      // false
                      amount} 
                    id="usd" 
                    placeholder="USD"
                    disabled={inverted}>
                  </input>
                  <label htmlFor="usd">달러 (USD)</label>
              </td>
            </tr>
            <tr className="krw">
              <td>
                <input
                  value = {
                    inverted ? 
                    // true
                    amount : 
                    // false
                    (amount*1308.28).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                  id="krw"
                  placeholder="KRW"
                  disabled={!inverted}>
                </input>
                <label htmlFor="krw">원 (KRW)</label>
              </td>
            </tr>
            <tr className="coin">
              <td>
                  <input
                  onChange={onCoinCalculateChange}
                    value = {coinPrice}
                    id="wantCoin" 
                    placeholder="구매 가능한 코인"
                    disabled>
                  </input>
                  <label htmlFor="wantCoin">{coinName === "" ? "Bitcoin (BTC)" : coinName}</label>
              </td>
            </tr>
          </table>
        <button className="inver" 
          onClick={onInverted}>{inverted ? "USD to KRW" : "KRW to USD"}</button>
        </div>
        <div>
          <select className="coinSelect" onChange={onCoinChange}>
            {coins.map((coin, index) => (
              // key 할당을 위해 두 번째 요소를 사용할 필요 X
              // 이유는 호출한 api에 코인 별 id가 존재하기 때문
              <option value={index} key={coin.id}>
                1 {coin.name} ({coin.symbol}) = ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  export default Coin;