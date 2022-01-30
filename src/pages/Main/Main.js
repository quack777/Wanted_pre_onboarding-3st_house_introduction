import React from "react";
import styled from "styled-components";
import SetHouseIntroduce from "../../components/HouseIntroduce/SetHouseIntroduce";

const Main = () => {
    return (
        <MainLayout>
            <SetHouseIntroduce />
        </MainLayout>
    );
};

const MainLayout = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;
export default Main;
