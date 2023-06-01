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

    const [optionsMoeda1, setOptionsMoeda1] = useState(optionsFormat(currency));
    const [moeda1, setMoeda1] = useState();
    const [prefixoMoeda1, setPrefixoMoeda1] = useState("");
    const [valorInputMoeda1, setValorInputMoeda1] = useState(1);
    const [optionsMoeda2, setOptionsMoeda2] = useState(optionsFormat(currency));
    const [moeda2, setMoeda2] = useState();
    const [prefixoMoeda2, setPrefixoMoeda2] = useState("");
    const [valorInputMoeda2, setValorInputMoeda2] = useState(1);

    const [multiplyValueSelect1, setMultiplyValueSelect1] = useState(0);
    const [multiplyValueSelect2, setMultiplyValueSelect2] = useState(0);

    const removeDuplicata = (moeda, type) => {
        const currencyFormated = optionsFormat(currency);

        const newValueMoeda = currencyFormated.filter((e) => e.value !== moeda.value);
        if(type === "SELECT1")
            setOptionsMoeda2(newValueMoeda);

        else if(type === "SELECT2")
            setOptionsMoeda1(newValueMoeda)
    
    }

    const handleOnChangeSelect1 = (e) => {
        setMoeda1(e);

        // remove a mesma opção do outro select para não causar problema
        removeDuplicata(e, "SELECT1");

        if(e.value === moeda2?.value)
            setMoeda2();

        const {simbolo: prefixMoeda} = currency.find((i) => i.sigla === e.value)
        setPrefixoMoeda1(prefixMoeda);  
    }

    const handleOnChangeSelect2 = (e) => {
        setMoeda2(e);

        // remove a mesma opção do outro select para não causar problema
        removeDuplicata(e, "SELECT2");

        if(e.value === moeda2?.value)
            setMoeda2();

        const {simbolo: prefixMoeda} = currency.find((i) => i.sigla === e.value)
        setPrefixoMoeda2(prefixMoeda);
    }

    const handleChangeInput1 = (e) => {
        if(!e) {
            setValorInputMoeda1(0);
            return;
        }

        setValorInputMoeda1(e);
        setValorInputMoeda2(1);
        
        if(multiplyValueSelect1){
            let valueMult = e;

            if(valueMult.includes(','))
                valueMult = valueMult.replace(",", ".");
    
            setValorInputMoeda2((valueMult * multiplyValueSelect1).toFixed(2))
        }
    }

    const handleChangeInput2 = (e) => {
        if(!e) {
            setValorInputMoeda2(0);
            return;
        }

        setValorInputMoeda2(e);
        setValorInputMoeda1(1);
        
        if(multiplyValueSelect2){
            let valueMult = e;

            if(valueMult.includes(','))
                valueMult = valueMult.replace(",", ".");
    
            setValorInputMoeda1((valueMult * multiplyValueSelect2).toFixed(2))
        }
    }

    useEffect(() => {
        if(moeda1 && moeda2){
            let multiplyByValueSelect1 = currencyValues[moeda1.value][moeda2.value]
            setMultiplyValueSelect1(multiplyByValueSelect1)

            let multiplyByValueSelect2 = currencyValues[moeda2.value][moeda1.value]
            setMultiplyValueSelect2(multiplyByValueSelect2)
        }
    }, [moeda1, moeda2])


    return(
        <BasePage>
            <TitleBody
                title="Conversor de moedas"
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
                                value={moeda1}
                                options={optionsMoeda1}
                                onChange={handleOnChangeSelect1}
                                isDisabled={!currency || currency.length === 0}
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
                                    value={valorInputMoeda1}
                                    onValueChange={handleChangeInput1}
                                    prefix={`${prefixoMoeda1} `}
                                    disabled={!currency || currency.length === 0 || !moeda1 || !moeda2}
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
                                value={moeda2}
                                options={optionsMoeda2}
                                onChange={handleOnChangeSelect2}
                                disabled={!currency || currency.length === 0}
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
                                    value={valorInputMoeda2}
                                    onValueChange={handleChangeInput2}
                                    prefix={`${prefixoMoeda2} `}
                                    disabled={!currency || currency.length === 0 || !moeda1 || !moeda2}
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