import React from "react";
import { Result, Button } from "antd";
import { withRouter } from "react-router";

const Error = ({ history }) => {
    const volver=()=>{
        history.push("/");
    }
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button onClick={()=>volver()} type="primary">Volver</Button>}
        />
    );
};
export default withRouter(Error);