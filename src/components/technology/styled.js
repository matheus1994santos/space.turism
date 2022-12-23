import styled from "styled-components";

export const Container = styled.section` /* full Screen 1707px */
    padding-left: 10.6%;
    height: auto;

    @media (max-width: 770px){
      padding: 0;
    }

    & section{
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
`;

export const TitleTech = styled.div`
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

    @media (max-width: 1440px){
      padding-left: 46px;
    }

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

    @media (max-width: 500px){
      justify-content: center;
      padding-left: 0;
      font-size: 16px;
      line-height: 19px;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 770px){
      flex-direction: column-reverse;
    }

    & img{
      width: 615px;
      height: 627px;
      background-size: cover;
      background-repeat: no-repeat;

      @media (max-width: 1440px){
        width: 515px;
        height: 527px;
      }

      @media (max-width: 770px){
        width: 100%;
        height: 336px;
      }

      @media (max-width: 500px){
        width: 100%;
        height: 170px;
      }
    }
`;

export const TechText = styled.div`
    display: flex;
    gap: 68px;
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
      padding-top: 40px;
      flex-direction: column;
      gap: 38px; 

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

    @media (max-width: 500px){

      & div{
        & span{
          font-size: 14px;
          line-height: 17px;
        }

        & p{
          max-width: 327px;
          padding: 0;
          padding-top: 20px;
          padding-left: 16%;
          font-size: 15px;
          line-height: 25px;
        }
      }
    }
`;

export const ButtonSlide = styled.div`
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

    @media (max-width: 500px){
      gap: 16px;
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
      
      @media (max-width: 770px){
        width: 40px;
        height: 40px;
        font-size: 16px;
      } 
`;
export const NameTech = styled.div`
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

    @media (max-width: 770px){
      font-size: 24px;
      line-height: 28px;
    }
`;