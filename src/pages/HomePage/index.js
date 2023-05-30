import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import CurrencyInput from "react-currency-input-field";

//icon
import converIcon from "../../arrowIcon.png";

//components
import BasePage from "../../components/BasePage";
import CardComponent from "../../components/CardComponent";
import TitleBody from "../../components/TitleBody";

//api
import { currency, currencyValues } from "../../api";

//utils
import { optionsFormat } from "../../utils/format";

const HomePage = () => {

    const [options, setOptions] = useState(currency);
    const [optionsSelect1, setOptionsSelect1] = useState();
    const [optionsSelect2, setOptionsSelect2] = useState();
    const [select1, setSelect1] = useState();
    const [valueCoin1, setValueCoin1] = useState(0);
    const [select2, setSelect2] = useState();
    const [valueCoin2, setValueCoin2] = useState(0);
    const [prefix1, setPrefix1] = useState('');
    const [prefix2, setPrefix2] = useState('');
    const [multiplyValue, setMultiplyValue] = useState(1);


    const handleOnChangeSelect1 = (e) => {
        setSelect1(e);
        let prevOptions2 = [...(optionsFormat(currency))];
        prevOptions2 = prevOptions2.filter((i) => i.value !== e.value)
        setOptionsSelect2(prevOptions2);
        setSelect2("");
        const simbol = currency.find(i => i.sigla === e.value).simbolo
        setPrefix1(simbol);
        setMultiplyValue(1);
        setValueCoin2(0);
        setPrefix2('');
    }

    const handleOnChangeSelect2 = (e) => {
        setSelect2(e);
        const simbol = currency.find(i => i.sigla === e.value).simbolo
        setPrefix2(simbol);

        setMultiplyValue(currencyValues[select1.value][`${e.value}`])
    }

    const handleChangeInput1 = (value) => {
        setValueCoin1(value);
    }

    const handleChangeInput2 = (value) => {
        setValueCoin2(value);
        setValueCoin1(1);
    }

    useEffect(() => {
        if(select2 && valueCoin1){
            let valueMult = valueCoin1
            
            if(valueCoin1?.includes(',')){
                valueMult = Number(valueCoin1.toString().replace(",", ".")) * multiplyValue;
            }

            setValueCoin2(valueMult * multiplyValue);
        }
    }, [multiplyValue, select2, valueCoin1])

    useEffect(() => {
        if(currency){
            setOptions(currency);
            setOptionsSelect1(optionsFormat(currency))
            setOptionsSelect2(optionsFormat(currency))
        }
    }, [])

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
                                onChange={handleOnChangeSelect1}
                                isDisabled={!options || options.length === 0}
                            />
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 mt-3">
                                <CurrencyInput 
                                    placeholder="Digite o primeiro valor"
                                    style={{fontSize: 28, width: "100%"}}
                                    defaultValue={0}
                                    decimalsLimit={5}
                                    allowNegativeValue={false}
                                    value={valueCoin1}
                                    onValueChange={handleChangeInput1}
                                    prefix={`${prefix1} `}
                                    disabled={!select1}
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
                                onChange={handleOnChangeSelect2}
                                isDisabled={!options || options.length === 0 || !select1}
                            />
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 mt-3">
                                <CurrencyInput 
                                    placeholder="Digite o primeiro valor"
                                    style={{fontSize: 28, width: "100%"}}
                                    defaultValue={0}
                                    decimalsLimit={5}
                                    allowNegativeValue={false}
                                    value={valueCoin2}
                                    onValueChange={handleChangeInput2}
                                    prefix={`${prefix2} `}
                                    disabled={!select2 || !select1}
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