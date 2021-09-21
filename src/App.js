import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./App.css";
// import Banner from "./components/Banner";
import Header from "./components/Header";
import HomePage from "./features/HomePage";
import LogIn from "./features/LogIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Banner /> */}
        {/* <hr /> */}
        <Container>
          <Row>
            <Col sm="2"></Col>
            <Col sm="8">
              <Switch>
                <Redirect exact from="/" to="/homepage" />
                <Route path="/homepage" component={HomePage}></Route>
                <Route path="/login" component={LogIn}></Route>
              </Switch>
            </Col>
            <Col sm="2"></Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
