import styled from "styled-components";

export const Container = styled.section` /* full Screen 1707px */
    padding: 0 10.6%;
    height: auto;

    & section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding-top: 256px;

        @media (max-width: 1440px){
            padding-top: 344px;
        }

        @media (max-width: 770px){
            padding: 0;
            padding-top: 100px;
            flex-direction: column;
            gap: 156px;
        }

        @media (max-width: 556px){
            padding: 0;
            padding-top: 40px;
            flex-direction: column;
            gap: 140px;
            height: 667;
        }
    }

    @media (max-width: 1440px){
        padding: 0 4%;
    }
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    max-width: 450px;
    max-height: 382px;
    padding-left: 76px;


    & span{
        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.725px;
        color: #D0D6F9;
        text-align: justify;
    }

    & h1{
        margin: 0;
        margin: 12px 0;
        padding: 0;
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 150px;
        line-height: 172px;
        color: #FFFFFF;
    }

    & p{
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #D0D6F9;  
        text-align: justify; 
        margin: 0;
    }

    @media (max-width: 1440px){
        margin-top: -10px;
        padding-left: 136px;
        
    }

    @media (max-width: 770px){
        padding: 0;
        justify-content: center;
        align-items: center;

        & span{
            font-size: 14px;
        }

        & h1{
            font-size: 80px;
            line-height: 100px;
        }

        & p{
            text-align: center;
            font-size: 16px;
            line-height: 28px;
        }
    }

    @media (max-width: 556px){
        padding: 0;
        justify-content: center;
        align-items: center;
        height: auto;

        & span{
            font-size: 18px;
            padding-bottom: 20px;
        }

        & h1{
            font-size: 110px;
            padding-bottom: 20px;
        }

        & p{
            text-align: center;
            padding: 0 28px;
            width: initial;
            font-size: 16px;
            line-height: 28px;
        }
    }
`;

export const CircleText = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 50%;
    padding: 115.5px  62px;
    margin-bottom: 10px;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 2px;
    color: #0B0D17;

    @media (max-width: 1440px){
      padding-right: 60px;
    }

    @media (max-width: 1440px){
      margin-right: 0;
    }

    @media (max-width: 556px){
        padding: 0;
        padding: 0;
        width: 150px;
        height: 150px;
        font-size: 20px;
    }
`;