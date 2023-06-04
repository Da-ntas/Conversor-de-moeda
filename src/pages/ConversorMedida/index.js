import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { medidas, medidasValues } from "../../api";
//icon
import converIcon from "../../arrowIcon.png";
import BasePage from "../../components/BasePage";
import CardComponent from "../../components/CardComponent";
import TitleBody from "../../components/TitleBody";
import { getDate, optionsFormat } from "../../utils/format";
import { history } from "../../utils/history";

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
    
    const [flagMedida1, setFlagMedida1] = useState(true);
    const [flagMedida2, setFlagMedida2] = useState(false);

    const [dataHistory, setDataHistory] = useState(JSON.parse(sessionStorage.getItem('medida') ?? '[]'));
    
    const columns = [
        {
            accessorKey: 'from',
            header: 'De'
        },
        {
            accessorKey: 'value1',
            header: 'Valor 1'
        },
        {
            accessorKey: 'to',
            header: 'Para'
        },
        {
            accessorKey: 'value2',
            header: 'Valor 2'
        },
        {
            accessorKey: 'dateModified',
            header: 'Data da conversão'
        }
    ]

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

        setValueMedida1("1");
        setFlagMedida1(true);
        setFlagMedida2(false);
    }

    const handleOnChangeSelect2 = (e) => {
        setMedida2(e);

        // remove a mesma opção do outro select para não causar problema
        removeDuplicata(e, "SELECT2");

        if(e.value === medida1?.value)
            setMedida1();

        const {simbolo: prefixMedida} = medidas.find((i) => i.sigla === e.value)
        setPrefixoMedida2(prefixMedida); 
 
        setValueMedida2("1");
        setFlagMedida1(true);
        setFlagMedida2(false);
    }

    const changeValueMedida1 = (e) => {
        let value = e.target.value?.replace(/\D/g, "");
        if(!value) {
            setValueMedida1("");
            return;
        }

        if(value.toString() !== valueMedida1.toString()){
            setValueMedida1(value);
            setFlagMedida1(true);
            setFlagMedida2(false);
        }
    }    

    useEffect(() => {
        let timeout1 = null;
        
        if(valueMedida1 && flagMedida1 && !flagMedida2){
            timeout1 = setTimeout(() => {
                setValueMedida2(1);

                if(multiplyValueSelect2){
                    
                    let valueMult = valueMedida1;
        
                    if(valueMult.toString().includes(','))
                        valueMult = valueMult.replace(",", ".");
            
                    setValueMedida2(valueMult * multiplyValueSelect2)
                    setFlagMedida1(false);
                    setFlagMedida2(false);
                    
                    const obj = {
                        from: medida1.value,
                        to: medida2.value,
                        value1: valueMedida1,
                        value2: (valueMult * multiplyValueSelect2),
                        dateModified: getDate()
                    }

                    history("medida", obj)

                    setDataHistory((items) => [...items, obj])
                }
            }, 500)
        }

        return () => {
            clearTimeout(timeout1);
        }
    }, [flagMedida1, flagMedida2, medida1, medida2, multiplyValueSelect2, valueMedida1])

    const changeValueMedida2 = (e) => {
        let value = e.target.value?.replace(/\D/g, "");
        if(!value) {
            setValueMedida2("");
            return;
        }


        if(value.toString() !== valueMedida2.toString()){
            setValueMedida2(value);
            setFlagMedida1(false);
            setFlagMedida2(true);
        }
    }

    useEffect(() => {
        let timeout1 = null;
        
        if(valueMedida2 && !flagMedida1 && flagMedida2){
            timeout1 = setTimeout(() => {
                setValueMedida1(1);

                if(multiplyValueSelect1){
                    
                    let valueMult = valueMedida2;
        
                    if(valueMult.toString().includes(','))
                        valueMult = valueMult.replace(",", ".");
            
                    setValueMedida1(valueMult * multiplyValueSelect1)
                    setFlagMedida1(false);
                    setFlagMedida2(false);
                    
                    const obj = {
                        from: medida2.value,
                        to: medida1.value,
                        value1: valueMedida2,
                        value2: (valueMult * multiplyValueSelect1),
                        dateModified: getDate()
                    }

                    history("medida", obj)

                    setDataHistory((items) => [...items, obj])
                    
                }
            }, 500)
        }

        return () => {
            clearTimeout(timeout1);
        }
    }, [flagMedida1, flagMedida2, medida1, medida2, multiplyValueSelect1, valueMedida2])

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
            <CardComponent
                md={12}
                xl={12}
                lg={12}
                className={"mt-5"}
            >
                <Row className="p-3"><h5>Histórico</h5></Row>
                <Row >
                    <div className="tableIndex">
                        <MaterialReactTable
                            columns={columns}
                            data={dataHistory}
                            enableColumnFilters
                            enableColumnOrdering
                            
                        />
                    </div>
                </Row>    
            </CardComponent>
        </BasePage>
        </>
    )
}

export default ConversorMedida;