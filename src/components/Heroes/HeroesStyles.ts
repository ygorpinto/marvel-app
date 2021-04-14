import styled from 'styled-components'

export const HeroesStyles = styled.div`
    
    z-index:10;
    position:absolute;
    height:100vh;
    width:100vw;
    display: flex;
    justify-content:center;
    align-items:center;
   

    .heroes {
        height:70vh;
        width:40%;
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
    }
    
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
        cursor: pointer;
    }

@media screen and (max-width:500px) {
    z-index:10;
    position:absolute;
    height:100vh;
    width:100vw;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
   

    .heroes {
        width:90%;
        height:80vh;
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
        font-size:0.8rem;
    }
    
    .character {
        margin:0 0 0 0;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .appearance{
        margin:0 0rem 0 0;

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
            margin:0.1rem;
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
        margin-bottom:0.8rem;
    }

    button {
        background:transparent;
        border:none;
        position:absolute;
        top:6%;
        right:12%;
        font-size:1.4rem;
        color:#fff;
    }


    .closeButton {
        display:grid;
        grid-template-columns:1fr;
        justify-items:right;
    }

}
`