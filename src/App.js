import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
  return (
    <Router> {/*Spring의 컨트롤러와 같은 역할 수행 (Router = URL)*/}
      <Switch>
        <Route path="/movie/:id"> {/* :id는 URL상 변수를 의미 ex)/movie/1 */}
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
  7.6 Parameters
  Route로 이동한 URL에 정보 전달/받아오기 (쿼리스트링)
*/