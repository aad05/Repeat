import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

export default function Header({ handleCart }) {
  return (
    <AppBar sx={{ mb: '10px' }} position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          component='span'
          cursor='pointer'
          sx={{ flexGrow: 1 }}
        >
          MUI Learning
        </Typography>
        <ShoppingBasket onClick={handleCart} />
      </Toolbar>
    </AppBar>
  );
}
