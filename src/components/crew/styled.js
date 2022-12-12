import styled from "styled-components";

export const Container = styled.section`
    padding: 0 10.6%;
    /* border: 1px solid red; */
    height: auto;

    & section{
      display: flex;
      /* border: 1px solid white; */
      height: 100%;
    }
`;

export const BoxCrew = styled.div`
    margin-top: 90px;
    width: 100%;

    & p{
      width: 444px;
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
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
  
    & img{
      margin-top: 90px;
      height: 672px;
      margin-right: 16px;
    }
`;

export const InfoCrew = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 140px;

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
      
      & div > p{
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        /* or 178% */


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
  margin-bottom: 16px;
`;

export const Slide = styled.ul`
    margin: 0;
    padding: 0;
    margin-top: 80px;
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