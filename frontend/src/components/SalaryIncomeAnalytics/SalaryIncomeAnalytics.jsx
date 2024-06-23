import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const SalaryIncomeAnalytics = () => {
    const [monthlyView, setMonthlyView] = useState(true);
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [data, setData] = useState({ salaries: [], fees: [] });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/analytics/salary-income?monthlyView=${monthlyView}&year=${year}&month=${month}`);
            setData(response.data);
        };

        fetchData();
    }, [monthlyView, year, month]);

    const chartData = {
        labels: monthlyView ? Array.from({ length: 12 }, (_, i) => i + 1) : [year],
        datasets: [
            {
                label: 'Salaries',
                data: data.salaries,
                backgroundColor: '#FF6384'
            },
            {
                label: 'Fees',
                data: data.fees,
                backgroundColor: '#36A2EB'
            }
        ]
    };

    return (
        <div>
            <h2>Salary and Income Analytics</h2>
            <div>
                <label>View: </label>
                <select value={monthlyView} onChange={(e) => setMonthlyView(e.target.value === 'true')}>
                    <option value={true}>Monthly</option>
                    <option value={false}>Yearly</option>
                </select>
                <label>Year: </label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
                {monthlyView && (
                    <>
                        <label>Month: </label>
                        <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} />
                    </>
                )}
            </div>
            <Bar data={chartData} />
        </div>
    );
};

export default SalaryIncomeAnalytics;
