// https://www.youtube.com/watch?v=dxUyI2wfYSI
// https://apexcharts.com/react-chart-demos/line-charts/zoomable-timeseries/

import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { ExamInfoContext } from "../../Context/ExamsInfoContext";

export default function LineGraphZoom({ dates, dataShow }) {
  const { examsInfo } = useContext(ExamInfoContext);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (examsInfo) {
      const aux = examsInfo.find((e) => e.exam === dates.ml.name);
      if (aux) setInfo(aux);
    }
  }, [dates.ml.name, examsInfo]);

  // let lowset_point = 125
  // let highest_point = 139
  // let target_low = 129
  // let target_high = 135

  // let stop_percent_low = 100 -((target_low - lowset_point) / (highest_point - lowset_point) * 100)
  // let stop_percent_heigh = 100 -((target_high - lowset_point) / (highest_point - lowset_point) * 100)

  const formattedSeries =()=>{
    const serie = []

    if(dataShow?.real_data)
      serie.push({
      name: dates.real.name || "paciente",
      data: dates.real.data.map((point) => ({
        x: point.x,
        y: point.y,
      })),
      // color: "#9C27B0"
      
    })

    if(dataShow?.ml_data)
      serie.push({
      name: dates.ml.name || "ml",
      data: dates.ml.data.map((point) => ({
        x: point.x,
        y: point.y,
      })),
      // color: "#9C27B0"
    })

    return serie
  }
  
  const state = {
    series: formattedSeries(),
    // [{
    //   name: dates.name,
    //   data: dates.data
    // }],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        defaultLocale: "pt-br",
        locales: [
          {
            name: "pt-br",
            options: {
              months: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
              ],
              shortMonths: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
              ],
              // days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              // shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              toolbar: {
                download: "Download SVG",
                selection: "Selecionar",
                selectionZoom: "Selection Zoom",
                zoomIn: "Zoom In",
                zoomOut: "Zoom Out",
                pan: "Mover",
                reset: "Reset Zoom",
              },
            },
          },
        ],
        toolbar: {
          autoSelected: "zoom",
        },
      },
      grid: {
        // borderColor: '#90A4AE30',
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#00E396", "#FF4560", "#FEB019"],
        },
      },
      markers: {
        size: 5,
      },
      title: {
        text: dates ? dates.ml.name : "paciente",
        align: "center",
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0,
          stops: [0, 90, 100],
          // colorStops:
          //             [
          //               {
          //                   offset: 0,
          //                   color: '#FCB51D',
          //                   opacity: 1
          //               },
          //               {
          //                   offset: stop_percent_heigh,
          //                   color: "#FCB51D",
          //                   opacity: 1
          //               },
          //                 {
          //                     offset: stop_percent_heigh,
          //                     color: '#0088ee',
          //                     opacity: 1
          //                 },
          //                 {
          //                     offset: stop_percent_low,
          //                     color: "#0088ee",
          //                     opacity: 1
          //                 },
          //                 {
          //                     offset: stop_percent_low,
          //                     color: '#FCB51D',
          //                     opacity: 1
          //                 },
          //                 {
          //                     offset: 100,
          //                     color: '#FCB51D',
          //                     opacity: 1
          //                 }
          //             ]
        },
      },

      colors: ["#008FFBff", "#00E396ff"],
      yaxis: {
        tickAmount: undefined,
        labels: {
          formatter: function (val) {
            return val;
          },
        },
        title: {
          text: "Valor",
        },
      },
      xaxis: {
        type: "datetime",
      },
      annotations: {
        yaxis: [
          {
            y: dataShow?.annotations ? (info ? info.high : -1000) : -1000, // Posição da linha superior dataShow?.annotations ? (info ? info.high : -1000) : -1000,
            borderColor: "#FC901D",
            // fillColor: "#FF4560",
            strokeDashArray: 0,
            // click
            label: {
              borderColor: "#FC901D",
              style: {
                color: "#000",
                background: "#FC901D",
              },
              text: "Acima", // Texto da linha superior
            },
          },
          {
            y: dataShow?.annotations ? (info ? info.low : -1000) : -1000, // Posição da linha inferior
            borderColor: "#FC901D",
            strokeDashArray: 0,
            label: {
              borderColor: "#FC901D",
              style: {
                color: "#000",
                background: "#FC901D",
              },
              text: "Abaixo", // Texto da linha inferior
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
      plotOptions: {
        area: {
          fillTo: "origin",
        },
      },
    },
  };

  return (
    <>
      <div className="h-full" id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
        />
      </div>
      <div id="html-dist"></div>
    </>
  );
}

LineGraphZoom.propTypes = {
  dates: PropTypes.object,
  series: PropTypes.array,
  dataShow: PropTypes.shape({
    annotations: PropTypes.bool,
    ml_data: PropTypes.bool,
    real_data: PropTypes.bool,
  }),
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
