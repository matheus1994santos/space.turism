import React from "react";
// TODO: BoxText = StyledTextBox, CircleText = StyledCircleText
// TODO: Import arquivos da pasta local sempre por ultimo, styled deveria ser o ultimo import.
import { StyledTextBox, StyledCircleText, Container } from "./styled";
import  Page  from "../../components/Page";

const Home = () => {
  return (
    <Page>
      <Container>
        <section>
          <StyledTextBox>
            <span>SO, YOU WANT TO TRAVEL TO </span>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </StyledTextBox>
          {
            //
          }
          <div>
            <StyledCircleText>EXPLORE</StyledCircleText>
          </div>
        </section>
      </Container>
    </Page>
  );
};

export default Home;