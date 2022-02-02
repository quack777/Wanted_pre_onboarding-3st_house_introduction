import React from "react";
import styled, { css } from "styled-components";

const HouseIntorduceSlide = ({ productId, imageUrl, discountRate, toolTipActiveInfo, openActive, closeActive }) => {
    return (
        <SlideSmallBox
            active={toolTipActiveInfo.find((info) => info.productId === productId).active}
            onClick={() =>
                toolTipActiveInfo.find((info) => info.productId === productId).active
                    ? closeActive(productId)
                    : openActive(productId)
            }
        >
            <img alt="slideImg" src={imageUrl} />
            {discountRate === 0 ? null : (
                <DiscountRateBox>
                    {discountRate}
                    <span>%</span>
                </DiscountRateBox>
            )}
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

const DiscountRateBox = styled.div`
    position: absolute;
    top: 0;
    right: 5px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
    width: 24px;
    height: 28px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 11px;
    font-weight: bold;
    line-height: 25px;
    color: white;
    text-align: center;
    padding-left: 1px;
    & > span {
        font-size: 8px;
    }
`;

export default HouseIntorduceSlide;
