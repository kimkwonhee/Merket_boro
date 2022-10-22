import React from "react";
import styled from "styled-components";

const MarketTemplats = ({ items, basket }) => {
    return (
        <MarketTemplat>
            <ItemWrapper>
                <ItemList>{items}</ItemList>
            </ItemWrapper>
            <BasketWrapper>
                <ItemTitle>주문 목록</ItemTitle>
                <OrderNameList>
                    <ProductName>상품명</ProductName>
                    <Unit>단위</Unit>
                    <Price>단가</Price>
                    <Quantity>수량</Quantity>
                </OrderNameList>
                <OrderList>{basket}</OrderList>
            </BasketWrapper>
        </MarketTemplat>
    )
}

const MarketTemplat = styled.div`
    width: 1000px;
    height: auto;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    justify-content: space-between;

    @media all and (max-width:1000px) {
        width : 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`
const ItemWrapper = styled.div`
    width: 47%;
    height: 300px;
    overflow: scroll;
    overflow-x: hidden;
    border: 2px solid black;
    text-align: center;
    background: rgb(0,0,0,0.1);
    padding: 20px 10px;

    @media all and (max-width:1000px) {
        width: 450px;
        margin-bottom: 20px;
    }

    @media all and (max-width:520px) {
        width: 99%;
        padding: 20px 0px;
    }
`
const BasketWrapper = styled.div`
    width: 47%; 
    height: 300px;
    border: 2px solid black;
    text-align: center;
    padding: 20px 10px;
    overflow: hidden;
    
    @media all and (max-width:1000px) {
        width: 450px;
    }
    @media all and (max-width:520px) {
        width: 99%;
        padding: 20px 0px;
    }
`
const ItemTitle = styled.div`
    width: 100%;
    font-weight: 600;
    margin-bottom: 10px;
`
const OrderNameList = styled.div`
    display: flex;
    padding: 5px 5px;
    background-color: rgba(255,212,0,0.2);
    border: 1px solid #000;
    font-weight: 600;
`
const ProductName = styled.div`
    width: 28%;
    text-align: center;
`
const Unit = styled.div`
    width: 19%;
    text-align: center;
`
const Price = styled.div`
    width: 25%;
    text-align: center;
`
const Quantity = styled.div`
    width: 23%;
    text-align: center;
`
const ItemList = styled.div`
    padding: 0px 20px;
`
const OrderList = styled.div`
`

export default MarketTemplats