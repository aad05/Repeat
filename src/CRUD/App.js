import React, { useState } from 'react';
import {
  Table,
  Drawer,
  Avatar,
  Space,
  Button,
  Form,
  Col,
  Row,
  Input,
  Select,
  Modal,
} from 'antd';
import {
  EditOutlined,
  UserAddOutlined,
  DeleteOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import data from './MOCK_DATA.json';

const { Option } = Select;
const App = () => {
  const [dataSource, setDataSource] = useState(data);
  const [visible, setVisible] = useState(false);
  const [addDrawer, setAddDrawer] = useState(false);
  const [name, setName] = useState('');
  const [lasname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(null);
  const [apiAddress, setApiAddress] = useState('');
  // Edit Table New Values
  const [newName, setNewName] = useState('');
  const [newLasName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newGender, setNewGender] = useState(null);
  const [newApiAddress, setNewApiAddress] = useState('');
  const [changeId, setChangeId] = useState(null);
  // Sorting
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      sorter: (record1, record2) => {
        return record1.id > record2.id;
      },
    },
    {
      key: '2',
      title: 'First Name',
      dataIndex: 'first_name',
      width: 150,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              placeholder='Type text here'
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
            <Button
              style={{ display: 'inline-block' }}
              type='danger'
              onClick={() => clearFilters()}
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.first_name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      key: '3',
      title: 'Last Name',
      dataIndex: 'last_name',
      width: 150,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              placeholder='Type text here'
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
            <Button
              style={{ display: 'inline-block' }}
              type='danger'
              onClick={() => clearFilters()}
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.last_name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      key: '4',
      title: 'Email',
      dataIndex: 'email',
      width: 300,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              placeholder='Type text here'
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
            <Button
              style={{ display: 'inline-block' }}
              type='danger'
              onClick={() => clearFilters()}
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.email.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      key: '5',
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        {
          text: 'Male',
          value: true,
        },
        { text: 'Female', value: false },
      ],
      onFilter: (value, record) => {
        return record.gender === value;
      },
      width: 200,
    },
    {
      key: '6',
      title: 'Api Address',
      dataIndex: 'ip_address',
      width: 200,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              placeholder='Type text here'
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
            <Button
              style={{ display: 'inline-block' }}
              type='danger'
              onClick={() => {
                clearFilters();
              }}
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.ip_address.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      key: 'operation',
      title: 'Action',
      width: 80,
      render: (record) => (
        <>
          <EditOutlined
            style={{ color: '#1792FF' }}
            onClick={() => onEdit(record)}
          />
          <DeleteOutlined
            onClick={() => onDelete(record.id)}
            style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }}
          />
        </>
      ),
    },
  ];

  const onDelete = (id) => {
    Modal.confirm({
      title: 'Are you sure, you want delete this user?',
      okType: 'danger',
      onOk: () => {
        setDataSource((prev) => prev.filter((value) => value.id !== id));
      },
      okText: 'Yes',
    });
  };
  const onClose = () => {
    setVisible(false);
  };

  const onEdit = (record, type) => {
    setVisible(true);
    setNewName(record.first_name);
    setNewLastName(record.last_name);
    setNewEmail(record.email);
    setNewGender(record.gender);
    setNewApiAddress(record.ip_address);
    setChangeId(record.id);
  };
  const onSave = () => {
    setDataSource((prev) =>
      prev.map((value) =>
        value.id === changeId
          ? {
              ...value,
              first_name: newName,
              last_name: newLasName,
              email: newEmail,
              gender: newGender,
              ip_address: newApiAddress,
            }
          : value
      )
    );
    setVisible(false);
  };
  const handleSubmit = () => {
    const newUser = {
      id: dataSource.length + 1,
      first_name: name,
      last_name: lasname,
      email: email + '@gmail.com',
      gender: gender,
      ip_address: apiAddress,
    };
    setDataSource((prev) => [...prev, newUser]);
    if ((name && lasname && email && gender, apiAddress)) {
      setAddDrawer(false);
    }
  };
  return (
    <>
      <Table
        style={{ width: '80%', margin: '50px auto 0' }}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 300 }}
        onClick={() => onEdit()}
        rowKey='id'
        pagination={{
          current: page,
          pageSize: pageSize,
          total: 500,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      />
      {/* Edit Users */}
      <Drawer
        title='Edit User'
        width={750}
        placement={'right'}
        onClose={onClose}
        visible={visible}
      >
        <Form hideRequiredMark layout='vertical'>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label='First Name'
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input
                  name='newname'
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder='Please enter user name'
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Last Name'
                rules={[
                  { required: true, message: 'Please enter user last name' },
                ]}
              >
                <Input
                  value={newLasName}
                  onChange={(e) => setNewLastName(e.target.value)}
                  placeholder='Please enter user name'
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label='Gmail'
                rules={[{ required: true, message: 'Please enter gmail' }]}
              >
                <Input
                  name='newgmail'
                  value={newEmail}
                  style={{ width: '100%' }}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder='Please enter gmail'
                  rules={[
                    { required: true, message: 'Please enter your gmail' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Gender'
                rules={[{ required: true, message: 'Please choose the type' }]}
              >
                <Select
                  name='newselect'
                  value={newGender}
                  onChange={(e) => {
                    console.log(e);
                  }}
                  placeholder='Please choose the type'
                >
                  <Option value={gender === 'male' ? gender : 'male'}>
                    Male
                  </Option>
                  <Option value={gender === 'female' ? gender : 'female'}>
                    Female
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label='Api Address'
                rules={[
                  { required: true, message: 'Please choose the approver' },
                ]}
              >
                <Input
                  name='newapi'
                  value={newApiAddress}
                  onChange={(e) => setNewApiAddress(e.target.value)}
                  style={{ width: '100%' }}
                  placeholder='Please enter api adress'
                  rules={[
                    { required: true, message: 'Please enter api adress' },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Space>
            <Button onClick={() => setVisible(false)}>Cancel</Button>
            <Button htmlType='submit' onClick={() => onSave()} type='primary'>
              Save
            </Button>
          </Space>
        </Form>
      </Drawer>
      {/* End Editing Users */}

      <Drawer
        title='Add New User'
        visible={addDrawer}
        width={720}
        onClose={() => setAddDrawer(false)}
      >
        <Form hideRequiredMark layout='vertical'>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name='name'
                label='First Name'
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input
                  name='name'
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Please enter user name'
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Last Name'
                name='lastname'
                rules={[
                  { required: true, message: 'Please enter user last name' },
                ]}
              >
                <Input
                  name='lastname'
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder='Please enter user name'
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label='gmail'
                name='gmail'
                rules={[{ required: true, message: 'Please enter gmail' }]}
              >
                <Input
                  name='gmail'
                  style={{ width: '100%' }}
                  onChange={(e) => setEmail(e.target.value)}
                  addonAfter='@gmail.com'
                  placeholder='Please enter gmail'
                  rules={[
                    { required: true, message: 'Please enter your gmail' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='type'
                label='Gender'
                rules={[{ required: true, message: 'Please choose the type' }]}
              >
                <Select
                  name='select'
                  onChange={(e) => {
                    setGender(e);
                  }}
                  placeholder='Please choose the type'
                >
                  <Option value='male'>Male</Option>
                  <Option value='female'>Female</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name='approver'
                label='Api Address'
                rules={[
                  { required: true, message: 'Please choose the approver' },
                ]}
              >
                <Input
                  name='api'
                  onChange={(e) => setApiAddress(e.target.value)}
                  style={{ width: '100%' }}
                  placeholder='Please enter api adress'
                  rules={[
                    { required: true, message: 'Please enter api adress' },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Space>
            <Button onClick={() => setAddDrawer(false)}>Cancel</Button>
            <Button
              htmlType='submit'
              onClick={() => handleSubmit()}
              type='primary'
            >
              Submit
            </Button>
          </Space>
        </Form>
      </Drawer>
      <Avatar
        size={{ xs: 28, sm: 35, md: 40, lg: 64, xl: 80, xxl: 100 }}
        onClick={() => setAddDrawer(true)}
        icon={<UserAddOutlined />}
        style={{
          cursor: 'pointer',
          position: 'fixed',
          right: '50px',
          bottom: '50px',
          background: '#1991FF',
        }}
      />
    </>
  );
};

export default App;
