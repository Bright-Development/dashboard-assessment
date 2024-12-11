import React from "react";
import { fetchMetrics } from "../api/mockApi";

// This component intentionally has performance issues to fix
export const UserMetricsCard = () => {
  const [metrics, setMetrics] = React.useState(null);
  // TODO: #1 Any thing you might change with data transformation function?

  // TODO: #2 What might we fix with this useEffect?
  React.useEffect(() => {
    const transformData = (data) => {
      return data.map((item) => ({
        ...item,
        engagement: item.engagement * 100,
        sessionLength: Math.round(item.sessionLength),
        date: new Date(item.date).toLocaleDateString(),
      }));
    };

    const fetchData = async () => {
      try {
        const data = await fetchMetrics();
        setMetrics(transformData(data.data));
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchData();
  }, []);

  if (!metrics) return <div>Loading...</div>;
  // TODO: #3 How might we fix rerendering issue?
  return (
    <div
      className="bg-white shadow rounded-lg p-6"
      style={{ minHeight: "200px" }}
    >
      <h3 className="text-lg font-medium mb-4">User Metrics</h3>
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="mb-4"
          onClick={() => console.log("clicked")}
          style={{ padding: "8px" }}
        >
          <div>Date: {metric.date}</div>
          <div>Active Users: {metric.activeUsers}</div>
          <div>Engagement: {metric.engagement}%</div>
          <div>Avg. Session: {metric.sessionLength} min</div>
        </div>
      ))}
    </div>
  );
};
