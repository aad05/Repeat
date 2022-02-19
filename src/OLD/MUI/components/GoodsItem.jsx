import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
  const { name, price, setOrder } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          image='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'
          alt={name}
          sx={{ height: 140 }}
        />
        <CardContent>
          <Typography variant='h6' component='h3'>
            {name}
          </Typography>
          <Typography variant='body1'>Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ mt: 'auto' }}
            variant='text'
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
