import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import datas from './MOCK_DATA.json';

const App = () => {
  const [data, setData] = useState(datas);
  const [selected, setSelected] = useState(null);
  const [selectedName, setSelectedName] = useState('');
  const [selectedSurname, setSelectedSurName] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [sortBy, setSortBy] = useState('id');
  const [search, setSearch] = useState('');
  //   Edited Values

  //   Delete Todo
  const onDelete = (id) => {
    // data.splice(id - 1, 1);
    // setData(data);
    setData(data.filter((value) => value.id !== id));
  };
  //   Edit Todo
  const onEdit = (value) => {
    setSelected(value.id);
    setSelectedName(value.first_name);
    setSelectedSurName(value.last_name);
    setSelectedEmail(value.email);
  };
  //   Save Todo
  const onSave = () => {
    setSelected(null);
    setData((prev) =>
      prev.map((value) =>
        value.id === selected
          ? {
              ...value,
              first_name: selectedName,
              last_name: selectedSurname,
              email: selectedEmail,
            }
          : value
      )
    );
  };
  // Sorting
  const onSort = (name) => {
    setData(data.sort((a, b) => a.name - b.name));
  };
  // Searching
  const onSearch = () => {
    data.filter((val) => {
      if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
        setData([val, ...data]);
      }
    });
    setData();
  };
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={onSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>
                {value.id === selected ? (
                  <input
                    onChange={(e) => setSelectedName(e.target.value)}
                    value={selectedName}
                  />
                ) : (
                  value.first_name
                )}
              </td>
              <td>
                {value.id === selected ? (
                  <input
                    onChange={(e) => setSelectedSurName(e.target.value)}
                    value={selectedSurname}
                  />
                ) : (
                  value.last_name
                )}
              </td>
              <td>
                {value.id === selected ? (
                  <input
                    onChange={(e) => setSelectedEmail(e.target.value)}
                    value={selectedEmail}
                  />
                ) : (
                  value.email
                )}
              </td>
              <td>
                <button onClick={() => onDelete(value.id)}>Delete</button>
                {selected === value.id ? (
                  <button onClick={() => onSave()}>Save</button>
                ) : (
                  <button onClick={() => onEdit(value)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <select onChange={(e) => onSort(e.target.value)}>
        <option value='id'>Id</option>
        <option value='name'>Name</option>
        <option value='surname'>Surname</option>
        <option value='email'>Email</option>
      </select>
    </div>
  );
};

export default App;
