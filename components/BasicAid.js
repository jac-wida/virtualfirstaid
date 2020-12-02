import React,{useState} from 'react'

import {Modal,Alert,Row,Col,Card,Button} from 'antd'

const onClose = (e) => {
  console.log(e, 'I was closed.');
};

class BasicAid extends React.Component{
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
    
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Bleeding" bordered={true}
            hoverable
            cover={
              <img
              src="https://www.verywellhealth.com/thmb/3K_Uh9dqRNTwozSzEtX2diLui8I=/700x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-525386797-5a6a1eccfa6bcc003690b97f.jpg"
              />
            }
          >
             <Button type="primary" onClick={this.showModal}>
            Click To View
          </Button>
          <Modal
            title="Bleeding First Aid"
            centered={true}
            closeable={true}
            footer={null}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            
          >
            <p>Regardless of how severe, almost all bleeding can be controlled.
               Mild bleeding will usually stop on its own. If severe bleeding is not
                controlled, it may lead to shock and eventually death
            </p>
            <h1>First Aid for Bleeding</h1>
            <h3>Take these first aid steps:</h3>
            <p>over the wound with a gauze or a cloth.
            Apply direct pressure to stop the blood flow.
            Don't remove the cloth. Add more layers if needed. 
            The cloth will help clots form to stop the flow.
            In most cases, applying a tourniquet may do more damage to the limb than good. 
            The 2010 American Heart Association guidelines also discount the value of elevation and using pressure points.
            </p>
            
          </Modal>
                      
          </Card>
          
        </Col>
         <Col span={8}>
          <Card title="Nose Bleed" bordered={true}
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
          title="Nose Bleed Basic First Aid"
          centered={true}
          closeable={true}
          footer={null}
          visible={this.state.wule}
          onCancel={this.handleCancele}
        >
          <p>Most of us have had a bloody nose at some time in our lives. It simply means bleeding from the inside 
            of the nose due to trauma. The biggest cause of a nosebleed is digital 
            trauma – otherwise known as picking it.</p>
          <h1>First Aid for Nose Bleeding</h1>
            <h3>Take these first aid steps:</h3>
          <p>Lean slightly forward, not back.
          Pinch the nose just below the bridge. Don't pinch the nostrils closed by pinching lower.
          Check after five minutes to see if bleeding has stopped. 
          If not, continue pinching and check after another 10 minutes.
          You can also apply a cold pack to the bridge of the nose while pinching.</p>
        
        </Modal>
            
          </Card>
        </Col> 
        <Col span={8}>
          <Card title="Cardiac Arrest" bordered={true}
          hoverable
          cover={
            <img
            src="https://www.verywellhealth.com/thmb/fAseJmMPHHdDbfgYytb1EGriIKY=/700x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-505252032-56d1ec685f9b5879cc81553d.jpg"
            />
          }
          >
            <Button type="primary" onClick={this.showModals}>
          Click To View
        </Button>
        <Modal
          title="Cardiac Arrest Basic First Aid"
          centered={true}
          closeable={true}
          footer={null}
          visible={this.state.wida}

          onCancel={this.handleCancels}
        >
          <p>Cardiopulmonary resuscitation (CPR) is the most important medical procedure of all.
             If a person is in cardiac arrest (the heart is no longer pumping blood) and CPR is
              not performed, that person will die. On the other hand, performing
               CPR or using an automated external defibrillator (AED) could save a life.</p>
          <h1>First Aid for Cardiac Arrest</h1>
            <h3>Take these first aid steps:</h3>
          <p>Command someone to call 911 or the medical alert system for the locale.
          Immediately start chest compressions regardless of your training. 
          Compress hard and fast in the center of the chest, allowing recoil between compressions. 
          Hand this task over to those who are trained if and when they arrive.
          If you are trained, use chest compressions and rescue breathing.
          An AED should be applied and used. But it is essential not to delay chest compressions, 
          so finding one should be commanded to someone else while you are doing chest compressions.
            </p>
        
        </Modal>
            
          </Card>
        </Col> 
      </Row>
    
    
)

        }


        }

        export default BasicAid
   



