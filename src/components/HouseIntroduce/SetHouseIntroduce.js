import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToolTip from "./ToolTip";
import HouseIntorduceSlide from "./HouseIntorduceSlide";

const test = [
    { productId: 1, active: false },
    { productId: 2, active: false },
    { productId: 3, active: false },
    { productId: 4, active: false },
    { productId: 5, active: false },
    { productId: 6, active: false },
    { productId: 7, active: false },
];

const SetHouseIntroduce = () => {
    const [houseInfo, setHouseInfo] = useState();
    const [toolTipActiveInfo, setToolTipActiveInfo] = useState([]);

    const makeToolTipActiveInfo = (productList) => {
        productList.map((product) => {
            setToolTipActiveInfo(toolTipActiveInfo.concat({ productId: product.productId, active: false }));
        });
    };

    const openActive = (productId) => {
        console.log(productId);
    };

    const closeActive = (productId) => {
        console.log(productId);
    };

    useEffect(() => {
        const getHouseInfo = () => {
            axios
                .get("https://cdn.ggumim.co.kr/test/image_product_link.json")
                .then((res) => {
                    setHouseInfo(res.data);
                    makeToolTipActiveInfo(res.data.productList);
                })
                .catch((err) => console.log(err));
        };
        getHouseInfo();
    }, []);

    return (
        <div style={{ marginTop: "100px" }}>
            <ViewContentImage>
                <img src={houseInfo?.imageUrl} alt="productImg" style={{ width: "100%", height: "auto" }} />
                {houseInfo?.productList.map((productList) => (
                    <ToolTip
                        key={productList.productId}
                        productId={productList.productId}
                        productName={productList.productName}
                        outside={productList.outside}
                        pointX={productList.pointX}
                        pointY={productList.pointY}
                        priceOriginal={productList.priceOriginal}
                        priceDiscount={productList.priceDiscount}
                        discountRate={productList.discountRate}
                        imageUrl={productList.imageUrl}
                        makeToolTipActiveInfo={makeToolTipActiveInfo}
                        openActive={openActive}
                        closeActive={closeActive}
                    />
                ))}
            </ViewContentImage>
            <div style={{ display: "flex" }}>
                {houseInfo?.productList.map((productList) => (
                    <HouseIntorduceSlide
                        key={productList.productId}
                        id={productList.productId}
                        productName={productList.productName}
                        imageUrl={productList.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

const ViewContentImage = styled.div`
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-align: center;
`;

export default SetHouseIntroduce;
