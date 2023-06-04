import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useState } from "react";
import { Nav, Row } from "react-bootstrap";
import { currency, currencyValues } from "../../api";
import BasePage from "../../components/BasePage";
import CardComponent from "../../components/CardComponent";
import TitleBody from "../../components/TitleBody";

const ListaMoeda = () => {
    
    const [dataTable, setDataTable] = useState([]);
    const [option, setOption] = useState("BRL");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const columns = [
        {
            accessorKey: 'option',
            header: 'Moeda'
        },
        {
            accessorKey: 'equals',
            header: 'Equivale'
        },
    ]

    useEffect(() => {
        const actualOption = currency.filter((e) => e.sigla === option)
        const arrValues = []
        for (const [key, value] of Object.entries(currencyValues[option])) {
            const val = currency.filter((e) => e.sigla === key)
            arrValues.push({
                option: `${actualOption[0].simbolo} 1 (${actualOption[0].nome})`,
                equals: `${val[0].simbolo} ${value} (${val[0].nome})`,
            })
        }
        setDataTable(arrValues);
    }, [option])

    return (
        <BasePage>
            <TitleBody
                title="Lista de valores moedas"
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
                        <Nav.Item><Nav.Link onClick={() => setOption("BRL")}>Real Brasileiro</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("USD")}>Dólar Americano</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("EUR")}>Euro</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("JPY")}>Iene Japonês</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("GBP")}>Libra Esterlina</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("AUD")}>Dólar Australiano</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => setOption("CAD")}>Dólar Canadense</Nav.Link></Nav.Item>
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

export default ListaMoeda;