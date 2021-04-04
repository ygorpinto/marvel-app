import Container from "../components/Container/Container";
import { useEffect, useState } from "react";
import HeaderStyles from "../components/Header/HeaderStyles";


export default function Home() {

  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');

  const api = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(api)
    const data = await res.json()
    setResult(data)
  }

  let searchValue = search.toLowerCase();
  let filterResults = result.filter(item=>item.slug.includes(searchValue))

  const showAlert = (data) => {
    alert(`eu sou o ${data} item`)
  }

  return (
    <>
      <HeaderStyles>
        <img src="./Marvel.png"/>
            <input
            onChange={e=>setSearch(e.target.value)} 
            placeholder="Digite um personagem"
            type="text"/>
      </HeaderStyles>
      <Container>
        {filterResults.map((item,index) => (
          <div 
          className="item"
          key={item.slug}>
            <p>{item.name}</p>
            <img src={`${item.images.md}`} />
          </div>
        ))}
      </Container>
    </>
  )
}
