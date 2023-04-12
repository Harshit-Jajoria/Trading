import React, { useMemo } from 'react'
import { Table } from '../../components/Table/Table'
import "./premiumAccount.css"

export const PremiumAccount = () => {
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
            Header: "Trade",
            accessor: "trade"
        },
        {
            Header: "Amount",
            accessor: "amount"
        },
        {
            Header: "Balance",
            accessor: "balance"
        },
    ])

    const data = [
        {
            date: "01/12/21",
            time: "13:35:00",
            trade: "PCR",
            amount: "(10.0)",
            balance: "200.00"
        },
        {
            date: "01/12/21",
            time: "13:35:00",
            trade: "RM0001",
            amount: "(10.0)",
            balance: "200.00"
        },
        {
            date: "01/12/21",
            time: "13:35:00",
            trade: " Buy AR BP1",
            amount: " +113.15",
            balance: "200.00"
        },
    ]
    return (
        <main className='wrapper_tradingAccount'>
            <h3>Premium Account</h3>
            <section className='tradingAccount_table'>
                <Table columns={columns} data={data} />
            </section>
        </main>
    )
}
