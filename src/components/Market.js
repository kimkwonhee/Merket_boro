import React, {useEffect, useReducer} from 'react';
import MarketTemplats from './MarketTemplats';
import ItemList from './ItemList';
import OrderItemList from './OrderItemList'
import itemlists from '../data/items.json'

//lodding, success, error
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      }
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      }
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      }
    default: 
      throw new Error('`${action.type}');
  }
}

const Market = () => {

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  const fetchItems = async () => {
    dispatch({type: 'LOADING'});
    try {
      const response = await itemlists;
      dispatch({type: 'SUCCESS', data: response});
    } catch (e){
      dispatch({type: 'ERROR', error: e});
    }
  }

  useEffect(() => {
    fetchItems();
  }, [])

  const {loading, data: items, error} = state;
  if(loading) return <div>로딩중...</div>
  if(error) return <div>에러 발생</div>
  if(!items) return null;

  return (
    <>
      <MarketTemplats 
        items={<ItemList itmelist={items}/>} 
        basket={<OrderItemList />} 
      />;
    </>
  )
}

export default Market;