import styled from "styled-components";

export const Container = styled.section` /* full Screen 1707px */
    padding-left:10.6%;
    height: auto;

    & section{
      display: flex;
      flex-direction: column;
      height: 100%;
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

    & p{
      margin-right: 10px;
      font-family: 'Barlow Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
    /* identical to box height */

    letter-spacing: 4.725px;

    color: #FFFFFF;

    mix-blend-mode: normal;
    opacity: 0.25;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1800px){
      padding-right: 110px;
    }

    & img{
      width: 515px;
      height: 527px;
      background-size: cover;
      background-repeat: no-repeat;
    }
`;

export const TechText = styled.div`
    display: flex;
    gap: 80px;
    padding-top: 100px;
    width: 100%;

    & div{
      display: flex;
      flex-direction: column;
      height: 303px;

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
      }

      & p{
        font-family: 'Barlow';
        font-style: normal;
        width: 444px;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #D0D6F9;        
      }
    }
`;

export const ButtonSlide = styled.div`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 40px;
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
`;
export const NameTech = styled.div`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    color: #FFFFFF;
    padding: 0;
    margin-top: 10px;
`;