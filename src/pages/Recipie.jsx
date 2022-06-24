import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Recipie() {
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("summary");

  let params = useParams();

  async function fetchDetails() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=54453f92100f491e98084aa4afd145af`
    );

    const details = await data.json();

    setDetails(details);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image}></img>
      </div>

      <Info>
        <Button
          className={activeTab === "summary" ? "active" : ""}
          onClick={() => {
            setActiveTab("summary");
          }}
        >
          Summary
        </Button>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Instructions
        </Button>

        <div>
          {activeTab === "summary" && (
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          )}
          {activeTab === "instructions" && (
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          )}
        </div>
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  display: flex;

  div {
    width: 70%;
  }

  .active {
    background: grey;
    color: white;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 20px;
  }

  img {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #313131;
  background: white;
  margin-right: 1rem;
  border: 2px solid black;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Info = styled.div`
  margin-left: 3rem;
  div {
    width: 100%;
  }

  h3 {
    font-size: 15px;
  }
`;

export default Recipie;
