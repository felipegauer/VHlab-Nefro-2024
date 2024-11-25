// https://www.youtube.com/watch?v=dxUyI2wfYSI
// https://apexcharts.com/react-chart-demos/line-charts/zoomable-timeseries/

import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
import { useEffect } from 'react';


export default function LineGraphZoom({ dates, series }) {

  const formattedSeries = series || [
    {
      name: dates.name || 'paciente',
      data: dates.data.map((point) => ({
        x: point.x,
        y: point.y,
        color: point.y < 10
          ? '#00E396' // Verde
          : point.y > 20
            ? '#FF4560' // Vermelho
            : '#FEB019', // Amarelo
      })),
    },
  ];
  const state = {
    series: series ? series : formattedSeries,
    // [{
    //   name: dates.name,
    //   data: dates.data
    // }],
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
        enabled: false,
        style: {
          colors: ['#00E396', '#FF4560', '#FEB019'],
        },
      },
      markers: {
        size: 5,
      },
      title: {
        text: dates ? dates.name : "paciente",
        align: 'center'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.7,
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
      annotations: {
        yaxis: [
          {
            y: 80, // Posição da linha superior
            borderColor: "#FF4560",
            // fillColor: "#FF4560",
            strokeDashArray: 0,
            // click
            label: {
              borderColor: "#FF4560",
              style: {
                color: "#fff",
                background: "#FF4560",
              },
              text: "Muito Grande", // Texto da linha superior
            },
          },
          {
            y: 10, // Posição da linha inferior
            borderColor: "#00E396",
            strokeDashArray: 0,
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: "Muito Baixo", // Texto da linha inferior
            },
          },
        ],
      },
      stroke: {
        curve: "smooth",
      },
      // colors: ['#00518702'],
      tooltip: {
        shared: true,
        // y: {
        //   formatter: function (val) {
        //     return (val / 1000000).toFixed(0)
        //   }
        // }
      },
    },
  };

  useEffect(() => {
    console.log(state.series);

  }, [state.series, state.options])

  return (
    <>
      <div className="h-full" id="chart">
        <ReactApexChart options={state.options} series={state.series} type='area' />
      </div>
      <div id="html-dist"></div>
    </>
  );
}

LineGraphZoom.propTypes = {
  dates: PropTypes.object,
  series: PropTypes.array
};


// plotOptions: {
//   heatmap: {
//     colorScale: {
//       ranges: [
//         {
//           from: 0,
//           to: 10,
//           color: "#00E396", // Verde para valores abaixo de 10
//           name: "Abaixo de 10",
//         },
//         {
//           from: 10,
//           to: 20,
//           color: "#FEB019", // Amarelo para valores entre 10 e 20
//           name: "Entre 10 e 20",
//         },
//         {
//           from: 20,
//           to: Infinity,
//           color: "#FF4560", // Vermelho para valores acima de 20
//           name: "Acima de 20",
//         },
//       ],
//     },
//   },
// },