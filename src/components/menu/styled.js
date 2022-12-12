import styled from "styled-components";


export const StyledMenu = styled.section`
    padding: 40px 0 0 4%;
    color: black;
    
    & div{
        display: flex;
        height: 96px;
        align-items: center;
        /* justify-content: space-between; */

        & img{
          width: 46px;
          height: 46px;
        }

        & div{
            position: absolute;
            width: 473px;
            height: 1px;
            left: 167px;
            top: 88px;
            background-color: #979797;
            opacity: 0.25;
            z-index: 1;
        }
    }
`;



export const Options = styled.nav`
    position: absolute;
    display: flex;
    align-items: center;
    width: 811px;
    height: 96px;
    left: 610px;
    top: 40px;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(39.7742px);
    color: white;
    
    & ul{
        display: flex;
        list-style-type: none;
        margin-left: 90px;
        gap: 40px;
        font-family: 'Barlow Condensed';

        & li{
            display: flex;
            align-items: center;
            font-size: 16px;
            font-style: normal;
            line-height: 19.2px;
            letter-spacing: 2.7px;
            text-transform: uppercase;
            font-weight: 400;
            height: 86px;
            cursor: pointer;
            /* padding: 36px 0; */
            /* border-bottom: 1px solid white; */
        }
    }
`;