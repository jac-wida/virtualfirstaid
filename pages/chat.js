import Head from 'next/head'

import { useState, useRef, useEffect } from 'react';

import BodyVisualizer from '../components/BodyVisualizer';
import PicturesTab from '../components/Pictures';
import PainPointsTab from '../components/PainPoints';
import VideoTab from '../components/Video';
import Basic from '../components/Basics'

import { Layout, Menu, Breadcrumb } from 'antd';

import { Row, Col } from 'antd';
import { Tabs, Divider } from 'antd';

import Cursor3D from '../models/cursor';
import Pictures from '../models/pictures';
import PainPoints from '../models/painPoints';

const { TabPane } = Tabs;

const { Sider, Header, Content, Footer } = Layout;

const style = {
  height: '100vh'
};


export default function Home({ room }) {
  const cursor = new Cursor3D(room);
  const pictures = new Pictures(room);
  const painPoints = new PainPoints(room);
  //const wida = new wida(room)

  const [width, setWidth] = useState(1000);
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.getBoundingClientRect().width)
    }
  }, []); //empty dependency array so it only runs once at render

  const [ mode, setMode ] = useState('images');
  const [ preMode, setPreMode ] = useState('images');

  if (preMode != mode && (mode == 'images' || mode == 'pain')) {
    setPreMode(mode);
  }

  const visualizer = <BodyVisualizer cursor={cursor} images={pictures} mode={preMode} painPoints={painPoints}/>;
  const video = <VideoTab room={room}/>;

  const mobile = width < 1000;

  const tabs = (
    <Tabs type="card"  style={{ height: '100%', display:'relative' }} activeKey={mode} onChange={(e) => {setMode(e)}}>
      {mobile ? (<>
        <TabPane tab="Video" key="video">
          { video }
        </TabPane>
        <TabPane id="hohohihi" tab="Avatar" key="visualizer">
          { visualizer }
        </TabPane>
      </>):null}
      
      <TabPane tab="Pictures" key="images">
        <PicturesTab cursor={cursor} pictures={pictures} />
      </TabPane>
      <TabPane tab="Pain" key="pain">
        <PainPointsTab cursor={cursor} painPoints={painPoints}/>
      </TabPane>
      <TabPane tab="Basic" key="basic">
        <Basic cursor={cursor}/>
      </TabPane>
      
    </Tabs>
  )

  const content = (mobile ?
    tabs
  : (
    <Row style={{ height: '100%' }}>
      <Col span={4}>
        { video }

      </Col>
      <Col span={8}>
        { visualizer }
      </Col>
      <Col span={12}>
        <div className="card-container">
          { tabs }
          </div>
        </Col>
    </Row>
  ));

  return (
  <Layout className="layout" style={style}>
    <Content style={{ padding: '30px', height: '100%'}}>
      <div ref={elementRef} className="site-layout-content" style={{ height: '100%'}}>
        { content }
      </div>
    </Content>
  </Layout>
  )

}
