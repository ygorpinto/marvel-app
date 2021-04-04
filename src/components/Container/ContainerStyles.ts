import styled from 'styled-components'

export const ContainerStyles = styled.div`
height:100vh;
width:100%;
display:flex;
justify-content:center;
flex-wrap:wrap;
font-family: 'Raleway', sans-serif;

.item {
    margin:1.2rem;
    height:15rem;
    transition:brightness 2s;

    p{
    margin:0;
    }

    img {
    height:100%;
    border-radius:8%;

    :hover {
        filter: brightness(60%)
    }
}
}
`
