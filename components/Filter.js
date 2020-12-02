import React, { useRef, useState, Suspense, useEffect } from 'react'
import { makeObservable, action, computed, observable, makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { Tag, Table, Slider, Image, Card, List, Modal, Button, Tooltip } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Divider, Row, Col } from 'antd';

import Camera, { FACING_MODES } from 'react-html5-camera-photo';

import { PainPoint } from '../models/painPoints';

class Filter {
  daysAgo = 0
  constructor() {
    makeAutoObservable(this)
  }
}

const filter = new Filter()

export const applyFilter = ({ date }) => {
  const now = Date.now();
  const diff = now - date
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24)); 
  return diffDays == filter.daysAgo;
};

export default observer(({ cursor, painPoints }) => {
  return <>
      <Row>
        <Col span={19} offset={1}>
          <Slider included={true} value={filter.daysAgo} min={0} max={61} step={1} marks={{
            0: 'Today',
            7: '1 week',
            14: '2 weeks',
            30: 'Last month',
            60: '60 days'
          }}
          onChange={action(x => filter.daysAgo = x)}
          />
        </Col>
        <Col span={4}>
        </Col>
      </Row>
  </>
});

