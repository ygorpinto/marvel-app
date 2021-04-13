import styled from 'styled-components'

export const ContainerStyles = styled.div`
height:100vh;
width:100%;
display:flex;
justify-content:center;
flex-wrap:wrap;
font-family: 'Raleway', sans-serif;

div {
    margin:1.2rem;
    height:15vh;
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

@media screen and (max-width:500px) {

display:flex;
height:80vh;
justify-content:center;
flex-wrap:wrap;
font-family: 'Raleway', sans-serif;
margin:0;

img {
    height:10rem;
}

div {
    
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center;
    height:5rem;
    margin:0.2rem 0;
    transition:brightness 2s;

    p{
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
