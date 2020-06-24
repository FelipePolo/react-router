import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MyNav from './components/nav';
import Civilizations from './components/civilizaciones'
import Civilizacion from './components/civilizacion'
//https://jsonplaceholder.typicode.com/users


const App = () => {
  return(
    <Router>
      <div className = "container">
        <MyNav></MyNav>



        <Switch>
        <Route path = "/Civilizaciones/:id">
            <Civilizacion></Civilizacion>
        </Route>

        <Route path = "/Acerca De Nosotros">
          contenido Acerca De Nosotros
        </Route>
        <Route path = "/Civilizaciones">
          <Civilizations></Civilizations>
        </Route>
        <Route path = "/Contacto">
          contenido contacto
        </Route>
        <Route path = "/">
          esta es la home
        </Route>

      </Switch>
      </div>
    </Router>
  )
};

//REACT DOM
ReactDom.render(<App></App>, document.getElementById("root"));
