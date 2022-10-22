import React, {useCallback} from 'react';
import ItemData from './ItemData';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { addTodo } from '../modules/todos'

const ItemList = ({itmelist}) => {

  const dispatch = useDispatch();
  const onPut = useCallback((order) => dispatch(addTodo(order, 1)), [dispatch]); 

  return (
    <ItemInner>
        {itmelist.map(item => {
            return <ItemData {...item} key={item.name} onClick={() => onPut(item)}/>
        })}
    </ItemInner>
  )
};

const ItemInner = styled.div`
    display: flex;
    gap: 10px 4%;
    flex-wrap: wrap;
`

export default ItemList;