import { useState, useEffect } from "react";

function App(){
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // 배열 지정
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){ // Input 태그가 비어있다면
      return;
    }
    setToDo("");
    /*
      const food = [1, 2, 3, 4]; 
      food 안에 있는 value를 6과 합하려면..
      const arr = [6, food] <- 이는 에러 발생. (배열 안에 배열)
      이를 해결하기 위해서는 ... 사용
      const arr = [6, ...food] <- 성공! (6, 1, 2, 3, 4)
    */
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {(toDos.length)}</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {
          // map은 array에 있는 요소들을 모두 지정한 item으로 바꾼다.
          // 함수도 가능!
          // map함수의 첫 번째 요소는 배열의 첫 번째 아이템이다.
          // ex) ['one', 'two'].map((item) => item.toUpperCase())
          // => ['ONE', 'TWO]
          // 이는 컴포넌트를 반환할 수 있다.
          // toDos.map((item) => <li>{item}</li>)
          // 해당 코드에는 문제가 존재하는데,
          // 같은 컴포넌트의 list를 render할 때 key라는 prop을 요구한다.
          // 이는 다음과 같이 바꿀 수 있다.
          toDos.map((item, index) => <li key={index}>{item}</li>)
          // map함수의 두 번째 요소는 배열의 각 아이템 위치를 말한다.
          // 이를 key으로 넣어 고유(유니크) prop을 설정한다.
        }
      </ul>
    </div>
  )
}

export default App;