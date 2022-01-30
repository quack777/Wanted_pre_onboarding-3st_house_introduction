import React from "react";
import styled, { css } from "styled-components";

const HouseIntorduceSlide = ({ productId, imageUrl, toolTipActiveInfo }) => {
    console.log(toolTipActiveInfo.find((info) => info.productId === productId).active);
    return (
        <SlideSmallBox active={toolTipActiveInfo.find((info) => info.productId === productId).active}>
            <img alt="slideImg" src={imageUrl} />
        </SlideSmallBox>
    );
};

const SlideSmallBox = styled.div`
    display: inline-flex;
    flex-shrink: 0;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    margin: 28px 6px;
    position: relative;
    transition-property: transform;
    ${(props) =>
        props.active &&
        css`
            background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
            margin: 26px 4px;
            padding: 2px;
            border-radius: 18px;
        `}

    & > img {
        position: relative;
        width: 106px;
        height: 106px;
        border-radius: 16px;
        border: 0.5px solid #aaafb9;
        user-select: none;
        cursor: pointer;
    }
`;

export default HouseIntorduceSlide;
