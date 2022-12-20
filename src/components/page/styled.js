import styled from "styled-components";

import { screenSizeWidth, screenSizeHeight } from "../../utils/screensize";

const screenHeight = window.screen.height;

export const StyledPage = styled.main` /* full Screen 1707px */
    width: 100%;
    max-height: 1000px;
    height: ${screenHeight + 'px'};
    background-color: rgb(0,0,0);
    color: rgb(255,255,255);
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: 'Barlow Condensed', 'Barlow', 'Bellefair';
`;