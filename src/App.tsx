import Advertising from "./components/Ad/Advertising";
import Catalog from "./components/Catalog/Catalog";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Stock from "./components/Stock/Stock";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Advertising />
        <Catalog />
        <Stock />
      </Container>
    </>
  );
}

export default App;
