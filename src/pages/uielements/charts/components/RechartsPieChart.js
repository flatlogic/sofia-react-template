import React from "react";
import { v4 as uuidv4 } from "uuid";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import s from "../Charts.module.scss";
import Dot from "../../../../components/Dot/Dot";

const chartsSettings = {
  donut: {
    data: [
      { name: 'Custom Classes', value: 300, color: '#FFC405' },
      { name: 'Different Types', value: 400, color: '#FF5668' },
      { name: 'Credit Card', value: 400, color: '#4D53E0' },
    ],
  }
};

const RechartsPieChart = () => {

  return (
    <div style={{ height: "316px" }}>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart >
          <Pie
            data={chartsSettings.donut.data}
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
          >
            {chartsSettings.donut.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={s.donutLabels}>
        {chartsSettings.donut.data.map((entry, index) => (
          <div key={uuidv4()} className={s.label}>
            <Dot color={entry.color} />
            <span className="body-3 ml-2">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
};

export default RechartsPieChart;
