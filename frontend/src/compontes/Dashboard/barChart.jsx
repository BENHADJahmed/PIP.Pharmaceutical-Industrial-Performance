import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData, titre }) => {
  // Référence pour le composant de graphique
  const chartRef = useRef(null);

  // Effet pour mettre à jour le graphique lorsque les données changent
  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    if (chartInstance) {
      chartInstance.data = chartData;
      chartInstance.options.plugins.title.text = titre;
      chartInstance.update();
    }
  }, [chartData, titre]);

  // Rendu du composant
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{titre}</h2>
      <Bar
        ref={chartRef}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: titre,
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
              },
              ticks: {
                beginAtZero: true,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
