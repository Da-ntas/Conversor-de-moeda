import React from "react";
import { Row } from "react-bootstrap";

const Footer = () => {
    return(
        <Row md={12} xl={12} lg={12} style={{position: "fixed", bottom: 0, zIndex: 3}}>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(232, 232, 232, 1)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='##'>
                    Projeto Faculdade
                </a>
            </div>
        </Row>
    )
}

export default Footer;