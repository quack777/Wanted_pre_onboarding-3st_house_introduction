import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToolTip from "./HouseIntorduceCenter";
import HouseIntorduceSlide from "./HouseIntorduceSlide";

const SetHouseIntroduce = () => {
    const [houseInfo, setHouseInfo] = useState();

    useEffect(() => {
        const getHouseInfo = () => {
            axios
                .get("https://cdn.ggumim.co.kr/test/image_product_link.json")
                .then((res) => setHouseInfo(res.data))
                .catch((err) => console.log(err));
        };
        getHouseInfo();
    }, []);

    return (
        <div style={{ marginTop: "100px" }}>
            <ViewContentImage>
                <img src={houseInfo?.imageUrl} style={{ width: "100%", height: "auto" }} />
                {houseInfo?.productList.map((productList) => (
                    <ToolTip
                        key={productList.productId}
                        productName={productList.productName}
                        outside={productList.outside}
                        pointX={productList.pointX}
                        pointY={productList.pointY}
                        priceOriginal={productList.priceOriginal}
                        priceDiscount={productList.priceDiscount}
                        discountRate={productList.discountRate}
                        imageUrl={productList.imageUrl}
                    />
                ))}
            </ViewContentImage>
            <div style={{ display: "flex" }}>
                {houseInfo?.productList.map((productList) => (
                    <HouseIntorduceSlide
                        key={productList.productId}
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
`;

export default SetHouseIntroduce;
