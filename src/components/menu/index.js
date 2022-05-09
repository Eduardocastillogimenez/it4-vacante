import React from 'react';
import { TituloOLogo,BotonMenu,Titulo } from './styles';

import { Menu,Row } from 'antd';
import { BorderOuterOutlined, LeftCircleFilled,RightCircleFilled,PieChartOutlined,DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

import titulo from "components/img/DOCMX.png";


const Menuu = () => {

function getItem(label, key, icon, children, type) {
    return {
        key: key,
        icon: icon,
        children: children,
        label: label,
        type: type,
    };
}

const items = [
    getItem('Structures', '1', <PieChartOutlined />),
    getItem('User Management', '2', <DesktopOutlined />),
    getItem('Taxonomy', '3', <ContainerOutlined />),
    getItem('Data List', '4', <ContainerOutlined />),
    getItem('Automation', '5', <ContainerOutlined />),
    getItem('Form management', '6', <ContainerOutlined />),
    getItem('workflow', '7', <ContainerOutlined />),
    getItem('Smart Capture', '8', <ContainerOutlined />),
    getItem('Control Centers', '9', <ContainerOutlined />),
    getItem('Reports', '10', <ContainerOutlined />),
    getItem('Reports Mapping', '11', <ContainerOutlined />),
    getItem('Monitoring', '12', <ContainerOutlined />),
    getItem('User Mode', '13', <ContainerOutlined />),
    getItem('Senttings', '14', <ContainerOutlined />),
    getItem('Log off', '15', <ContainerOutlined />),
  ];

  const [collapsed, setCollapsed] = React.useState(false);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  

  return (
    <div>
        <TituloOLogo>
          <Row justify="center" align="middle">
            <BorderOuterOutlined /><Titulo src={titulo}/>
          </Row>
        </TituloOLogo>
      <BotonMenu onClick={toggleCollapsed}>
        {collapsed ? <RightCircleFilled /> : <LeftCircleFilled />}
      </BotonMenu>
      <Menu defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']} mode="inline" theme="dark"
        inlineCollapsed={collapsed} items={items} style={{ marginBottom: 16,minWidth: "120px"  }}
      />
    </div>
  );
};

export default Menuu;