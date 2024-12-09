import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function ApexNegative() {

    let lowset_point = -69
    let highest_point = 62
    let target = 0

    let stop_percent = 100 -((target - lowset_point) / (highest_point - lowset_point) * 100) 
    const state = {
        series: [
            {
                data: [0, -41, 35, -51, 0, 62, -69, 32, -32, 54, 16, -50],
                type: 'area'
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            title: {
                text: 'Negative color for values less than 0',
                align: 'left',
            },
            xaxis: {
                categories: [
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ],
            },
            stroke: {
              width: '0',
          },
          markers: {
              colors: '#ccc'
          },
        plotOptions: {
            line: {
              colors: {
                threshold: 0,
                colorAboveThreshold: '#0088ee',
                colorBelowThreshold: '#ff0000',
              },
            },
        }
          
        },
    };

    return (
        <div id="chart">
            <ReactApexChart 
            
            options={state.options} series={state.series} type="area" height={500} width={500} />
        </div>
    );
}