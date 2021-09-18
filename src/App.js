import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";

//component
import CountryPage from "./views/CountryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route patch="/" >
        <CountryPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
