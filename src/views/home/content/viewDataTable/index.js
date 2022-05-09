import React,{useEffect,useRef} from 'react';
import {TituloAsisten,Container,DivLabelAssist,PLabelAssist } from "./styles";

import Popup from "../popup";

import { observer } from "mobx-react"

import { Form, Input, Button, Select, InputNumber,List,Divider,Tabs,Popconfirm } from 'antd';
import {SaveOutlined,DeleteOutlined,PlusSquareOutlined} from '@ant-design/icons';

const ViewDataTable = observer((props) => {
    const { Option } = Select;  
    const { TabPane } = Tabs;
    const layout = { labelCol: { span: 12 },wrapperCol: { span: 12 }, };
    const tailLayout = { wrapperCol: { span: 24}, };
    const [form] = Form.useForm();
    const refSwitch = useRef(null);
    

    useEffect(() => {    
      console.log(props.dataEspecificada.id);
      if(props.dataEspecificada.id){//I fill the from with the values ​​of the table
        form.setFieldsValue({
          name: props.dataEspecificada.name,
          description: props.dataEspecificada.description,
          assistType: props.dataEspecificada.assistType,
          documentTypeId: props.dataEspecificada.documentTypeId,
          serverity: props.dataEspecificada.serverity,
          entityId: props.dataEspecificada.entityId,
          order: props.dataEspecificada.order,
          enabled: props.dataEspecificada.enabled,
        });
        refSwitch.current.checked = props.dataEspecificada.enabled;//I fill in the checked
      }
  },[props.dataEspecificada.id]);

  const onFinish = (values) => {
    if(props.add){
      props.addData(
        {
          id: props.dataEspecificada.id,
          name: values.name,
          description: values.description,
          assistType: values.assistType,
          documentTypeId: values.documentTypeId,
          serverity: values.serverity,
          options: [],
          entityId: values.entityId,
          order: values.order,
          enabled:  refSwitch.current.checked,
          parameterTemplates: props.dataEspecificada.parameterTemplates
        }
      )
    }else{
      props.updateData(
        {
          id: props.dataEspecificada.id,
          name: values.name,
          description: values.description,
          assistType: values.assistType,
          documentTypeId: values.documentTypeId,
          serverity: values.serverity,
          options: [],
          entityId: values.entityId,
          order: values.order,
          enabled:  refSwitch.current.checked,
          parameterTemplates: props.dataEspecificada.parameterTemplates
        }
      )
    }
  };

  const deleteData = () => {
    props.deleteData(props.dataEspecificada.id);
    form.resetFields();
  };

return(
  props.dataEspecificada.id?
    <Container>
    <Tabs defaultActiveKey="1" type="card" style={{background: "rgba(170, 172, 170, 0.322)"}}>
      <TabPane tab="Properties" key="1" style={{background: "white"}} >
        <Form {...layout} form={form} name="fromDetallesTabla" onFinish={onFinish} style={{border: "solid rgba(170, 172, 170, 0.322) 0.5px",padding:"12px",background: "white"}}>
          <Form.Item  {...tailLayout} className="nolabelAssist" style={{marginBottom:"3px",display: "inline",textAlign: "end"}}> 
            <Button ghost disabled>
              {props.dataEspecificada.id} 
            </Button>
            <Button type="primary" disabled style={{marginLeft: "5px"}}>
              <PlusSquareOutlined />
            </Button>
            <Button type="primary" htmlType="submit" style={{margin: "5px"}}>
              <SaveOutlined />
            </Button>
            <Popconfirm title="Are you sure to delete this Assist?" onConfirm={deleteData}
              okText="Yes" cancelText="No"
            >
              <Button type="primary">
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Form.Item>
          <Form.Item name="name" label="Name" style={{marginTop:"5px"}} className="nolabelAssist">
            <Input />
          </Form.Item>
          <Divider />
          <Form.Item name="description" label="Description" className="nolabelAssist">
            <Input.TextArea />
          </Form.Item>
          <TituloAsisten>
            Asisten details
          </TituloAsisten>
          <List size="large"className="labelAssistType" bordered dataSource={['R',]}
            renderItem={() => <>
            <Form.Item name="assistType" label={<DivLabelAssist><p>Assist Type</p><PLabelAssist>Determine the Assit that will be run</PLabelAssist>
                </DivLabelAssist>} >
              <Select placeholder="Undefined" allowClear >
                <Option value="-1">-1</Option>
                <Option value="0">0</Option>
                <Option value="3">3</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
                <Option value="7">7</Option>
                <Option value="8">8</Option>
                <Option value="9">9</Option>
              </Select>
            </Form.Item>
            <Form.Item name="documentTypeId" label={<DivLabelAssist><p>Document TypeId</p><PLabelAssist>Select the document type this will be associated to</PLabelAssist>
                </DivLabelAssist>}  >
              <Select placeholder="Undefined" allowClear>
                <Option value="0">0</Option>
                <Option value="30">30</Option>
                <Option value="50">50</Option>
                <Option value="600">600</Option>
                <Option value="800">800</Option>
                <Option value="1000">1000</Option>
                <Option value="1019">1019</Option>
                <Option value="1054">1054</Option>
              </Select>
            </Form.Item>
            <Form.Item name="serverity" label={<DivLabelAssist><p>Serverity</p><PLabelAssist>Set the warnign level for the assit</PLabelAssist>
                </DivLabelAssist>}   >
              <Select placeholder="Undefined" allowClear >
                <Option value="-1">-1</Option>
                <Option value="0">0</Option>
                <Option value="3">3</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
                <Option value="7">7</Option>
                <Option value="8">8</Option>
                <Option value="9">9</Option>
              </Select>
            </Form.Item>
            <Form.Item name="entityId" label={<DivLabelAssist><p>EntityId</p><PLabelAssist>Select the entity this assits is likend to</PLabelAssist>
                </DivLabelAssist>}   >
              <Select placeholder="Undefined" allowClear >
                <Option value="-1">-1</Option>
                <Option value="0">0</Option>
                <Option value="3">3</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
                <Option value="7">7</Option>
                <Option value="8">8</Option>
                <Option value="9">9</Option>
              </Select>
            </Form.Item>
            <Form.Item name="order" label="Order">
              <InputNumber style={{width:"100%"}}/>
            </Form.Item>
            <Form.Item valuePropName="Checked"label={<DivLabelAssist><p>Enabled</p><PLabelAssist>If this assist will be ran for the document type</PLabelAssist>
                </DivLabelAssist>}  >
              <input type="checkbox" ref={refSwitch} style={{marginRight:"20%"}}/> <Popup dataPopup={props.dataPopup} />
            </Form.Item>
            </>}
          />
        </Form>   
      </TabPane>
    </Tabs>
    </Container> 
    :<div></div>
);
})

export default ViewDataTable;