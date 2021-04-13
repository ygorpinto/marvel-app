import styled from 'styled-components'

export const HeroesStyles = styled.div`
    
    position:absolute;
    top:10%;
    left:27%;
    height:30rem;
    width:40rem;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:rgba(0,0,0,0.5);
    border-radius:5rem;
    backdrop-filter:blur(5px);
    font-family: 'Raleway', sans-serif;
    color:#fff;
    font-weight:600;
    
    .character {
        margin:2rem 0 0 0;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .appearance{
        margin:0 3rem 0 0;

        p {
            margin:1.2rem;
        }
    }

    .powerStats {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        
        p {
            margin:0.4rem;
        }
    }


    header {
        display:flex;
        justify-content:center;
        align-items:center;

        h3 {
            font-size:2rem;
            margin:0 2rem 0 0;
        }
    }

    img {
        height:10rem;
        border-radius:20%;
    }

    button {
        background:transparent;
        border:none;
        position:absolute;
        top:4%;
        right:10%;
        font-size:1.4rem;
        color:#fff;
    }

@media screen and (max-width:500px) {
    position:absolute;
    top:10%;
    right:10%;
    height:70vh;
    width:80%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:rgba(0,0,0,0.5);
    border-radius:5rem;
    backdrop-filter:blur(5px);
    font-family: 'Raleway', sans-serif;
    color:#fff;
    font-weight:600;
    
    .character {
        margin:2rem 0 0 0;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .appearance{
        margin:0 1rem 0 0;

        p {
            margin:0.2rem;
        }
    }

    .powerStats {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        
        p {
            margin:0.2rem;
        }
    }


    header {
        display:flex;
        justify-content:center;
        align-items:center;
        margin-right:2rem;

        h3 {
            font-size:1.5rem;
            margin:0 2rem 0 0;
        }
    }

    img {
        height:5rem;
        border-radius:20%;
    }

    button {
        background:transparent;
        border:none;
        position:absolute;
        top:4%;
        right:10%;
        font-size:1.4rem;
        color:#fff;
    }
}
`