
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import "./chart.scss";

export default function Chart() {
  const data = 
    [
      {
        name: "Jan",
        'Active User': 4000,
      },
      {
        name: "Fev",
        'Active User': 3000,
      },
      {
        name: "Mar",
        'Active User': 2000,
      },
      {
        name: "Avr",
        'Active User': 2780,
      },
      {
        name: "Mai",
        'Active User': 1890,
      },
      {
        name: "Jui",
        'Active User': 2390,
      },
      {
        name: "Jui",
        'Active User': 3490,
      },
      {
        name: "Aou",
        'Active User': 3490,
      },
      {
        name: "Sep",
        'Active User': 3490,
      },
      {
        name: "Nov",
        'Active User': 3490,
      },
      {
        name: "Dec",
        'Active User': 3490,
      },
    ];
 
  return (
    <div className="chart">
      <h3 className="chart__title">Analyses des ventes</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#54a187' />
          <Line type='monotone' dataKey="Active User" stroke='#54a187' />
          <Tooltip/>
          <CartesianGrid stroke="#f5F5F5" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
};
