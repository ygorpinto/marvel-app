import styled from 'styled-components'

const MainStyles = styled.div`
width:20%;
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;

div {
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    background-color:#EE171F;
    height:3rem;
    width:10rem;
    font-family:'Raleway', sans-serif;
    font-weight:600;
    font-size:1.5rem;
    border-radius:1.3rem;

    cursor:pointer;

    :hover {
        background-color:#aa1d21;
    } 

    a {
        text-decoration:none;
        color:white;
    }
}

@media screen and (max-width:500px) {

width:10%;
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;


div {
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    background-color:#EE171F;
    height:1.5rem;
    width:5.5rem;
    font-family:'Raleway', sans-serif;
    font-weight:600;
    font-size:1rem;
    border-radius:5px;

    cursor:pointer;

    :hover {
        background-color:#aa1d21;
    } 

    a {
        text-decoration:none;
        color:white;
    }
}



}
`

export default MainStyles;