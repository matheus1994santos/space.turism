import styled from "styled-components";

export const Container = styled.section` /* full Screen 1707px */
    padding-left: 10.6%;
    height: auto;

    @media (max-width: 770px){
      padding: 0;
      padding-bottom: 40px;
    }

    & section{
      display: flex;
      flex-direction: column;
    }
`;

export const StyledTitleTech = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #FFFFFF;
    padding-left: 68px;
    padding-top: 40px;

    & p{
      padding-right: 14px;
      font-family: 'Barlow Condensed';
      font-style: normal;
      font-weight: 700;
      letter-spacing: 4.725px;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.25;
    }

    @media (max-width: 1440px){
      padding-left: 46px;
    }

    @media (max-width: 556px){
      justify-content: center;
      padding-left: 0;
      font-size: 16px;
      line-height: 19px;
      padding-top: 10px;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 770px){
      flex-direction: column-reverse;
    }

    @media (max-width: 556px){
      gap: 36px;
    }

    & img{
      max-height: 617px;
      background-size: cover;
      background-repeat: no-repeat;

      @media (max-width: 1440px){
        width: 515px;
        height: 527px;
      }

      @media (max-width: 770px){
        width: 100%;
        max-height: 326px;
      }

      @media (max-width: 556px){
        width: 100%;
        height: 170px;
      }
    }
`;

export const StyledTechText = styled.div`
    display: flex;
    gap: 68px;
    align-items: center;
    padding-top: 140px;
    padding-left: 90px;
    width: 100%;

    & div{
      & span{
        display: flex;
        padding: 0;
        margin: 0;
        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        color: #D0D6F9; 
        width: 100%;
      }

      & p{
        font-family: 'Barlow';
        font-style: normal;
        max-width: 440px;
        width: 100%;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #D0D6F9;
      }
    }

    @media (max-width: 1440px){
      padding-left: 40px;
    }

    @media (max-width: 770px){
      padding-left: 0;
      padding-top: 30px;
      flex-direction: column;
      gap: 18px; 

      & div{
        text-align: center;
        & span{
          display: block;
          font-size: 14px;
          text-align: center;
          padding-bottom: 16px;
        }

        & p{
          padding: 0 146px;
          margin: 0;
          text-align: center;
          font-size: 16px;
        }
      }
    }

    @media (max-width: 556px){
      gap: 46px;
      & div{
        & span{
          font-size: 14px;
          line-height: 17px;
        }

        & p{
          max-width: 327px;
          padding: 0;
          padding-top: 20px;
          font-size: 15px;
          line-height: 25px;
        }
      }
    }
`;

export const StyledButtonSlide = styled.div`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 40px;

    @media (max-width: 770px){
      padding-left: 0;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
    }

    @media (max-width: 556px){
      gap: 26px;
    }
`;

export const StyledStep = styled.button`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      font-family: 'Bellefair';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      color: ${ props => props.isActive ? 'black': 'white' };
      background-color: ${ props => props.isActive ? 'white': 'transparent' };
      border-radius:80px;
      border: 0.5px solid ${ props => !props.isActive ? 'rgb(255, 255, 255, 0.2)': 'transparent' };
      cursor: pointer;

      @media (max-width: 770px){
        width: 60px;
        height: 60px;
      }   
      
      @media (max-width: 556px){
        width: 40px;
        height: 40px;
        font-size: 16px;
      } 
`;

export const StyledNameTech = styled.div`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    color: #FFFFFF;
    padding: 0;
    padding-top: 10px;

    @media (max-width: 770px){
      padding-top: 0;
      font-size: 40px;
    }

    @media (max-width: 556px){
      font-size: 24px;
      line-height: 28px;
    }
`;