import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    navigate("/searched/" + input);
  }

  return (
    <form onSubmit={submitHandler}>
      <FormStyle>
        <div>
          <FaSearch></FaSearch>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </FormStyle>
    </form>
  );
}

export default Search;

const FormStyle = styled.div`
  margin: 0rem 10rem;

margin-top: 2rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    font-size: 15px;
    background-color: grey;
    border: none;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 35%;
    left: 3%;
    transform translate(100%, -50%)
    color: white
  }
`;
