import styled from "styled-components";


export const Container = styled.section`
    padding: 0 10.2%;

    & section{
      display: flex;
      gap: 160px;
      height: 100%;

      @media (max-width: 1440px){
        padding-left: 120px;
        gap: 0;
      }
    }

    @media (max-width: 1440px){
      padding: 0;
    }
`;


export const BoxMoon = styled.div`
    position: relative;
    top: 55px;
    left: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 64px;

    & p{
      font-family: 'Barlow Condensed';
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.725px;
      text-align: none;
      text-transform: uppercase;
      color: #FFFFFF;
      
      & span{
        mix-blend-mode: normal;
        opacity: 0.25;
      }
    }

    & img{
      position: relative;
      left: 76px;
      width: 445px;
      height: 445px; 
      background-repeat : no-repeat;
      background-size: cover;
    }
`;

export const BoxText = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;

    & article{
      position: relative;
      top: 65px;
      left: 98px;
      display: flex;
      flex-direction: column;
      width: 445px;
      height: 472px;

      & div{
        display: flex;
        flex-direction: column;
        width: 445px;

        & nav{
          margin-top: 60px;
          padding-top: 10px;
          border-top: 1px solid #383B4B;
        }
      }

      & nav{
        display: flex;


        & ul{
          display: flex;
          padding: 0;
          list-style-type: none;
          gap: 28px;
          height: 34px;
          
          & li{
            cursor: pointer;
            font-family: 'Barlow Condensed';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            color: #FFFFFF;
            padding-bottom: 10px;
            text-transform: uppercase;
            border-bottom: ${ props => props.isActive};
          }

          .active{
            border-bottom: 0.5px solid rgb(255, 255, 255);
          }
        }
      }
    }
`;

export const StyledNameDescription = styled.div`
    display: flex;
    flex-direction: column;

    & h1{
      margin: 0;
      margin: 16px 0;
      padding: 0;
      font-family: 'Bellefair';
      font-style: normal;
      font-weight: 400;
      font-size: 100px;
      line-height: 115px;
      color: #FFFFFF;    
      text-transform: uppercase;  
    }

    & p{
      margin: 0;
      padding: 0;
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #D0D6F9;
      font-weight: 100;
    }
`;

export const StyledDistanceTravel = styled.div`
    display: flex;

    & p{
      font-family: 'Barlow Condensed';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.3625px;
      text-transform: uppercase;
      color: #D0D6F9;     
    }

    & h2{
      margin: 0;
      padding: 0;
      font-family: 'Bellefair';
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;
      text-transform: uppercase;
      color: #FFFFFF;      
    }
`;

