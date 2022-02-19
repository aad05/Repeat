import React, { useState, useEffect } from 'react';
import { Table, Drawer, Input, Modal } from 'antd';

const ThirdPage = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  console.log(process.env.REACT_APP_JSON_PLACEHOLDER_URL, 'env');
  useEffect(() => {
    fetch(process.env.REACT_APP_JSON_PLACEHOLDER_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  let columns = [
    { key: '1', title: 'Name', dataIndex: 'name' },
    { key: '2', title: 'Email', dataIndex: 'email' },
    {
      key: '3',
      title: 'Action',
      render: (eldor) => (
        <>
          <a
            style={{ color: 'red', marginRight: '10px' }}
            onClick={() => {
              console.log(eldor);
            }}
          >
            Delete
          </a>
          <a
            onClick={() => {
              console.log(eldor.id);
              setVisible(true);
            }}
          >
            Edit
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      <Table
        style={{ width: '80%', margin: 'auto' }}
        dataSource={data}
        columns={columns}
        rowKey='id'
      />
      <Modal
        placement='left'
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <Input />
      </Modal>
    </>
  );
};

export default ThirdPage;
