import styled from 'styled-components'

export default function App() {
    return (
        <StyledDiv className="App">
            <h1>Hello world!</h1>
            <p>This is the initial setup for my Capstone project.</p>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    font-family: sans-serif;
    text-align: center;
    h1 {
        color: skyblue;
    }
`