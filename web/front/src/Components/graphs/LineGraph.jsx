import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


const exampleData = [
  {Date: "2021-01-01", Value: 4000},
  {Date: "2021-02-01", Value: 3000},
  {Date: "2021-03-01", Value: 2000},
  {Date: "2021-04-01", Value: 2780},
  {Date: "2021-05-01", Value: 1890},
]

function LineGraph({  labelX, labelY, legendName, DataSet}) {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={DataSet?DataSet:exampleData}
        margin={{
          top: 25, right: 30, left: 20, bottom: 25,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
        dataKey="Date"
         label={{ value: labelX, position: 'insideBottom', dy: 20 }}
         tickMargin={10} 
         />
        <YAxis label={{ value: labelY, angle: -90, position: 'insideLeft', dy:-10 }}/>
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" dataKey="Value" stroke="#8884d8" activeDot={{ r: 8 }} name={legendName?legendName:"valores"}/>
      </LineChart>
    </ResponsiveContainer>
  );

}
LineGraph.propTypes = {
  labelX: PropTypes.string.isRequired,
  labelY: PropTypes.string.isRequired,
  legendName: PropTypes.string,
  DataSet: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default LineGraph;