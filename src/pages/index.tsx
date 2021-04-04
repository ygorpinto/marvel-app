import Container from "../components/Container/Container";
import { useEffect, useState } from "react";
import HeaderStyles from "../components/Header/HeaderStyles";
import { Loading } from "../components/Loading/Loading";


export default function Home() {

  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const api = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`

  useEffect(() => {
    fetchData()
    setIsLoading(false)
  }, [])

  const fetchData = async () => {
    const res = await fetch(api)
    const data = await res.json()
    setResult(data)
  
  }

  let searchValue = search.toLowerCase();
  let filterResults = result.filter(item=>item.slug.includes(searchValue))


  if (isLoading) {

    return (
      <Loading />
    )

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
