import styled from  'styled-components'

const HeaderStyles = styled.header`
margin:1rem;
height:20vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
input {
    height:3rem;
    width:18rem;
    border:none;
    background-color:rgba(0,0,0,0.02);
    border-radius:1rem;
    ::placeholder {
        font-family: 'Raleway', sans-serif;
        font-weight:600;
        text-align:center;
    }
}

img {
    width:12%;
    margin:1rem 0 1rem 0;
}
`


export default HeaderStyles;