import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Contributors from "./Components/Contributors";
import Footer from "./Components/Footer";
import Predictor from "./Components/Predictor";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Header />
            )
          }}>
          </Route>
          <Route path="/contributor">
            <Contributors />
          </Route>
          <Route path="/predictor">
            <Predictor />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
