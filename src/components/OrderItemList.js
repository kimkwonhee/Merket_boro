import React, { useCallback } from 'react';
import OrderTemplet from './OrderTemplet';
import {useSelector, useDispatch} from 'react-redux';
import { toggleTodo, setCounter } from '../modules/todos';
import styled from 'styled-components';

const OrderItemList = () => {
  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch();
  const onDelete = useCallback((name) => dispatch(toggleTodo(name)), [dispatch]);
  const onSetCounter = useCallback((diff, name) => dispatch(setCounter(diff, name)), [dispatch]);
  let totalCount = todos.reduce((acc, cur) => acc + cur.count, 0);
  let totalPrice = todos.reduce((acc, cur) => acc + cur.unitPrice * cur.count, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 
  return (
    <Wrraper>
      <Inner>
        {
        todos.map(item => {
          return (
            <OrderTemplet 
              key={item.id}
              name={item.name} 
              unit={item.unitName} 
              price={item.unitPrice} 
              count={item.count} 
              onDelete={onDelete}
              onSetCounter={onSetCounter}
              />
          )
        })
      }
      </Inner>
      <hr />
      <TotalSection>
        <TotalCount><b>총 주문 수량 :</b> {totalCount}</TotalCount><TotalPrice><b>합계 :</b> {totalPrice}원</TotalPrice>
      </TotalSection>
    </Wrraper>
  );
};

const Wrraper = styled.div`
`
const Inner = styled.div`
  overflow-y: auto;
  height: 200px;
`
const TotalSection = styled.div`
  display: flex;
  justify-content: space-around;
`
const TotalCount = styled.div`
`
const TotalPrice = styled.div`
`


export default OrderItemList;
