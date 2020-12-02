import React, { useRef, useState, Suspense, useEffect, useCallback } from 'react'
import { makeObservable, action, computed, observable, makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { Divider, Image, Card, List, Modal, Button, Tooltip } from 'antd';
import { VideoCameraAddOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Spin, Space } from 'antd';
import Room from './Room';

const suffix = (
  <VideoCameraAddOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


export default observer(({ room }) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');

  const handleSubmit = useCallback(
    async event => {
      setToken('wait')
      const data = await fetch('https://us-central1-virtualdoctor-d2703.cloudfunctions.net/token', {
        method: 'POST',
        body: JSON.stringify({
          identity: username,
          room: room
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
      setToken(data.token);
    },
    [room, username]
  )

  const handleLogout = useCallback(() => {
    console.log('LOGING OUT')
    setToken(null)
  }, [])

  if (token === null || token == 'wait') {
    return <>
      <Input.Search
        size="large"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Name"
        loading={token === 'wait'}
        enterButton="Join"
        suffix={suffix}
        prefix={<UserOutlined />}
        onSearch={handleSubmit}
      />
    </>;
  } else {
    return <Room roomName={room} token={token} handleLogout={handleLogout} />;
  }
});

