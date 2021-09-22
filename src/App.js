import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./App.css";
// import Banner from "./components/Banner";
import Header from "./components/Header";
import DetailPost from "./features/DetailPost";
import DetailSubject from "./features/DetailSubject";
import HomePage from "./features/HomePage";
import LogIn from "./features/LogIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Banner /> */}
        {/* <hr /> */}
        
              <Switch>
                <Redirect exact from="/" to="/homepage" />
                <Route exact path="/homepage" component={HomePage}></Route>
                <Route exact path="/homepage/detail-subject" component={DetailSubject}></Route>
                <Route exact path="/homepage/detail-subject/detail-post" component={DetailPost}></Route>
                <Route exact path="/login" component={LogIn}></Route>
              </Switch>
            
      </BrowserRouter>
    </div>
  );
}

export default App;
