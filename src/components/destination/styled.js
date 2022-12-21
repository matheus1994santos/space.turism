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

      @media (max-width: 770px){
        flex-direction: column;
        height: auto;
        padding: 0;
        padding-top: 20px;
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

    @media (max-width: 770px){
      position: none;
      left: 0;
      top: 0;
      gap: 30px;
      align-items: initial;
    }

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

      @media (max-width: 770px){
        font-size: 20px;
        line-height: 24px;
        padding-left: 30px;
      }
    }

    & img{
      position: relative;
      left: 76px;
      width: 445px;
      height: 445px; 
      background-repeat : no-repeat;
      background-size: cover;

      @media (max-width: 770px){
        left: 240px;
        margin: 0;
        width: 300px;
        height: 300px; 
      }
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
          padding-top: 70px;
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

          @media (max-width: 770px){
            padding-left: 110px;
          } 
        }
      }
    }

    @media (max-width: 770px){
      margin: 0;

      & article {
        position: none;
        top: 0;
        left: 0;
      }

      & nav{
        padding-top: 20px;
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

    @media (max-width: 770px){
      align-items: center;

      & h1{
        padding-left: 30px;
        font-size: 70px;
        line-height: 92px;
      }

      & p{
        padding-left: 10px;
        text-align: center;
        font-size: 12.5px;
        line-height: 28px;
      }
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

    @media (max-width: 770px){
      align-items: center;

      & p{
        font-size: 12px;
        line-height: 15px;
      }

      & h2{
        font-size: 24px;
        line-height: 28px;
      }
    }
`;

