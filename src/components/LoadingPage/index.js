import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Header";

const LoadingPage = () => {

    return(
        <Row className="w-100 d-flex flex-column">
            <Header />
            <Container className="mt-5 mb-5 text-center">
                <h4>
                    Loading...
                </h4>
            </Container>
        </Row>
    )
}

export default LoadingPage;