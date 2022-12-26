import styled from "styled-components";

import { screenSizeWidth } from "../../utils/screensize";

const screenHeight = window.screen.height;

export const StyledPage = styled.main` /* full Screen 1707px */
    width: 100%;
    height: 975px;
    background-color: rgb(0,0,0);
    color: rgb(255,255,255);
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: 'Barlow Condensed', 'Barlow', 'Bellefair';

    @media (max-width: 770px){
      max-height: 1024px;
      padding-bottom: 80px;
    }

    @media (max-width: 556px){
      max-height: 906px;
      padding-bottom: 0px;
    }
`;