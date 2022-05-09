import React from 'react';
import { Row,Col } from 'antd';

import Menu from "components/menu";
import Content from "./content";

const Home = () => {
    
return(
    <Row style={{background: "#001529"}}>
      <Col span={3}><Menu/></Col>
      <Col span={21}><Content/></Col>
    </Row>         
);
}

export default Home;