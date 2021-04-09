import MainStyles from "./MainStyles"
import {Link} from 'react-router-dom'
const Main = () => {
    return (
        <MainStyles>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
               <Link to="/heroes">Characters</Link> 
            </div>
            <div>
                Series
            </div>
            <div>
                Games
            </div>
            <div>
                HQs
            </div>
        </MainStyles>
    )
}

export default Main;