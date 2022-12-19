import styled from "styled-components";

export const Container = styled.section` /* full Screen 1707px */
    display: flex;
    padding: 0 auto;
    height: 640px;

    & section{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 560px;
        height: 100%;
        margin: 0 auto;
    }
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 450px;
    height: 382px;

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
`;