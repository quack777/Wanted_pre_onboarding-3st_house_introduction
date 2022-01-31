import React from "react";
import styled from "styled-components";

const HouseIntorduceHead = () => {
    return (
        <HeadBox>
            <h2>2022.01.12 17:55</h2>
            <div>화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방</div>
            <div>#방꾸미기 #우드톤 #화이트 #라탄</div>
            <HeadDataBox>
                <span className="dataTitle">보관함</span>
                <span className="dataInfo">93</span>
                <span className="dataTitle">댓글</span>
                <span className="dataInfo">0</span>
            </HeadDataBox>
        </HeadBox>
    );
};

const HeadBox = styled.div`
    width: 100%;
    margin: 0 auto;
    & > h2 {
        font-size: 10px;
        font-weight: 100;
        color: #646464;
        padding-bottom: 8px;
    }
    & > div:nth-child(2) {
        font-size: 27px;
        font-weight: 900;
        color: black;
        padding-bottom: 8px;
        white-space: pre-wrap;
        line-height: 40px;
    }
    & > div:nth-child(3) {
        font-size: 15px;
        color: #646464;
    }
`;

const HeadDataBox = styled.div`
    margin-top: 15px;
    font-size: 15px;
    & > .dataTitle {
        color: #afafaf;
        margin-right: 5px;
    }
    & > .dataInfo {
        margin-right: 15px;
        font-weight: 400;
    }
`;

export default HouseIntorduceHead;
