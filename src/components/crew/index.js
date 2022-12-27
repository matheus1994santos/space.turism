import React from "react";

import requestData from "../../utils/requestdata";
import  Page  from "../page";

import { getCrewMemberImage } from "./helpers";
import {
  StyledCrewInfo,
  StyledCrewImgBox,
  Container,
  StytedInfoCrew,
  StyledPageTitle,
  StyledRole,
  StyledSlide,
} from "./styled";

const Crew = () => {
  const data = requestData(); // dados do json
  const [activeCrew, setActiveCrew] = React.useState(null);

  React.useEffect(() => {
    setActiveCrew(!activeCrew ? "Commander" : activeCrew); // State recebe logica em caso de null retorno ser o primeiro role do Array
  });
  
  return (
    <Page>
      <Container>
        <StyledPageTitle>
          <span>02</span> MEET YOUR CREW
        </StyledPageTitle>
        <section>
          <StyledCrewInfo>
            <StytedInfoCrew>
              {data &&
                data.crew.map(({ name, role, bio }) =>
                  role === activeCrew ? ( // Aqui é verificado se State for igual a uma das roles ele da print nos dados.
                    <div key={role}>
                      <StyledRole>{role}</StyledRole>
                      <span>{name}</span>
                      <p>{bio}</p>
                    </div>
                  ) : null
                )}
              <StyledSlide>
                {data &&
                  data.crew.map(({ name, role }) => (
                    <li
                      onClick={() => setActiveCrew(role)}
                      style={{ opacity: role === activeCrew ? 1 : 0.17 }}
                      key={name}
                    >
                      {role}
                    </li>
                  ))}
              </StyledSlide>
            </StytedInfoCrew>
          </StyledCrewInfo>

          <StyledCrewImgBox>
            <img src={getCrewMemberImage(activeCrew)} />
            <div></div>
          </StyledCrewImgBox>
        </section>
      </Container>
    </Page>
  );
};

export default Crew;