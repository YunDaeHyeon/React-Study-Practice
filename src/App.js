import { useState, useEffect } from "react";

/*
  React는 컴포넌트가 삭제될 때 원하는 코드를 실행시킬 수 있다.
  컴포넌트가 첫 번째 실행(원하는 타이밍, 생성될 때) => useEffect
  컴포넌트가 삭제될 때 => Cleanup Function 방법 사용
*/

function Hello(){
  //useEffect 두 번째 요소에 아무것도 없다는 것은 원하는 Func를 한 번만 실행시키고 싶다는 것.
  useEffect(() => {
    console.log("Created :)");
    //함수(함수)의 반환값 지정 => 컴포넌트가 삭제될 때 반환된다.(Cleanup Function)
    return () => console.log("destroyed :(");
  }, []);
  // function destroyedFunction(){
  //   console.log("bye :(");
  // }
  // function effectFunction(){
  //   console.log("created :)");
  //   return destroyedFunction; // 컴포넌트의 반환값으로 원하는 Func을 지정하면 컴포넌트가 파괴될 때 실행된다.
  // }
  // useEffect(effectFunction, []);
  return <h1>Hello</h1>
}

function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {/* showing이 true라면 Hello 컴포넌트 출력, false라면 null 반환*/}
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

// const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => {
//     setKeyword(event.target.value);
//   }
//   useEffect(() =>{
//     console.log("I run only once.");
//   }, []);
//   useEffect(() => {
//     // keyword가 빈 칸이 아니거나, keyword의 길이가 5보다 클 때 호출
//     // if(keyword !== "" && keyword.length > 5){
//     //   console.log("Search for ", keyword);
//     // }
//     console.log("I run when 'keyword' changes");
//   }, [keyword]); // state인 keyword가 변경될 때 위 조건문이 실행된다.
//   useEffect(() => {
//     console.log("I run when 'counter' changes");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when keyword & counter change");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input 
//         value={keyword}
//         onChange={onChange} 
//         type="text" 
//         placeholder="Search here..."/>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );