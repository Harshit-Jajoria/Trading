import React, { useState } from 'react';
import './leaderBoardDate.css';

export default function LeaderBoardDate(props) {
 const {selected,setSelected} = props;

    const changeSelected = ({ data, date }) => {
        if (data === 'all-time') {
            setSelected(prev => ({
                ...prev,
                isAllTime: true,
                dateData: {
                    month: 'MONTH',
                    year: 'YEAR'
                },
                isDate: false,
                isMonthSelected: false,
                isYearSelected: false,
            }))
        } else if (data === 'selected-MONTH') {
            setSelected(prev => ({
                ...prev,
                isAllTime: false,
                dateData: {
                    month: date.month,
                    year: 'YEAR',
                },
                isDate: true,
                isMonthSelected: false,
                isYearSelected: true,
            }))

        } else if (data === 'selected-YEAR') {
            setSelected(prev => ({
                ...prev,
                isAllTime: false,
                dateData: {
                    month: selected.dateData.month,
                    year: date.year,
                },
                isDate: true,
                isMonthSelected: false,
                isYearSelected: false,
            }))
        }

    }

    const changeTable = (data) => {
        if (data === 'PLP') {

            props.setColumnVisibility(prev => ({
                ...prev,
                isPLP: true,
                isProfit: false,
                isKOTTO: false,
            }))
        } else if (data === 'Profit') {

            props.setColumnVisibility(prev => ({
                ...prev,
                isPLP: false,
                isProfit: true,
                isKOTTO: false,
            }))

        } else if (data === 'KOTTO') {

            props.setColumnVisibility(prev => ({
                ...prev,
                isPLP: false,
                isProfit: false,
                isKOTTO: true,
            }))

        }

    }

    return (
        <div className='cp-leaderBoardDate-container'>
            <div className='container-top'>
                <button className={`items ${selected.isAllTime && 'selected'}`} onClick={() => changeSelected({ data: 'all-time' })}>ALL-TIME</button>
                <p
                    className={`items 
                    ${selected.isMonthSelected || (selected.isDate && selected.dateData.month !== 'MONTH') ? 'selected' : ''}`
                    }
                    onClick={() => {
                        if (selected.dateData.month === 'MONTH')
                            setSelected(prev => ({
                                ...prev,
                                isMonthSelected: true,
                                isAllTime: false,
                            }))
                    }}
                >{selected.dateData.month}</p>
                <p className={`items ${(selected.isDate && selected.dateData.year !== 'YEAR') || selected.isYearSelected ? 'selected' : ''}`}>{selected.dateData.year}</p>
                <p className={`items ${props.columnVisibility.isPLP ? 'selected' : ''} `} onClick={() => changeTable('PLP')} >PLP</p>
                <p className={`items ${props.columnVisibility.isProfit ? 'selected' : ''} `} onClick={() => changeTable('Profit')} >PROFIT</p>
                <p className={`items ${props.columnVisibility.isKOTTO ? 'selected' : ''} `} onClick={() => changeTable('KOTTO')} >KOTTO</p>
            </div>

            {

                selected.isMonthSelected ?

                    <div className='container-top'>
                        <button
                            className={`items date-items ${selected.isDate && selected.dateData.month === 'dec' ? 'selected' : ' '} `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'dec' } })
                            }}
                        >
                            DEC
                        </button>

                        <button className={`items date-items ${selected.isDate && selected.dateData.month === 'nov' ? 'selected' : ' '} `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'nov' } })
                            }}>
                            Nov
                        </button>

                        <button
                            className={`items date-items ${selected.isDate && selected.dateData.month === 'oct' ? 'selected' : ' '} `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'oct' } })
                            }}
                        >
                            oct
                        </button>
                        <button
                            className={`items date-items ${selected.isDate && selected.dateData.month === 'sep' ? 'selected' : ' '} `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'sep' } })
                            }}
                        >
                            sep
                        </button>

                        <button
                            className={`items date-items `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'aug' } })
                            }}>aug</button>
                        <button className={`items date-items `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'jul' } })
                            }}>jul</button>
                        <button className={`items date-items `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'jun' } })
                            }}>jun</button>
                        <button className={`items date-items  `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'may' } })
                            }}>may</button>
                        <button className={`items date-items  `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'apr' } })
                            }}>apr</button>
                        <button className={`items date-items  `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'mar' } })
                            }}>mar</button>
                        <button className={`items date-items `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'feb' } })
                            }}>feb</button>
                        <button className={`items date-items `}
                            onClick={() => {
                                changeSelected({ data: 'selected-MONTH', date: { month: 'jan' } })
                            }}>jan</button>
                    </div>
                    : null
            }
            {selected.isYearSelected && <div className='container-top year'>
                <button
                    className='items date-items year'
                    onClick={() => changeSelected({ data: 'selected-YEAR', date: { year: '2023' } })}
                >
                    2023</button>
                <button
                    className='items date-items year'
                    onClick={() => changeSelected({ data: 'selected-YEAR', date: { year: '2022' } })}
                >
                    2022</button>
                <button className='items date-items year'
                    onClick={() => changeSelected({ data: 'selected-YEAR', date: { year: '2021' } })}>2021</button>
                <button className='items date-items year'
                    onClick={() => changeSelected({ data: 'selected-YEAR', date: { year: '2020' } })}>2020</button>
            </div>}
        </div>
    )
}
