import React from "react";
import styled from "styled-components";

const ToolTip = ({ productName, outside, pointX, pointY, priceOriginal, priceDiscount, discountRate, imageUrl }) => {
    return (
        <div data-x={pointX} data-y={pointY} style={{ display: "block" }}>
            <img
                src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
                style={{ width: "32px", height: "32px" }}
            />
            <img
                src="//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
                class="close-icon hide"
                width="32"
                height="32"
            />
            <ToolTipSpan>
                <ImageDiv>
                    <img src={imageUrl} />
                </ImageDiv>
                <ToolTipCenter>
                    <div>{productName}</div>
                    <PriceBox>
                        <span>{outside ? "예상가" : `${discountRate}%`}</span>
                        <span>{outside ? priceOriginal : priceDiscount}</span>
                    </PriceBox>
                </ToolTipCenter>
                <ArrowBox>
                    <img
                        alt="상품보기"
                        src="//cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
                        style={{ width: "20px", height: "20px" }}
                    />
                </ArrowBox>
            </ToolTipSpan>
        </div>
    );
};

const ToolTipSpan = styled.span`
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.95);
    width: 220px;
    height: 86px;
    padding: 8px 0 8px 8px;
    margin-top: 16px;
    border-radius: 7px;
    box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
    font-size: 14px;
    color: #4a4a4a;
`;

const ImageDiv = styled.div`
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    margin-right: 8px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    & > img {
        width: 100%;
        height: 100%;
    }
`;

const ToolTipCenter = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 2px;
    overflow: hidden;
    text-align: left;
    & > div:nth-child(1) {
        width: 100%;
        overflow: hidden;
        color: #333c45;
        white-space: initial;
        text-overflow: ellipsis;
        line-height: 1.3em;
    }
`;

const PriceBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4px;
    & > span:nth-child(1) {
        color: #898f94;
        font-size: 11px;
        line-height: 11px;
        font-weight: bold;
        margin-right: 4px;
    }
    & > span:nth-child(2) {
        display: flex;
        align-items: center;
        color: #181d1f;
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
    }
`;

const ArrowBox = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: auto;
    margin-right: 2px;
`;
export default ToolTip;
