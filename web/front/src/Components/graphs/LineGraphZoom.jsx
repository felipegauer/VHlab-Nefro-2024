// https://www.youtube.com/watch?v=dxUyI2wfYSI
// https://apexcharts.com/react-chart-demos/line-charts/zoomable-timeseries/

import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';


export default function LineGraphZoom({dates , series}) {


    const state = {
      series: series?series:[{
        name: dates.name,
        data: dates.data
      }],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 5,
        },
        title: {
          text: dates?dates.name:"paciente",
          align: 'center'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val;
            },
          },
          title: {
            text: 'Valor'
          },
        },
        xaxis: {
          type: 'datetime',
        },
        // colors: ['#00518702'],
        tooltip: {
          shared: false,
          // y: {
          //   formatter: function (val) {
          //     return (val / 1000000).toFixed(0)
          //   }
          // }
        }
      },
    };
  
    return (
      <>
        <div className="h-full" id="chart">
          <ReactApexChart options={state.options} series={series?series:state.series} type='area' />
        </div>
        <div id="html-dist"></div>
      </>
    );
  }

LineGraphZoom.propTypes = {
    dates: PropTypes.object,
    series: PropTypes.array
};
  