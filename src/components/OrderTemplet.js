import React from 'react';
import styled from 'styled-components';

const OrderTemplet = ({ name, unit, price, count, onDelete, onSetCounter }) => {

  const onChange = e => {
    if(e.target.value === "") {
      onSetCounter(0, e.target.name);
    } else {
      onSetCounter(parseInt(e.target.value, 10), e.target.name);
    }
  }

  return (
    <OrderItem>
      <OrderName>{name}</OrderName>
      <OrderUnit>{unit}</OrderUnit>
      <OrderPrice>{price}</OrderPrice>
      <OrderCount>
        <OrderCountInput type="number" 
                         value={count ? count : 0} 
                         onChange={onChange}
                         name={name}
                         min="0"/>
      </OrderCount>
      <OrderDelete onClick={() => onDelete(name)}>X</OrderDelete>
    </OrderItem>
  );
};

const OrderItem = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
  `
const OrderName = styled.div`
    width: 30%;
`
const OrderUnit = styled.div`
    width: 20%;
`
const OrderPrice = styled.div`
    width: 25%;
` 
const OrderCount = styled.div`
    width: 25%;
`
const OrderCountInput = styled.input`
    width: 45px;
    text-align: right;
`
const OrderDelete = styled.div`
    cursor: pointer;
    margin-right: 10px;
`

export default OrderTemplet;