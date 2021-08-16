
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import "./chart.scss";

export default function Chart({title, data, grid, dataKey}) {
  
 
  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#54a187' />
          <Line type='monotone' dataKey={dataKey} stroke='#54a187' />
          <Tooltip/>
         {grid && <CartesianGrid stroke="#f5F5F5" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
};
