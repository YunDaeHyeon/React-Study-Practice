import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
  return (
    <Router> {/*Spring의 컨트롤러와 같은 역할 수행 (Router = URL)*/}
      <Switch>
        <Route path="/movie">
          <Detail/>
        </Route>
        <Route path="/"> {/*<Route>안에 원하는 컴포넌트 경로 작성*/}
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
  7.3 Moive App part
  영화 정보 가져오는 사이트
  https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year
  minimum_rating => 원하는 별점 이상 (별점 8.5 이상)
  sort_by=year => 년도를 기준으로 정렬 (최신 영화 우선)

  +7.5 React Router
  "react-router-dom" 사용법
  1. npm i react-router-dom@5.3.0
  2. import BrowserRouter as Router, Switch, Route } from "react-router-dom"

  URL 지정 -> <Router><Switch><Route>
  만약, Route에서 다른 Route로 이동하려면 "/"에서 "/moive"로
  이는 Link 컴포넌트 사용
  Link -> 새로고침 없이 사용자가 원하는 페이지로 이동시키는 컴포넌트
*/