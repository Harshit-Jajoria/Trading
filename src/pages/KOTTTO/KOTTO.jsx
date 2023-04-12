import React, { useMemo } from 'react'
import { Table } from '../../components/Table/Table'

export const KOTTO = () => {
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
            Header: "Premium",
            accessor: "quantity"
        },
        {
            Header: "Trading",
            accessor: "trading"
        },
        {
            Header: "Trading",
            accessor: "total"
        },
        {
            Header: "KOTTO",
            accessor: "kotto"
        },
    ])

    const data = [
        {
            date: "01/12/21",
            time: "13:00:05 ",
            ref: "PG0023120",
            premium: "6.6",
            trading: "6.6",
            total: "6.66",
            kotto: "1",
        },
    ]

    return (
        <main className='wrapper_tradingAccount'>
            <h3>KOTTO</h3>
            <section className='tradingAccount_table'>
                <Table columns={columns} data={data} />
            </section>
        </main>
    )
}
