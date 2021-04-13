import HeroesList from "../components/HeroesList/Heroeslist";
import Main from "../components/Main/Main";
import MainContainer from "../components/MainContainer/MainContainer";
import React from "react";

export default function Home() {

  return (
    <>
        <MainContainer>
              <HeroesList />
        </MainContainer>
    </>
  )
}
