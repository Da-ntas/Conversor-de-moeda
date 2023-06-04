import React, { useCallback, useEffect, useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { MaterialReactTable } from "material-react-table";
import BasePage from "../../components/BasePage";
import CardComponent from "../../components/CardComponent";
import TitleBody from "../../components/TitleBody";

import { medidasValues, medidas } from "../../api";

const ListaMedida = () => {
    const [dataTable, setDataTable] = useState([]);
    const [option, setOption] = useState("KM");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const columns = [
        {
            accessorKey: 'option',
            header: 'Medida'
        },
        {
            accessorKey: 'equals',
            header: 'Equivale'
        },
    ]

    useEffect(() => {
        const actualOption = medidas.filter((e) => e.sigla === option)
        const arrValues = []
        for (const [key, value] of Object.entries(medidasValues[option])) {
            const val = medidas.filter((e) => e.sigla === key)
            arrValues.push({
                option: `1 ${actualOption[0].nome}`,
                equals: `${value} - ${val[0].nome}s`,
            })
        }
        setDataTable(arrValues);
    }, [option])

    return (
        <BasePage>
            <TitleBody
                title="Lista de valores medidas"
                // buttonValue={[
                //     {   
                //         variant: "primary",
                //         size: "md",
                //         value: "Histórico",
                //         onClickFunc: handleOpenHistoryModal
                //     }
                // ]}
            />
            <CardComponent
                md={12}
                xl={12}
                lg={12}
                className={"mt-5"}
            >
                <Row className="p-3">
                    <Nav variant="tabs">
                        <Nav.Item><Nav.Link onClick={() => setOption("KM")}>Quilômetro</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("HM")}>Hectômetro</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("DAM")}>Decâmetro</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("M")}>Metro</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("DM")}>Decímetro</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("CM")}>Centímetro</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("MM")}>Milímetro</Nav.Link></Nav.Item>
                    </Nav>
                </Row>
                <Row className="p-3">
                    <MaterialReactTable
                        columns={columns}
                        data={dataTable}
                    />
                </Row>
            </CardComponent>
        </BasePage>
    )
}

export default ListaMedida;