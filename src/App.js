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
    </div>

  )
}

export default App;