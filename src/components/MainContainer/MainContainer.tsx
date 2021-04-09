import MainContainerStyles from "./MainContainerStyles"

const MainContainer = ({ children }) => {
    return (
        <MainContainerStyles>
            {children}
        </MainContainerStyles>
    )
}

export default MainContainer;