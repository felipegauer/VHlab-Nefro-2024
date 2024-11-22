import Plot from 'react-plotly.js';
const ShapGraph = () => {
    const data = [
        { featureName: 'Feature 1', shapValue: 0.5 },
        { featureName: 'Feature 1', shapValue: 0.5 },
        { featureName: 'Feature 2', shapValue: -0.2 },
        { featureName: 'Feature 3', shapValue: 0.1 },
        { featureName: 'Feature 4', shapValue: 0.3 },
        { featureName: 'Feature 5', shapValue: -0.1 },

      ];
  const shapValues = data.map(item => item.shapValue);
  const featureNames = data.map(item => item.featureName);

  return (
    <Plot
    data={[
        {
          x: shapValues,
          y: featureNames,
          mode: 'markers',
          type: 'scatter',
          marker: { size: 12 }
        },
      ]}
      layout={{ title: 'SHAP Values' }}
    />
  );
};

export default ShapGraph;