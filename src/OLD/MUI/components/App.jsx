import { useState } from 'react';

import BasketList from './BasketList';
import GoodsList from './GoodsList';
import Search from './Search';

import { goods } from '../data/goods';
import Header from './Header';
import { Container } from '@mui/material';
import Basket from './Basket';

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  return (
    <>
      <Header handleCart={() => setCartOpen(true)} />
      <Container sx={{ mt: '1rem' }}>
        <Search value={search} onChange={handleChange} />
        <GoodsList goods={products} setOrder={addToOrder} />
        <BasketList order={order} setOrder={removeFromOrder} />
      </Container>
      <Basket
        order={order}
        removeFromOrder={removeFromOrder}
        cartOpen={isCartOpen}
        closeCart={() => setCartOpen(false)}
      />
    </>
  );
};

export default App;
