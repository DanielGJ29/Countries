import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";


//component
import CountryPage from "./views/CountryPage";
import CountryDetails from "./views/CountryDetails";
import Countries from "./views/Countries";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
        <Countries/>
        </Route>
        <Route path="/countryPage" exact>
        <CountryPage/>
        </Route>
        <Route path="/details/:name" exact>
        <CountryDetails/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
