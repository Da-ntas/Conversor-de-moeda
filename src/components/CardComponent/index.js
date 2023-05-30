import React from "react";
import { Card, Container } from "react-bootstrap";

const CardComponent = ({md, xl, lg, title, children, className}) => {
    return(
        <Container className={className ?? ""}>
            <Card md={md ?? 6} xl={xl ?? 6} lg={lg ?? 6}>
                {
                title ?
                    <Card.Header>
                        {title}
                    </Card.Header>
                : <></>}
                <Card.Body>
                    {children}
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CardComponent;