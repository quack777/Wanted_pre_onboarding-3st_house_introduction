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
    const [isLoading, setIsLoading] = useState(true);

    const makeToolTipActiveInfo = (productList) => {
        const pushtoolTipActiveInfo = [];

        productList.map((product) => {
            // setToolTipActiveInfo(toolTipActiveInfo.concat([{ productId: product.productId, active: false }]));
            /* const pushtoolTipActiveInfo = { productId: product.productId, active: false };
            setToolTipActiveInfo([...toolTipActiveInfo, pushtoolTipActiveInfo]); */
            pushtoolTipActiveInfo.push({ productId: product.productId, active: false });
        });
        setToolTipActiveInfo(...toolTipActiveInfo, pushtoolTipActiveInfo);
    };

    useEffect(() => {
        const getHouseInfo = () => {
            axios
                .get("https://cdn.ggumim.co.kr/test/image_product_link.json")
                .then((res) => {
                    setHouseInfo(res.data);
                    makeToolTipActiveInfo(res.data.productList);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        };
        getHouseInfo();
    }, []);

    const openActive = (productId) => {
        setToolTipActiveInfo(
            toolTipActiveInfo.map((info) =>
                info.productId === productId ? { ...info, active: true } : { ...info, active: false },
            ),
        );
    };

    const closeActive = (productId) => {
        setToolTipActiveInfo(
            toolTipActiveInfo.map((info) => (info.productId === productId ? { ...info, active: false } : info)),
        );
    };

    const allCloseActive = () => {
        setToolTipActiveInfo(toolTipActiveInfo.map((info) => (info.active ? { ...info, active: false } : info)));
    };

    return (
        <div style={{ marginTop: "100px" }}>
            {isLoading ? (
                <p>api호출중</p>
            ) : (
                <>
                    <ViewContentImage>
                        <img
                            src={houseInfo?.imageUrl}
                            onClick={allCloseActive}
                            alt="productImg"
                            style={{ width: "100%", height: "auto" }}
                        />
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
                                toolTipActiveInfo={toolTipActiveInfo}
                                openActive={openActive}
                                closeActive={closeActive}
                            />
                        ))}
                    </ViewContentImage>
                    <SlideOverflow>
                        <SlideMoveBox>
                            {houseInfo?.productList.map((productList) => (
                                <HouseIntorduceSlide
                                    key={productList.productId}
                                    productId={productList.productId}
                                    productName={productList.productName}
                                    imageUrl={productList.imageUrl}
                                    discountRate={productList.discountRate}
                                    toolTipActiveInfo={toolTipActiveInfo}
                                    openActive={openActive}
                                    closeActive={closeActive}
                                />
                            ))}
                        </SlideMoveBox>
                    </SlideOverflow>
                </>
            )}
        </div>
    );
};

const ViewContentImage = styled.div`
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-align: center;
`;

const SlideOverflow = styled.div`
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: auto;
    background-color: #fff;
    padding: 0 10px;
    touch-action: pan-y;
`;

const SlideMoveBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    transition-property: transform;
    box-sizing: content-box;
    transform: translate3d(0px, 0, 0);
`;

export default SetHouseIntroduce;
