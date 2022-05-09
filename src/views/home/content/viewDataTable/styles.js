import styled from 'styled-components';

export const Container = styled.div`
    .labelAssistType div div ul div label{
        margin:20px;
        margin-bottom: 0px;
    }
    .labelAssistType .ant-form-item{
        margin-bottom: 0px;
    }
    .labelAssistType div div ul div div{
        justify-content: center;
    }
    .labelAssistType .ant-form-item-label{
        text-align: left;
        border: solid rgba(170, 172, 170, 0.322) 0.2px;
    }
     .ant-tabs-nav{
        margin: 0;
    }
    .ant-form-horizontal .ant-form-item-control{
        padding:20px;
        border: solid rgba(170, 172, 170, 0.322) 0.2px;
        justify-content: center;
    }
    .nolabelAssist .ant-form-item-control{
        border: none;
        padding:0px;
        justify-content: center;
    }
    .nolabelAssist div{
        justify-content: center;
    }
    .nolabelAssist .ant-form-item-label{
        text-align: left;
        padding-left: 21px;
    }
    .ant-form-item-label > label::after{
        content: none;
        max-width: 50px;
    }
`;

export const DivLabelAssist = styled.div`
    p{
        padding:0;
        margin:0;
    }
`;

export const PLabelAssist = styled.p`
    font-size: 10px;
`;

export const TituloAsisten = styled.div`
    background: rgba(170, 172, 170, 0.322);
    margin-bottom: -2px;
    padding: 3px;
    padding-left: 21px;
`;

export const PropertiesDiv = styled.div`
    text-align: end;
    margin-bottom: 3px;
`;