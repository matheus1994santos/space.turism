// TODO: Refatorar imports
import React from "react";

import requestData from "../../utils/requestdata";

import { Page } from "../page";

// TODO: Adicionar Styled na nomenclatura
import {
  ButtonSlide,
  Container,
  Content,
  NameTech,
  StyledStep,
  TechText,
  TitleTech,
} from "./styled";

// TODO: Renomear função para getTechImage
import { technoImgVerif } from "./helpers";

export const Technology = () => {
  const data = requestData();

  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <Page>
      <Container>
        <section>
          <TitleTech>
            <p>03</p>
            <span>SPACE LAUNCH 101</span>
          </TitleTech>
          <Content>
            <TechText>
              <ButtonSlide>
                {data &&
                  data.technology.map((props, index) => (
                    <StyledStep
                      onClick={() => setCurrentStep(index)}
                      key={index}
                      isActive={currentStep === index}
                    >
                      {index + 1}
                    </StyledStep>
                  ))}
              </ButtonSlide>
              {data &&
                data.technology.map(({ name, description }, index) =>
                  currentStep === index ? (
                    <div key={name}>
                      <span>THE TERMINOOGY...</span>
                      <NameTech>{name.toUpperCase()}</NameTech>
                      <p>{description}</p>
                    </div>
                  ) : null
                )}
            </TechText>

            <img src={technoImgVerif(currentStep)} />
          </Content>
        </section>
      </Container>
    </Page>
  );
};
