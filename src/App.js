import { useState, useEffect } from "react";

/*
  첫 번째 렌더링이 발생했을 경우에만 특정 코드를 실행시킬 수 있는 방법?
  => useEffect

  ! 특징
  useEffect는 화면이 그려지고 나서 실행된다.

  ! 사용법
  => import { useEffect } from "react";

  ! 매개변수 설명
  useEffect(parameter1, parameter2)
  parameter1 => 단 한번만 실행되길 원하는 Func
  parameter2 => array의 요소이며 변하길 원하는 state를 지정할 시 해당 state가 변화될 때, 첫 번째
              요소로 상주하는 Func가 실행된다.
*/
function App(){
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  useEffect(() =>{
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    // keyword가 빈 칸이 아니거나, keyword의 길이가 5보다 클 때 호출
    // if(keyword !== "" && keyword.length > 5){
    //   console.log("Search for ", keyword);
    // }
    console.log("I run when 'keyword' changes");
  }, [keyword]); // state인 keyword가 변경될 때 위 조건문이 실행된다.
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;