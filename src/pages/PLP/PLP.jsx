import React, { useMemo } from 'react'
import { Table } from '../../components/Table/Table'

export const PLP = () => {
    const columns = useMemo(() => [
        {
            Header: "Date",
            accessor: "date"
        },
        {
            Header: "Time",
            accessor: "time"
        },
        {
            Header: "Ref",
            accessor: "ref"
        },
        {
            Header: "Quantity",
            accessor: "quantity"
        },
        {
            Header: "Total",
            accessor: "total"
        },
    ])

    const data = [
        {
            date: "01/12/21",
            time: "13:00:05 ",
            ref: "PG0023120",
            quantity: "6.6",
            total: "6.66"
        },
    ]

    return (
        <main className='wrapper_tradingAccount'>
            <h3>Premium Loyalty Points Account (PLP)</h3>
            <section className='tradingAccount_table'>
                <Table columns={columns} data={data} />
            </section>
        </main>
    )
}
