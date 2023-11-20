import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer
} from "recharts";

export default function CustomLineChart({data,
  xLabelName,
  yLabelName,
  lineDataKey,
  toolTipLabel,
  xAxisDataKey, }) {
  return (
    <ResponsiveContainer width="99%" height={300}>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey={xAxisDataKey}
      label={{ fill: "#161925" }}
      tick={{ fill: "#161925" }}
      axisLine={{ stroke: "#161925" }}>
        <Label value={xLabelName}
          offset={-5}
          style={{
            textAnchor: "middle",}}
          fill='#161925'
          position="insideBottom"/>
      </XAxis>
      <YAxis 
      label={{ fill: "#161925" }}
      tick={{ fill: "#161925" }}
      axisLine={{ stroke: "#161925" }}>
        <Label
          value={yLabelName}
          style={{
            textAnchor: "middle",}}
          angle={-90}
          offset={15}
          fill='#161925'
          position="left"
        />
      </YAxis>
      {/* <Tooltip /> */}
      <Tooltip
        content={({ payload, label }) => {
          if (payload && payload.length > 0) {
            const amtData = payload[0].payload[lineDataKey];
            return (
              <div className="text-[14px]">
                <p>{label}</p>
                <p>{toolTipLabel}: {amtData}</p>
              </div>
            );
          }
          return null;
        }}
      />
      <Line type="monotone" dataKey={lineDataKey} stroke="#161925" />
    </LineChart>
    </ResponsiveContainer>
  );
}
