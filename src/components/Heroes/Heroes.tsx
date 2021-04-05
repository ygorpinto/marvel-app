import axios from "axios";
import { useEffect, useState } from "react";
import { HeroesStyles } from "./HeroesStyles"
import { Loading } from "../Loading/Loading";

interface Hero {
    name: string,
    images: {
        sm: string
    },
    powerstats: {
        intelligence: number,
        strength: number,
        speed: number,
        durability: number,
        power: number,
        combat: number
    },
    appearance:{
        gender:string,
        race:string,
        height:string,
        weight:string
    }
}

const Heroes = ({ index }) => {

    const [hero, setHero] = useState({} as Hero)

    useEffect(() => {
        fetchHeroData()
    }, [index]);

    const fetchHeroData = async () => {
        const res = await axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${index}.json`)
        const data = await res.data
        setHero(data)
    }

    console.log(hero);


    return (
        <>
            <HeroesStyles>
                {typeof hero.powerstats !== 'undefined' ? (
                    <div className="main">
                        <header>
                            <h3>{hero.name}</h3>
                            <img src={`${hero.images.sm}`} />
                        </header>
                        <div className="character">
                            <div className="appearance">
                                <p>Gênero : {hero.appearance.gender}</p>
                                <p>Raca : {hero.appearance.race}</p>
                                <p>Altura : {hero.appearance.height[1]}</p>
                                <p>Peso : {hero.appearance.weight[1]}</p>
                            </div>
                            <div className="powerStats">
                                <p>Combat : {hero.powerstats.combat}</p>
                                <p>Intelligence : {hero.powerstats.intelligence}</p>
                                <p>Speed : {hero.powerstats.speed}</p>
                                <p>Durability : {hero.powerstats.durability}</p>
                                <p>Power : {hero.powerstats.power}</p>
                            </div>
                        </div>
                    </div>) : (null)}
            </HeroesStyles>
        </>
    )
}

export default Heroes;