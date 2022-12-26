import React from "react";
// TODO: BoxText = StyledTextBox, CircleText = StyledCircleText
// TODO: Import arquivos da pasta local sempre por ultimo, styled deveria ser o ultimo import.
import { BoxText, CircleText, Container } from "./styled";
import { Page } from "../page";

export const Home = () => {
  return (
    <Page>
      <Container>
        <section>
          <BoxText>
            <span>SO, YOU WANT TO TRAVEL TO </span>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </BoxText>
          {
            //
          }
          <div>
            <CircleText>EXPLORE</CircleText>
          </div>
        </section>
      </Container>
    </Page>
  );
};
