import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const SecondPagination = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(dataSource);
  const columns = [
    { key: 1, title: 'ID', dataIndex: 'id' },
    {
      key: 2,
      title: 'User Email',
      dataIndex: 'email',
      sorter: (record1, record2) => {
        if (record1 > record2) {
          return 1;
        }
      },
    },
    {
      key: 3,
      title: 'Status',
      dataIndex: 'completed',
      render: (completed) => {
        return <p>{completed ? 'Completed' : 'In Progress'}</p>;
      },
      filters: [
        { text: 'Completed', value: true },
        { text: 'In Progress', value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];
  useEffect(() => {
    setLoading(false);
    axios.get(process.env.REACT_APP_JSON_PLACEHOLDER_URL).then((data) => {
      console.log(data);
      setDataSource(data.data);
    });
  }, []);

  return (
    <Table
      loading={loading}
      columns={columns}
      pagination={{}}
      dataSource={dataSource}
    ></Table>
  );
};

export default SecondPagination;
