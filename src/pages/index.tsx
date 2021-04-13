import HeroesList from "../components/HeroesList/Heroeslist";
import Main from "../components/Main/Main";
import MainContainer from "../components/MainContainer/MainContainer";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Home() {

  return (
    <>
      <Router>
        <MainContainer>
          <Switch>
            <Route path="/" exact>
            </Route>
            <Route path="/heroes">
              <HeroesList />
            </Route>
          </Switch>
        </MainContainer>
      </Router>
    </>
  )
}
