import React, { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import BasePage from "../../components/BasePage";
import CardComponent from "../../components/CardComponent";
import TitleBody from "../../components/TitleBody";
import Select from "react-select";

import converIcon from "../../convert-icon.png";
import { apiGet } from "../../api";
import { formatarMoeda } from "../../utils/currencyFormat";

const HomePage = () => {
    const options = [
        { value: 'BR', label: 'Brazilian Real' },
        { value: 'EU', label: 'Euro' },
        { value: 'DOL', label: 'US Dollar' }
    ]

    const [optionsSelect1, setOptionsSelect1] = useState(options);
    const [optionsSelect2, setOptionsSelect2] = useState(options);
    const [select1, setSelect1] = useState();
    const [valueCoin1, setValueCoin1] = useState(0);
    const [select2, setSelect2] = useState();
    const [valueCoin2, setValueCoin2] = useState(0);


    const handleOnChange1 = (e) => {
        setSelect1(e);
        let prevOptions2 = [...options];
        prevOptions2 = prevOptions2.filter((i) => i.value !== e.value)
        setOptionsSelect2(prevOptions2);
        setSelect2("");
    }

    const handleOnChange2 = (e) => {
        setSelect2(e);
    }

    return(
        <BasePage>
            <TitleBody
                title="Conversor de moedas"
                buttonValue={[
                    {
                        type: "button",
                        variant: "primary",
                        size: "md",
                        value: "Voltar"
                    },
                ]}
            />
            <CardComponent
                md={12}
                xl={12}
                lg={12}
                className={"mt-5"}
            >
                <Row className="d-flex justify-content-center p-3">
                    <Col md={5} xl={5} lg={5}>
                        <Row>
                            <Select 
                                value={select1}
                                options={optionsSelect1}
                                onChange={handleOnChange1}
                            />
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Control 
                                    type="number" 
                                    placeholder="Digite o primeiro valor"
                                    style={{fontSize: 28}}
                                    min="0" 
                                    step="0.01" 
                                    data-number-to-fixed="2" 
                                    data-number-stepfactor="100"
                                    value={valueCoin1}
                                    onChange={(value) => setValueCoin1(value)}
                                />
                            </Form.Group>
                        </Row>
                    </Col>
                    <Col md={1} xl={1} lg={1} className="d-flex align-items-center justify-content-center">
                        <img src={converIcon} alt="Converter" width={32}/>
                    </Col>
                    <Col md={6} xl={6} lg={6}>
                        <Row>
                            <Select 
                                value={select2}
                                options={optionsSelect2}
                                onChange={handleOnChange2}
                            />
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Control 
                                    type="number" 
                                    placeholder="Digite o segundo valor" 
                                    style={{fontSize: 28}}
                                    min="0" 
                                    step="0.01" 
                                    data-number-to-fixed="2" 
                                    data-number-stepfactor="100"
                                    value={valueCoin2}
                                    onChange={(value) => setValueCoin2(value)}
                                />
                            </Form.Group>
                        </Row>
                    </Col>
                    
                </Row>
            </CardComponent>
        </BasePage>
    )
}

export default HomePage;