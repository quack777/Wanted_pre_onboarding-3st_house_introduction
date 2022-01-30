import axios from "axios";
import React, { useEffect, useState } from "react";
import HouseIntorduceCenter from "./HouseIntorduceCenter";
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
        <div>
            <img src={houseInfo?.imageUrl} />
            {houseInfo?.productList.map((productList) => (
                <HouseIntorduceCenter
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

export default SetHouseIntroduce;
