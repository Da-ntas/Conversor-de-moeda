import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

const TitleBody = (props) => {
    return(
        <Container>
            <Row md={12} xl={12} lg={12} className="justify-content-between">
                <Col>
                    <h3>
                        {props.title}
                    </h3>
                </Col>
                <Col className="d-flex justify-content-end">
                    <ButtonGroup>
                        {props?.buttonValue?.map((op, index) => {
                            return(
                                <Button
                                    key={index}
                                    as={op?.as}
                                    type={op?.type}
                                    href={op?.href}
                                    variant={op?.variant}
                                    size={op?.size}
                                    className={op?.className}
                                    onClick={op?.onClickFunc}
                                >
                                    {op.value}
                                </Button>
                            )
                        })}
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default TitleBody;