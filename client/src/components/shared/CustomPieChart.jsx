import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import PropTypes from 'prop-types';

const CustomPieChart = ({data}) => {
  return (
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
                {/* <Legend
                height={36}
                align="right"
                iconType="rect"
                layout="vertical"
                verticalAlign="middle"
                iconSize={10}
                padding={5}
            /> */}
              <Legend
                 height={36}
                 align="right"
                 iconType="rect"
                 layout="vertical"
                 verticalAlign="middle"
                 iconSize={10}
                 padding={5}
                content={(props) => {
                  const { payload } = props;
                  return (
                    <ul>
                      {payload.map((entry, index) => (
                        <li key={`item-${index}`} style={{ color: 'black', display: 'flex', gap: '10px', alignItems: 'center'
                        }}>
                          <svg width={15} height={15}>
                            <rect width={15} height={15} fill={entry.color} />
                          </svg>
                          {entry.value}
                        </li>
                      ))}
                    </ul>
                  );
                }}
              />
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"0%"}
              outerRadius={"90%"}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
  );
};

CustomPieChart.propTypes = {
    data: PropTypes.array
}

export default CustomPieChart;