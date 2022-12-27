// TODO: Refatorar imports
import React from "react";

import requestData from "../../utils/requestdata";
import  Page  from "../../components/Page";

import {
  StyledButtonSlide,
  Container,
  Content,
  StyledNameTech,
  StyledStep,
  StyledTechText,
  StyledTitleTech,
} from "./styled";
import { getTechImage } from "./helpers";

const Technology = () => {
  const data = requestData();

  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <Page>
      <Container>
        <section>
          <StyledTitleTech>
            <p>03</p>
            <span>SPACE LAUNCH 101</span>
          </StyledTitleTech>
          <Content>
            <StyledTechText>
              <StyledButtonSlide>
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
              </StyledButtonSlide>
              {data &&
                data.technology.map(({ name, description }, index) =>
                  currentStep === index ? (
                    <div key={name}>
                      <span>THE TERMINOOGY...</span>
                      <StyledNameTech>{name.toUpperCase()}</StyledNameTech>
                      <p>{description}</p>
                    </div>
                  ) : null
                )}
            </StyledTechText>

            <img src={getTechImage(currentStep)} />
          </Content>
        </section>
      </Container>
    </Page>
  );
};

export default Technology;