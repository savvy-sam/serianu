import React from "react";
import { PieChart, Pie, Legend, Cell, Label, ResponsiveContainer } from "recharts";

const renderColorfulLegendText = (value) => {
  return (
    <span style={{ color: "#4F4F4F", fontWeight: 400, padding: "px" }}>
      {value}
    </span>
  );
};

const DoughnutChart = ({ name, value, fill, }) => {
  const data = [{ name, value, fill }];

  return (
    <ResponsiveContainer width="99%" height={300}>
      <PieChart>
      <Legend
        height={36}
        align="right"
        iconType="rect"
        layout="vertical"
        verticalAlign="middle"
        iconSize={10}
        padding={5}
        formatter={renderColorfulLegendText}
      />
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        <Label value={value.toString()} position="center" className="label-top" fontSize="27px" />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
    </PieChart>
    </ResponsiveContainer>
  );
};

export default DoughnutChart;
