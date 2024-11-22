
import { PieChart, pieArcLabelClasses  } from '@mui/x-charts/PieChart';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const dataTest = [{color:"red",id:0,label:"mortos",value:261},
  {color:"green",id:1,label:"vivos",value:4118}]



function PieGraph({dataset}) {

  

  const valueFormatter = (item) => `${item.value}`;
  const data = {
    data: dataset,
    valueFormatter
  }
  
  const getPercent = (value, data) => { 
    let sum = 0;
    data.data.forEach((item) => sum+= item.value);
    return (Math.round((value / sum) * 10000)) / 100;
  }
  

  return (
    <PieChart
      margin={{ top: 0, bottom: 100, left: 0, right:0 }}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: 0,
        },
      }}
      series={[
        {
          arcLabel: (item) => `${getPercent(item.value,data)}%`,
          arcLabelMinAngle: 35,
          highlightScope: { fade: 'global', highlight: 'item', fadeOpacity: 0.2 },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },

        
          ...data,
        },
        
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
PieGraph.propTypes = {
  dataset: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PieGraph;

