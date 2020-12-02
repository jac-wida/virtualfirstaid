import React, { useRef, useState, Suspense, useEffect } from 'react'
import { makeObservable, action, computed, observable, makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { Tag, Table, Slider, Image, Card, List, Modal, Button, Tooltip } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Divider, Row, Col } from 'antd';

import Camera, { FACING_MODES } from 'react-html5-camera-photo';

import Filter, { applyFilter } from './Filter';

import { PainPoint } from '../models/painPoints';

export default observer(({ cursor, painPoints }) => {
  const [ newIntensity, setIntensity ] = useState('5');
  const props = {};
  if (!cursor.isSet) {
    props.disabled = true
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (x) => new Date(x).toUTCString()
    },
    {
      title: 'Intensity',
      dataIndex: 'intensity',
      key: 'intensity',
      render: (_, record) => <Tag color={record.colorMap}>{record.description}</Tag>
    },
  ];

  return <>
      <h3>Record</h3>
      <div style={{textAlign: 'center'}} >
      <Row>
        <Col span={19} offset={1}>
          <Slider included={true} value={newIntensity} min={0} max={10} step={1} marks={{
            0: 'No pain',
            5: 'Moderate',
            10: 'Worst'
          }}
            onChange={setIntensity}
          {...props} />
        </Col>
        <Col span={4}>
        </Col>
      </Row>
      <Row>
        <Col span={19} offset={1}>
          <Slider included={true} value={cursor.radius} min={1} max={10} step={0.5} marks={{
            1: 'Local',
            10: 'Wide'
          }}
            onChange={(v) => { cursor.setRadius(v) }}
          {...props} />
        </Col>
        <Col span={4}>
        </Col>
      </Row>
      </div>
      <Button style={{marginBottom: '10px'}} type="primary"
        {...props}
        onClick={() => {
          try {
            painPoints.add(new PainPoint(newIntensity, Object.values(cursor.coords), cursor.radius));
            cursor.erase();
          }
          catch {
          }
        }}
        icon={<PlusCircleOutlined />}
      >
            Record Pain
      </Button>
      <Divider dashed />
      <h3>History</h3>
      <Filter />
      <Table dataSource={painPoints.painPoints.filter(applyFilter)} columns={columns} />
  </>;
});

