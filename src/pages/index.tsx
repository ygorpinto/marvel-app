import Container from "../components/Container";
import keys from '../../config/apiKeys'
import { useEffect, useState } from "react";

const API_KEY = keys.API_KEY
const HASH = keys.HASH

export default function Home() {
  
  const [result,setResult] = useState(undefined);
  const [offset,setOffset] = useState(0);
  
  const api = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&offset=${offset}`
  
  useEffect(()=>{
    fetchData()
  },[offset])
  
  const nextPage = () => {
    setOffset(offset+20)
  }
  const prevPage = () => {
    setOffset(offset-20)
  }
  
  const fetchData = async () => {
    const res = await fetch(api)
    const data = await res.json()
    setResult(data);
  }
  
  return (
  <>
      <Container>
        {typeof result !== "undefined" ? result.data.results.map(item => (
          <div key={item.name}>
            <img src={`${item.path}`}/>
            <p>{item.name}</p>
          </div>
        )):("")}
        {offset === 0 ? <button
        onClick={nextPage}
        >Proxima</button> : (
          <>
        <button
        onClick={prevPage}
        >Anterior</button>
          <button
        onClick={nextPage}
        >Proxima</button>
        </>
        )}
      </Container>
  </>
  )
}
