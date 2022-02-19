import { Close } from '@mui/icons-material';
import { IconButton, ListItem } from '@mui/material';

const BasketItem = ({ removeFromorder, name, price, quantity, id }) => {
  return (
    <ListItem>
      {name} {price}руб x{quantity}
      <IconButton
        className='btn btn-primary'
        onClick={() => removeFromorder(id)}
      >
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
