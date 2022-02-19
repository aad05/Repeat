import { ShoppingBasket } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import BasketItem from './BasketItem';

const Basket = (props) => {
  const {
    cartOpen,
    order = [],
    removeFromorder,
    closeCart = Function.prototype,
  } = props;
  return (
    <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary='Korzina' />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>No no no </ListItem>
        ) : (
          order.map((value) => (
            <BasketItem
              key={value.name}
              removeFromorder={removeFromorder}
              {...value}
            />
          ))
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
