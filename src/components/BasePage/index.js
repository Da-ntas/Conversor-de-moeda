import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";

const BasePage = ({children}) => {
    return (
        <Row className="w-100 d-flex flex-column" style={{minHeight: "100vh", backgroundColor: "rgb(232, 230, 230)"}}>
            <Header />
            <Container className="mt-5 mb-5" style={{zIndex: 2}}>
                {children}
            </Container>
            <Footer />
        </Row>
    )
}

export default BasePage;