import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id"> 
          <Detail/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
  7.7 Publishing
  프로젝트를 git page에 업로드하기 (deploy)
  터미널에 npm i gh-pages 설치
  gh-pages는 github에서 제공하는 무료 웹사이트 배포툴
*/