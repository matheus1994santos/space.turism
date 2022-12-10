import styled from "styled-components";

export const Container = styled.section`
    padding-left:10.6%;
    border: 1px solid red;
    height: auto;

    & section{
      display: flex;
      border: 1px solid white;
      height: 100%;
    }
`;

export const TitleTech = styled.div`
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #FFFFFF;

    & p{
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