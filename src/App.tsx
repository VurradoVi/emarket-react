import Advertising from "./components/ad/Advertising";
import Catalog from "./components/catalog/Catalog";
import Container from "./components/container/Container";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Advertising />
        <Catalog />
      </Container>
    </>
  );
}

export default App;
