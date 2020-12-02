import React, { useRef, useState, Suspense, useEffect } from 'react'
import { makeObservable, action, computed, observable, makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { Divider, Image, Card, List, Modal, Button, Tooltip } from 'antd';
import { VideoCameraAddOutlined } from '@ant-design/icons';

import Camera, { FACING_MODES } from 'react-html5-camera-photo';

import { Picture } from '../models/pictures';

import Filter, { applyFilter } from './Filter';

export default observer(({ cursor, pictures }) => {
  const [taking, setTaking] = useState(false);
  const props = {};
  if (!cursor.isSet) {
    props.disabled = true
  }

  return <>
    <Modal
      title="Take new picture"
      visible={taking}
      centered={true}
      closeable={true}
      footer={null}
      onCancel={() => setTaking(false)}
      width='100%'
    >
      <Camera
        onTakePhotoAnimationDone={(data) => {
          setTaking(false);
          pictures.add(new Picture(data, [...cursor.coords]))
          cursor.erase();
        }}
        idealFacingMode = {FACING_MODES.ENVIRONMENT}
      />
    </Modal>

    <h3> Record </h3>
      <Button style={{marginBottom: '10px'}} type="primary"
        {...props}
        onClick={() => {setTaking(true)}}
        icon={<VideoCameraAddOutlined />}
      >
        Take new picture
      </Button>
    <h3> History </h3>
    <Filter />
    <List
        itemLayout="vertical"
        size="large"
        grid={{ gutter: 0, column: 2 }}
        dataSource={pictures.pictures.filter(applyFilter)}
        pagination={{
          pageSize: 6
        }}
        renderItem={item => (
          <List.Item
            key={item.content}
          >
            <Card title={new Date(item.date).toUTCString()}>
              <Image
                width={'100%'}
                src={item.content}
              />
            </Card>
          </List.Item>
        )}
      />
  </>;
});

