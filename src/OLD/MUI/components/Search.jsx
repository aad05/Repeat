import { TextField } from '@mui/material';

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      type='search'
      label='Outline'
      value={value}
      fullWidth
      variant='standard'
      onChange={onChange}
      sx={{ mb: '20px' }}
    />
  );
};

export default Search;
