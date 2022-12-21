import styled from "styled-components";

export const Container = styled.section` /* full Screen 1707px */
    padding: 66px 10.6% 0 10.6%;
    height: auto;

    & section{
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    @media (max-width: 1440px){
      padding-right: 0;
      padding-top: 86px;
    }
`;

export const BoxCrew = styled.div`
    padding-top: 90px;
    margin-left: 3.8%;
    

    & p{
      width: 444px;
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;
      color: #D0D6F9;

      & span{
        width: 488px;
        mix-blend-mode: normal;
        opacity: 0.25;
        margin-right: 10px;
      }
    }
`;


export const BoxImgCrew = styled.div`
    display: flex;
    padding-right: 110px;
    padding-top: 60px;
  
    & img{
      max-width: 568px;
      padding-top: 18px;
      max-height: 712px;

      @media (max-width: 1440px){
        padding-right: 0;
      }
      
    }

    @media (max-width: 1440px){
      padding-right: 110px;
    }
`;

export const InfoCrew = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 140px;


    & div{
      & span{
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 56px;
        line-height: 64px;
        text-transform: uppercase;
        color: #FFFFFF;
      }
      
      & p{
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        height: 180px;
        line-height: 32px;
        color: #D0D6F9;
      }
    }
`;

export const Role = styled.div`
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const Slide = styled.ul`
    margin: 0;
    padding: 0;
    padding-top: 80px;
    list-style-type: none; 
    display: flex;
    gap: 10px;

    & li{
      width: 15px;
      height: 15px;
      border-radius: 16px;
      background: #FFFFFF;
      mix-blend-mode: normal;
      font-size: 0.1px;
      cursor: pointer;
    }
`;