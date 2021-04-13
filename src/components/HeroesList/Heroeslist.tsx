import { useEffect, useState } from "react";
import Container from "../Container/Container";
import HeaderStyles from "../Header/HeaderStyles";
import Heroes from "../Heroes/Heroes";
import { Loading } from "../Loading/Loading";

const HeroesList = () => {
    
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isDataInfo, setIsDataInfo] = useState(false);
    const [index, setIndex] = useState(1);
    
    const api = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(api)
    const data = await res.json()
    setResult(data)
    setTimeout(()=>{
      setIsLoading(false)
    },800)
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
    {isDataInfo ? (
      <Heroes 
      setDataInfo={setIsDataInfo}
      index={index}/>
    ) : (null)}
        <div>
      <HeaderStyles>
        <img src="marvel-icon-png-1.jpg"/>
            <input
            onChange={e=>setSearch(e.target.value)} 
            placeholder="Digite um personagem"
            type="text"/>
      </HeaderStyles>
      <Container>
        {filterResults.map((item,index) => {
    const getIndex = () => {
      setIsDataInfo(true)
      setIndex(item.id)}
  return (
    <div
    onClick={getIndex}
    key={item.slug}>
      <p>{item.name}</p>
      <img src={`${item.images.md}`} />
    </div>
  )})}
      </Container>
      </div>
    </>
  )
}

export default HeroesList;