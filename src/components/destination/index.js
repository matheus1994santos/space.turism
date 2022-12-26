// TODO: Limpar espaços
// TODO: Importar arquivos locais por ultimo e agrupar imports = Dependencias > externos > locais
import React from "react";

import { Page } from "../page";

import requestData from "../../utils/requestdata";

import { sateVerif } from "./helpers";

// TODO: Renomear BoxMoon => StyledImageBox
// TODO: Renomear BoxText => StyledDestinationsInfo
import {
  BoxMoon,
  BoxText,
  Container,
  StyledDistanceTravel,
  StyledNameDescription,
} from "./styled";

export const Destinations = () => {
  // TODO: Renomear state para currentDestination
  const [sate, setSate] = React.useState(null);
  const data = requestData();
  // TODO: Renomear para destinationNames
  const listMenu = data.destination.map((dest) => dest.name);

  React.useEffect(() => {
    setSate(!sate ? "Moon" : sate);
  }, [sate]);

  // TODO: Renomear para onDestinationClick
  // TODO: Refatorar para aceitar destinationName e passar para o state, substituindo então o e.target.innerHTML
  function activeStyle(e) {
    setSate(e.target.innerHTML);
  }

  return (
    <Page>
      <Container>
        <section>
          <BoxMoon>
            <p>
              <span>01</span> PICK YOUR DESTINATION
            </p>
            <img src={sateVerif(sate)} />
          </BoxMoon>

          <BoxText>
            <article>
              <nav>
                <ul>
                  {listMenu &&
                    listMenu.map((name, index) => (
                      <li
                        key={index}
                        onClick={activeStyle}
                        className={name === sate ? "active" : ""}
                      >
                        {name}
                      </li>
                    ))}
                </ul>
              </nav>
              {data &&
                data.destination.map(
                  ({ name, description, distance, travel }) =>
                    sate === name ? (
                      <div key={name}>
                        <StyledNameDescription>
                          <h1> {name} </h1>
                          <p>{description}</p>
                        </StyledNameDescription>

                        <nav>
                          <StyledDistanceTravel>
                            <p>AVG. DISTANCE</p>
                            <h2>{distance}</h2>
                          </StyledDistanceTravel>
                          <StyledDistanceTravel>
                            <p>EST. TRAVEL TIME</p>
                            <h2>{travel}</h2>
                          </StyledDistanceTravel>
                        </nav>
                      </div>
                    ) : null
                )}
            </article>
          </BoxText>
        </section>
      </Container>
    </Page>
  );
};
