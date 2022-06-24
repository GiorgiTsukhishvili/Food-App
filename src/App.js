import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HomeNav to="/">Home</HomeNav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const HomeNav = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: black;
  position: absolute;
  top: 2rem;
`;

export default App;
