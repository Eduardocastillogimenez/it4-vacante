import React, {useState,useEffect} from 'react';

import { Modal, Button, Select, Row, Col, Switch,Typography,Popover } from 'antd';

const Popup = ({dataPopup}) => {
    const { Option } = Select;
    const { Text } = Typography;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [settings, setSettings] = useState([]);

    useEffect(() => {     
        if(dataPopup[0]) { setSettings(dataPopup[0].settings); }
    },[dataPopup]);
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const modalOk = () => {
        setIsModalVisible(false);
    };

    const  modalCancel = () => {
        setIsModalVisible(false);
    };

    function  modalChange(value) {
        console.log(`selected ${value}`);
        dataPopup.map(e => {
            if(value===e.name){
                setSettings(e.settings);
            }
        ;})
    };

    function clickSwitch(checked) {
        console.log(`switch to ${checked}`);
    };

return(
    <>
      <Button type="primary" onClick={showModal} style={{ background: "#001529" }}> Add Settings </Button> 
      <Modal title="Add Settings to the Profile" visible={isModalVisible} onOk={modalOk} 
        onCancel={modalCancel} okText="ADD" cancelText="CLOSE">
        <Row>
            <Col span={24} style={{ marginBottom: "20px" }}>
                <Row justify="space-around" align="middle">
                    <Col span={7}>
                        Group
                    </Col>
                    <Col span={17}>
                        <Select defaultValue={dataPopup[0]?dataPopup[0].name:""}  onChange={modalChange} style={{width:"100%"}}>
                            {dataPopup[0]?
                            dataPopup.map(e => {
                                return(
                                    <Option value={e.name} key={e.name}>{e.name}</Option>
                            );})
                            :<></>}
                        </Select>
                        {/* &nbsp blank space*/}
                        &nbsp; Search properties and senttings
                    </Col>
                </Row>        
            </Col>
            <Col span={24}  style={{ marginBottom: "20px" }}>
                <Row justify="space-around" align="middle">
                    <Col span={7}>
                        Sentting Name
                    </Col>
                    <Col span={17}>
                        <Select defaultValue="Document Type Search" style={{width:"100%"}}>
                            {settings[0]?
                                <>
                                {settings.map(e => {
                                    return(
                                        <Option value={e.displayName} key={e.settingName}>
                                            <Popover placement="left" content={ <div>
                                                <p><Text strong>settingName:</Text>&nbsp;{e.settingName}</p>
                                                <p><Text strong>description:</Text>&nbsp;{e.description}</p>
                                                <p><Text strong>value:</Text>&nbsp;{e.value}</p>
                                                <p><Text strong>dataType:</Text>&nbsp;{e.dataType}</p></div>}
                                            >
                                                {e.displayName}
                                            </Popover>
                                        </Option>
                                );})}
                                </>
                            :<></>}
                        </Select>
                        {/* &nbsp blank space*/}
                        &nbsp; Search for a document type using tags as criteria
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify="space-around" align="middle">
                    <Col span={7}>
                        Value
                    </Col>
                    <Col span={17}>
                        <Switch defaultChecked onChange={clickSwitch} />
                    </Col>
                </Row>
            </Col>
        </Row>  
      </Modal>
    </>   
);
}

export default Popup;