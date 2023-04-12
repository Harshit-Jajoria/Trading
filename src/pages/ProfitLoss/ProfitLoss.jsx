import React, { useMemo } from 'react'
import { Table } from '../../components/Table/Table'

export const ProfitLoss = () => {
    const columns = useMemo(() => [
        {
            Header: "Date",
            accessor: "date"
        },
        {
            Header: "Game No",
            accessor: "gameNo"
        },
        {
            Header: "Profit/Loss",
            accessor: "profit-loss"
        },
        {
            Header: "Total",
            accessor: "total"
        },
    ])

    const data = [
        {
            date: "01/12/21",
            gameNo: "022110",
            "profit-loss": "10.0",
            total: 120.5
        },
    ]

    return (
        <main className='wrapper_tradingAccount'>
            <h3>Profit & Loss</h3>
            <section className='tradingAccount_table'>
                <Table columns={columns} data={data} />
            </section>
        </main>
    )
}
