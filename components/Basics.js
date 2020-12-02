import React,{useState} from 'react'
import BasicAid from '../components/BasicAid'

import {Modal,Alert,Row,Col,Card,Button} from 'antd'

const onClose = (e) => {
  console.log(e, 'I was closed.');
};

class Basic extends React.Component{
  constructor(){
    super()

    this.state={
      visible: false,
      wule: false,
      wida: false
    }
  }
  
  
  // const props = {};
  // if (!cursor.isSet) {
  //   props.disabled = true
  // }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  showModale = () => {
    this.setState({
      wule: true,
    });
  };

  handleOke = e => {
    console.log(e);
    this.setState({
      wule: false,
    });
  };

  handleCancele = e => {
    console.log(e);
    this.setState({
      wule: false,
    });
  };
  showModals = () => {
    this.setState({
      wida: true,
    });
  };

  handleOks = e => {
    console.log(e);
    this.setState({
      wida: false,
    });
  };

  handleCancels = e => {
    console.log(e);
    this.setState({
      wida: false,
    });
  };
  
render(){

  return(
    <div>
  <Alert
      message="Basic First Aid"
      description="Navigate Through some of the basic first Aid for a quick solutions"
      type="info"
      closable
      onClose={onClose}
      showIcon
    />
  
  
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Burns" bordered={true}
            hoverable
            cover={
              <img
              src="https://www.verywellhealth.com/thmb/ChXd4e4OItqAzFhGqwoDEmoWZnk=/700x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/woman-washing-hands-in-washstand-882017214-5b57492cc9e77c003756d31c.jpg"
              />
            }
          >
             <Button type="primary" onClick={this.showModal}>
            Click To View
          </Button>
          <Modal
            title="Burns First Aid"
            centered={true}
            closeable={true}
            footer={null}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            
          >
            <p>The first step to treating a burn is to stop the burning process.
               Chemicals need to be cleaned off. Electricity needs to be turned off. 
               Heat needs to be cooled down with running water. 
               Sunburn victims need to be covered up or go inside.
            </p>
            <h1>First Aid for Burns</h1>
            <h3>Take these first aid steps:</h3>
            <p>Flush the burned area with cool running water for several minutes. Do not use ice.5﻿
            Apply a light gauze bandage.
            Do not apply ointments, butter, or oily remedies to the burn.
            Take ibuprofen or acetaminophen for pain relief if necessary.
            Do not break any blisters that may have formed 
            </p>
            
          </Modal>
                      
          </Card>
          
        </Col>
         <Col span={8}>
          <Card title="Blisters" bordered={true}
          hoverable
          cover={
            <img
            src="https://www.verywellhealth.com/thmb/7nzY_6nf4UQ_yduTbMfnNf6Y70I=/700x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cropped-hand-of-man-applying-adhesive-bandage-on-ankle-1187311628-5b58a1be0a874e0586204d6b85ea8c55.jpg"
            />
          }
          >
             <Button type="primary" onClick={this.showModale}>
          Click To View
        </Button>
        <Modal
          title="Blisters Basic First Aid"
          centered={true}
          closeable={true}
          footer={null}
          visible={this.state.wule}
          onCancel={this.handleCancele}
        >
          <p>Whether or not a blister needs any treatment is debatable.
             If the blister is small, unbroken and not very painful, 
             it is probably best to leave it alone. Cover it to prevent 
             continued rubbing and pressure on it that can cause it to swell more and 
             possibly burst on its own.
             </p>
             <h1>First Aid for Blisters</h1>
            <h3>Take these first aid steps:</h3>


          <p>If the blister is large or painful—especially if the activity isn’t finished 
            (such as you are in the middle of a hike)—follow steps to drain and dress 
            a blister Use a sterilized needle and make small punctures at the edge
             of the blister.Express the fluid.
            Then apply antibiotic ointment.
            Cover it to protect it from further rubbing and pressure.
            </p>
        
        </Modal>
            
          </Card>
        </Col> 
        <Col span={8}>
          <Card title="Fractures" bordered={true}
          hoverable
          cover={
            <img
            src="https://www.verywellhealth.com/thmb/Sfmvv5OPJtycustptfAMYQcAVIk=/700x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/woman-sitting-with-ice-pack-on-knee-146276242-577c320f3df78cb62c9009cf.jpg"
            />
          }
          >
            <Button type="primary" onClick={this.showModals}>
          Click To View
        </Button>
        <Modal
          title="Fractures Basic First Aid"
          centered={true}
          closeable={true}
          footer={null}
          visible={this.state.wida}

          onCancel={this.handleCancels}
        >
          <p>All extremity injuries need to be treated as broken bones (fractures) 
            until an X-ray can be obtained.There are all kinds of broken bone myths, 
            such as not being able to walk on a broken leg or whether there's a difference 
            between a fracture and a break.If you don't have Superman's X-ray eyes, 
            treat it like it's broken</p>
          <h1>First Aid for Fractures</h1>
            <h3>Take these first aid steps:</h3>
          <p>Don't try to straighten it.
            Stabilize the limb using a splint and padding to keep it immobile.
            Put a cold pack on the injury, avoiding placing ice directly on the skin.
            </p>
        
        </Modal>
            
          </Card>
        </Col> 
      </Row>
      <br/>
      
      <BasicAid />
      
    </div>
    </div>
)

        }


        }

        export default Basic
   

