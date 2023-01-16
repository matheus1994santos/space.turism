// TODO: Refatorar imports
import React from "react";
import { useSelector } from "react-redux";

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
import { selectDataTechnology } from "./selectors";

const Technology = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const selectData = useSelector(selectDataTechnology)
  console.log(selectData)

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
                {selectData &&
                  selectData.map((props, index) => (
                    <StyledStep
                      onClick={() => setCurrentStep(index)}
                      key={index}
                      isActive={currentStep === index}
                    >
                      {index + 1}
                    </StyledStep>
                  ))}
              </StyledButtonSlide>
              {selectData &&
                selectData.map(({ name, description }, index) =>
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