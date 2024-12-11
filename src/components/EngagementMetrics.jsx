import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EngagementMetrics = ({ data }) => {
  return (
    <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
      <p className="text-gray-500 text-center mb-2">
        TODO: #4 Implement Engagement Chart Here
      </p>
      <div className="h-64 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-2">Expected Visualization:</p>
          <div style={{ height: "600px", width: "600px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EngagementMetrics;
