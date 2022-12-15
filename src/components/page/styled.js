import styled from "styled-components";

export const StyledPage = styled.main`
    width: 100%;
    height: 900px;
    background-color: rgb(0,0,0);
    color: rgb(255,255,255);
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Barlow Condensed', 'Barlow', 'Bellefair';
`;