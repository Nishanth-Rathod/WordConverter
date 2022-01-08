import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Nishanth from "./components/Nishanth";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Developer from "./components/Developer";
import Contact from "./components/Contact";
import More from "./components/More";

function App() {
  const [mode, setMode] = useState("info"); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "info") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Darkmode has Enabled", "dark");
      document.title = "NishanthConverter-Darkmode";
      setInterval(() => {
        document.title = "Amazing Nishanth-Converter";
      }, 2000);
      setInterval(() => {
        document.title = "Install Nishanth-Converter";
      }, 1500);
    } else {
      setMode("info");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has Enabled", "primary");
      document.title = "NishanthConverter-Ligthmode";
    }
  };
  return (
    <>
      {/* open react to clear the tpics like props */}
      <Router>
        <Navbar
          title="Nishanth&Converter"
          abouttext="About this"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/aboutt">
              <About />
            </Route>
            <Route exact path="/more">
              <More />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/aboutdev">
              <Developer />
            </Route>
            <Route path="/users">
              <Aboutus />
            </Route>
            <Route exact path="/">
              {
                <Nishanth
                  showAlert={showAlert}
                  heading="Enter The Text:"
                  mode={mode}
                />
              }
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
