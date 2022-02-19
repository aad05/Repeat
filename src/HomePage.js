import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Pagination, TextField, Stack, Link } from '@mui/material';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('react');
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + `query=${query}&page=${page - 1}`)
      .then(({ data }) => {
        setPosts(data.hits);
        setPageQty(data.nbPages);
      });
  }, [query, page]);
  return (
    <Container>
      <TextField
        fullWidth
        label='query'
        sx={{ mb: '10px' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Stack>
        {!!pageQty && (
          <Pagination
            count={pageQty}
            page={page}
            showFirstButton
            showLastButton
            onChange={(_, num) => setPage(num)}
          />
        )}
        {posts.map((value) => (
          <Link key={value.objectID} href={value.url}>
            {value.title}
          </Link>
        ))}
      </Stack>
    </Container>
  );
};

export default App;
