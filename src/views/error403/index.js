import React from "react";
import { Result, Button } from 'antd';
import { withRouter } from "react-router";

const Error = ({ history }) => {
    const volver=()=>{
        history.push("/");
    }
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" onClick={()=>volver}>Back Home</Button>}
        />
    );
};
export default withRouter(Error);