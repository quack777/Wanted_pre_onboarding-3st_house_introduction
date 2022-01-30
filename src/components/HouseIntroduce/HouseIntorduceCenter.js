import React from "react";

const HouseIntorduceCenter = ({
    productName,
    outside,
    pointX,
    pointY,
    priceOriginal,
    priceDiscount,
    discountRate,
    imageUrl,
}) => {
    return (
        <div>
            <img src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png" />
            <span>
                <div>
                    <img src={imageUrl} />
                </div>
                <div>
                    <p>{productName}</p>
                    <div>
                        <p>{outside ? "예상가" : `${discountRate}%`}</p>
                        <p>{outside ? priceOriginal : priceDiscount}</p>
                    </div>
                </div>
            </span>
        </div>
    );
};

export default HouseIntorduceCenter;
