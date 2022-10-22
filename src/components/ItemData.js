import React from 'react';
import styled from "styled-components";

const ItemData = ({ name, onClick }) => {
  return (
    <ItemBox onClick={onClick}>
      <ItemTitle>{name}</ItemTitle>
    </ItemBox>
  );
};

const ItemBox = styled.div`
    width: 30%;
    border: 1px solid #000;
    cursor: pointer;

    &:hover{
        background-color: #000;
        color: #fff;
        transition: .2s;
    }
`
const ItemTitle = styled.div`
    padding: 10px 0px;
    font-weight: 600;
`



export default ItemData;