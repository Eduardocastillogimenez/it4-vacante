import React from 'react';
import {DivButtonCreateAsist} from "./styles";

import { Table,Input,Row,Col,Dropdown } from 'antd';
import {FileExcelOutlined,CaretDownOutlined} from '@ant-design/icons';

const Tablee = (props) => {
    const { Search } = Input;

    const clickButton = () => {
        props.theState.setAdd(true);
        props.theState.setDataEspecificada(
            {
                id: 1,
                name: "",
                description: "",
                assistType: "-1",
                documentTypeId: "0",
                serverity: -1,
                options: [],
                entityId: "0",
                order: -1,
                enabled:  false,
                parameterTemplates: [],
            }
        );
    };

return(
    <>
        <Row justify="center" style={{ marginBottom: "5px" }}>
            <Col flex="none">
                Manage The Actions 
            </Col>      
            <Col flex="auto" style={{ textAlign: "end" }}>
                <DivButtonCreateAsist>
                    <Dropdown.Button onClick={clickButton} overlay={<div/>} icon={<CaretDownOutlined />}>
                        Create Asist
                    </Dropdown.Button>
                </DivButtonCreateAsist>
            </Col>  
        </Row>
        <Row justify="center" style={{ background: "#f5f5f5",paddingBottom: "4px",paddingTop: "4px" }}>
            <Col flex="none">
                <FileExcelOutlined />Exel Export  
            </Col>      
            <Col flex="auto" style={{ textAlign: "end" }}>
                <Search placeholder="search " disabled style={{ width: 200 }}/>
            </Col>  
        </Row>
        <Table columns={props.columns} dataSource={props.data}size="middle" 
            onRow={(record) => {
            return {
              onClick: e => {props.theState.setDataEspecificada(record)}, // click row
            };}}
        />
    </>         
);
}

export default Tablee;