import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { medidas, medidasValues } from "../../api";
//icon
import converIcon from "../../arrowIcon.png";
import BasePage from "../../components/BasePage";
import CardComponent from "../../components/CardComponent";
import TitleBody from "../../components/TitleBody";
import { optionsFormat } from "../../utils/format";

const ConversorMedida = () => {
    const [optionsMedida1, setOptionsMedida1] = useState(optionsFormat(medidas));
    const [medida1, setMedida1] = useState();
    const [valueMedida1, setValueMedida1] = useState("");
    const [prefixoMedida1, setPrefixoMedida1] = useState("");
    const [optionsMedida2, setOptionsMedida2] = useState(optionsFormat(medidas));
    const [valueMedida2, setValueMedida2] = useState("");
    const [medida2, setMedida2] = useState();
    const [prefixoMedida2, setPrefixoMedida2] = useState("");

    const [multiplyValueSelect1, setMultiplyValueSelect1] = useState(0);
    const [multiplyValueSelect2, setMultiplyValueSelect2] = useState(0);

    const removeDuplicata = (moeda, type) => {
        const currencyFormated = optionsFormat(medidas);

        const newValueMoeda = currencyFormated.filter((e) => e.value !== moeda.value);
        if(type === "SELECT1")
            setOptionsMedida2(newValueMoeda);

        else if(type === "SELECT2")
            setOptionsMedida1(newValueMoeda)
    
    }

    const handleOnChangeSelect1 = (e) => {
        setMedida1(e);

        // remove a mesma opção do outro select para não causar problema
        removeDuplicata(e, "SELECT1");

        if(e.value === medida2?.value)
        setMedida2();

        const {simbolo: prefixMedida} = medidas.find((i) => i.sigla === e.value)
        setPrefixoMedida1(prefixMedida);  

        setValueMedida1("");  
        setValueMedida2("");
    }

    const handleOnChangeSelect2 = (e) => {
        setMedida2(e);

        // remove a mesma opção do outro select para não causar problema
        removeDuplicata(e, "SELECT2");

        if(e.value === medida1?.value)
            setMedida1();

        const {simbolo: prefixMedida} = medidas.find((i) => i.sigla === e.value)
        setPrefixoMedida2(prefixMedida); 

        setValueMedida1("");  
        setValueMedida2("");
    }

    const changeValueMedida1 = (e) => {
        let value = e.target.value?.replace(/\D/g, "");
        if(!value) {
            setValueMedida1("");
            return;
        }

        setValueMedida1(value);
        setValueMedida2(1);
        
        if(multiplyValueSelect1){

            if(value.includes(','))
                value = value.replace(",", ".");
    
            setValueMedida2(value * multiplyValueSelect1)
        }
    }    

    const changeValueMedida2 = (e) => {
        let value = e.target.value?.replace(/\D/g, "");
        if(!value) {
            setValueMedida2("");
            return;
        }

        setValueMedida2(value);
        setValueMedida1(1);
        
        if(multiplyValueSelect2){

            if(value.includes(','))
            value = value.replace(",", ".");
    
            setValueMedida2(value * multiplyValueSelect1)
        }
    }

    useEffect(() => {
        if(medida1 && medida2){
            let multiplyByValueSelect1 = medidasValues[medida1.value][medida2.value]
            setMultiplyValueSelect1(multiplyByValueSelect1)

            let multiplyByValueSelect2 = medidasValues[medida2.value][medida1.value]
            setMultiplyValueSelect2(multiplyByValueSelect2)
        }
    }, [medida1, medida2])

    return (
        <>
            <BasePage>
            <TitleBody
                title="Conversor de medidas"
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
                                value={medida1}
                                options={optionsMedida1}
                                onChange={handleOnChangeSelect1}
                            />
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Control
                                    type={"text"}
                                    value={`${prefixoMedida1}  ${valueMedida1}`}
                                    onChange={changeValueMedida1}
                                    style={{fontSize: 28, width: "100%"}}
                                    disabled={!medida1 || !medida2}
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
                                value={medida2}
                                options={optionsMedida2}
                                onChange={handleOnChangeSelect2}
                            />
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Control
                                    type={"text"}
                                    value={`${prefixoMedida2}  ${valueMedida2}`}
                                    onChange={changeValueMedida2}
                                    style={{fontSize: 28, width: "100%"}}
                                    disabled={!medida1 || !medida2}
                                />
                            </Form.Group>
                        </Row>
                    </Col>
                    
                </Row>
            </CardComponent>
        </BasePage>
        </>
    )
}

export default ConversorMedida;