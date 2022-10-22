import React from 'react';
import MarketTemplats from './MarketTemplats';
import ItemList from './ItemList';
import OrderItemList from './OrderItemList'
import itemlists from '../data/items.json'

const Market = () => {

  return (
    <>
      <MarketTemplats 
        items={<ItemList itmelist={itemlists}/>} 
        basket={<OrderItemList />} 
      />;
    </>
  )
}

export default Market;