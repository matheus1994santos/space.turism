import styled from "styled-components";

import { screenSizeWidth } from "../../utils/screensize";

console.log(screenSizeWidth)

export const StyledMenu = styled.section`/* full Screen 1707px */
    padding: 58px 0 0 4%;
    color: black;

    
    & div{
        display: flex;
        height: 96px;
        align-items: center;
        justify-content: space-between;

        & img{
          width: 66px;
          height: 66px;
        }

        & div{
            position: relative;
            width: 573px;
            height: 1px;
            left: 4.5%; 
            border: none;
            border-top: 1px solid #979797;
            opacity: 0.25;
            z-index: 1;
        }
    }

    @media (max-width: 1440px) {
        padding: 38px 0 0 4%;

        & div{
            & img{
                width: 48px;
                height: 48px;
            }
            & div{
                width: 440px;
                left: 5.2%;
            }
        }
    }

    @media (max-width: 770px) {
        padding: 0 0 0 4%;

        & div{

            & div{
                display: none;
            }
        }
    }
`;

export const Options = styled.nav`
    display: flex;
    align-items: center;
    max-width: 1090px;
    width: 100%;
    height: 96px;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(39.7742px);
    color: white;
    
    & ul{
        display: flex;
        list-style-type: none;
        gap: 88px;
        font-family: 'Barlow Condensed';
        padding-left: 16%;


        & a{
            display: flex;
            align-items: center;
            font-size: 16px;
            font-style: normal;
            line-height: 19.2px;
            letter-spacing: 2.7px;
            text-transform: uppercase;
            font-weight: 400;
            height: 94px;
            cursor: pointer;
            text-decoration: none;
            color: white;
        }

        
        .active{
            border-bottom: 1px solid white;
        }
    }

    @media (max-width: 1710px) {
        max-width: 960px;
    }

    @media (max-width: 1440px) {
        max-width: 830px;

        & ul{
            gap: 60px;
            padding-left: 18%;
        }
    }

    @media (max-width: 770px) {
        max-width: 450px;

        & ul{
            gap: 30px;
            padding-left: 18%;

            & a{
                font-size: 13px; 

            }
        }
    }
`;

export const NumberDesk = styled.span`
    /* display: inline; */

    @media (max-width: 770px) {
        display: none;
    }

    @media (max-width: 500px) {
        display: initial;
    }
`;

export const OptionsMobile = styled.nav`
    display: flex;
    flex-direction: column;
    max-width: 254px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(39.7742px);
    color: white;
    height: 667px;

    & ul{
        display: flex;
        flex-direction: column;
        list-style-type: none;
        font-family: 'Barlow Condensed';
        padding-bottom: 40px;
        padding-top: 30px;

        gap: 30px;

        & a{
            display: flex;
            align-items: center;
            font-size: 16px;
            font-style: normal;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            text-transform: uppercase;
            font-weight: 400;
            cursor: pointer;
            text-decoration: none;
            color: white;
        }
    }

    & nav{
        padding-top: 300px;
        text-align: right;
        padding-right: 20px;
        & img{
            width: 19.09px;
            height: 19.09px;
        }
    }
`;

