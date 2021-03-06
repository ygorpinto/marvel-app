import styled from 'styled-components'

export const ContainerStyles = styled.div`
margin-top:1rem;
height:70vh;
width:100%;
display:flex;
justify-content:center;
flex-wrap:wrap;
font-family: 'Raleway', sans-serif;

div {
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
        filter: brightness(60%);
    }
}
}

@media screen and (max-width:500px) {

height:80vh;
width:100%;
display:grid;
grid-template-columns: 1fr 1fr;
justify-items:center;
align-items:center;
flex-wrap:wrap;

img {
    height:10rem;
}

div {
    
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center;
    height:5rem;
    transition:brightness 2s;
    margin:1rem 0rem;

    p{
    font-family: 'Raleway', sans-serif;
    margin:0;
    }

    img {
    width:5rem;
    height:5rem;
    border-radius:8%;

    :hover {
        filter: brightness(60%);
    }
}      
}
}
`
