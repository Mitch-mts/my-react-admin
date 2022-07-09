import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";

export default function Users(){
    return(
        <>
            <PanelHeader size="sm" />
                <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <h5 className="title">User Accounts</h5>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                        {thead.map((prop, key) => {
                                            if (key === thead.length - 1)
                                            return (
                                                <th key={key} className="text-right">
                                                {prop}
                                                </th>
                                            );
                                            return <th key={key}>{prop}</th>;
                                        })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tbody.map((prop, key) => {
                                        return (
                                            <tr key={key}>
                                            {prop.data.map((prop, key) => {
                                                if (key === thead.length - 1)
                                                return (
                                                    <td key={key} className="text-right">
                                                    {prop}
                                                    </td>
                                                );
                                                return <td key={key}>{prop}</td>;
                                            })}
                                            </tr>
                                        );
                                        })}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                </div>
            
        </>
    )
}