import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const ActionsBtn=({deletedata,viewdata})=>{
    return(
        <Row className="justify-content-center my-2 ">
            <Col sm="8" className="d-flex justify-content-between">
                <Button onClick={deletedata} className="bt-style p-2">مسح البيانات</Button>
                <Button onClick={viewdata} className="bt-style p-2">استيراد المواعيد</Button>
            </Col>
        </Row>
    )
}
export default ActionsBtn;