import styled from "styled-components";
import InputSide from "./components/InputSide";
import ResultSide from "./components/ResultSide";
function App() {
  return (
    <>
      <Container>
        <img src="/images/logo.svg" alt="logo" />
        <Application>
          <InputSide />
          <ResultSide />
        </Application>
      </Container>
    </>
  );
}
const Container = styled.div`
  max-width: 92rem;
  text-align: center;
`;
const Application = styled.div`
  text-align: left;
  gap: 4.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3.2rem;
  border-radius: 2.5rem;
  margin-top: 8.7rem;
  background: #fff;
  height: 48rem;
  max-width: 92rem;
`;
export default App;
