import styled from "styled-components";

const screenHeight = window.screen.height;

export const StyledPage = styled.main` /* full Screen 1707px */
    width: 100%;
    height: ${screenHeight + 'px'};
    background-color: rgb(0,0,0);
    color: rgb(255,255,255);
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Barlow Condensed', 'Barlow', 'Bellefair';
`;