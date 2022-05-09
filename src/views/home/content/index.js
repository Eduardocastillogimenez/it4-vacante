import React,{useEffect} from 'react';
import { Container,FondoIcon,TextTop,IconosEnabled } from './styles';

import { makeAutoObservable,configure } from "mobx";
import { observer } from "mobx-react";

import { Row,Col,Tabs,Select,message } from 'antd';
import {BorderOuterOutlined,ApartmentOutlined,BellOutlined,CheckCircleOutlined,CloseCircleOutlined} from '@ant-design/icons';

import Table from "./table";
import ViewDataTable from "./viewDataTable";

import { helpHttp } from 'helpers/helpHttp';

class State {
    dataEspecificada = {};
    data = [];
    dataPopup = {};
    add = false;

    constructor() {
        makeAutoObservable(this)
        configure({
            useProxies: "never"
        })
    }

    setDataEspecificada(e) {
        this.dataEspecificada = e;
    };

    setData(e) {
        this.data = e
    };

    addData(e) {
        this.data.push(e);
    };
    setAdd(e) {
        this.add = e
    };
    

    setDataPopup(e) {
        this.dataPopup = e
    };
};

const theState = new State();

const Content = observer(() => {
    const { TabPane } = Tabs;
    const { Option } = Select;

    const api = helpHttp();
    const url = "http://localhost:5000/data";

    useEffect(() => {     
        fetch("http://localhost:5000/data")
            .then(res => res.json())
            .then(jsonData => {
                //I add the key variable to the objects to avoid errors in the table
                jsonData.map(e => {
                    e.key=e.id;
                })
                //I save the date
                theState.setData(jsonData);
            });        
        fetch("http://localhost:5000/popup")
        .then(res => res.json())
        .then(jsonPopup => {
            //I save the date
            theState.setDataPopup(jsonPopup);
        });    
    },[]);

    const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        
        filters: 
        theState.data.map(e => {
            return({ text: e.id,value: e.id, });
        }),// I go through the data so I see all the possible filters

        onFilter: (value, record) => record.id === value,
        filterSearch: true,
        sortDirections: ['descend'],
    },
    {
        title: 'Name',
        dataIndex: 'name',
        filters: 
        theState.data.map(e => {
            return({ text: e.name,value: e.name, });
        }),// I go through the data so I see all the possible filters

        onFilter: (value, record) => record.name.startsWith(value),
        filterSearch: true,
        sortDirections: ['descend'],
    },
    {
        title: 'AssistType',
        dataIndex: 'assistType',
    },
    {
        title: 'Enabled',
        dataIndex: 'enabled',
        //depending on whether the value is false or true, a different icon is returned
        render: value => (        
            <IconosEnabled>
                {value ?<CheckCircleOutlined />:<CloseCircleOutlined style={{ color: 'red' }}/>}
            </IconosEnabled>             
            ),
    },
    ];

    const updateData = (object) =>{
        let endpoint = `${url}/${object.id}`;

        let options = {
            body:object,
            headers:{"content-type":"application/json"}
        };

        api.put(endpoint,options).then((res)=> {
            if(!res.err){   
                theState.setData( theState.data.map(e => {
                        return(
                            object.id===e.id ? object : e
                        )})
                );   
                message.success('Changes saved');
            }else{
                message.error('something went wrong');
            }
        });
    };
    const addData = (object) =>{
        
        function repeatedFunId(){
            let num = 0;
            let numMax = 1;

            theState.data.map(e => {
                if(numMax<e.id){
                    num = e.id;
                    numMax = e.id;
                };
            });

            object.id=num+1;
            return(true);
        }
        
        if(repeatedFunId()){
            let options = {
                body:object,
                headers:{"content-type":"application/json"}
            };
    
            api.post(url,options).then((res)=> {
                if(!res.err){   
                    let ob=theState.data;
                    ob.push(object);
                    theState.setData( ob );  
                    message.success('Changes Add');
                }else{
                    console.log(res);
                    message.error('something went wrong');
                }
            });
        }
    };
    const deleteData = (id) =>{
        let endpoint = `${url}/${id}`;

        let options = {
            headers:{"content-type":"application/json"}
        };

        api.del(endpoint,options).then((res)=> {
            if(!res.err){
                message.success('Assist removed');
            }else{
                message.error('something went wrong');
            }
        });
    }
return(
    <Container>
        <Row justify="center">
            <Col span={24}>
                <Row justify="space-around" align="middle" style={{marginTop:"5px"}}>
                    <Col span={12} style={{paddingLeft:"50px"}}>
                        <TextTop>
                            <p> Brisbane </p>
                            <h3> Automation</h3>
                        </TextTop>
                    </Col>
                    <Col span={12} style={{textAlign:"end",paddingRight:"50px",display:"inline"}}>
                        <FondoIcon>
                            <ApartmentOutlined/>
                        </FondoIcon>
                        <FondoIcon>
                            <BellOutlined/>
                        </FondoIcon>
                        <FondoIcon>
                            <BorderOuterOutlined/>
                        </FondoIcon>
                    </Col>
                </Row> 
            </Col>
            <Col span={24}>
                <Row justify="center">
                    <Col span={22}>
                        <Tabs defaultActiveKey="1" style={{background:"white",padding:"15px"}}>
                            <TabPane tab="Assist" key="1">

                                <div style={{textAlign:"end"}}>
                                    <Select disabled placeholder="Select a"><Option value="tom">Tom</Option></Select>
                                </div>

                                <Row justify="space-around" align="middle">
                                    <Col span={12}>
                                        <Table data={theState.data} columns={columns} theState={theState} />
                                    </Col>
                                    <Col span={12}>
                                        <ViewDataTable dataEspecificada={theState.dataEspecificada} deleteData={deleteData}
                                         updateData={updateData} addData={addData} dataPopup={theState.dataPopup} add={theState.add}/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="Triggers" disabled  key="2"></TabPane>
                            <TabPane tab="Actions" disabled  key="3"></TabPane>
                            <TabPane tab="Tranfers" disabled  key="4"></TabPane>
                            <TabPane tab="Imports" disabled  key="5"></TabPane>
                            <TabPane tab="Analysis" disabled  key="6"></TabPane>
                        </Tabs> 
                    </Col>
                </Row> 
            </Col>
        </Row>  
    </Container>
);
})

export default Content;