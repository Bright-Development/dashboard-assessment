import React, { useState, useEffect } from "react";
import { UserMetricsCard } from "../components/UserMetricsCard";
import EngagementMetrics from "../components/EngagementMetrics";
import { fetchMetrics } from "../api/mockApi";

export const DashboardView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   TODO: #5 Change Loading so that we refresh the data every 5 seconds
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchMetrics();
        setData(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to load metrics data");
      } finally {
        setLoading(false);
      }
    };
    setInterval(() => {
      fetchData();
    }, 5000); // 5 seconds
  }, []);
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">User Engagement Metrics</h2>
        {/* TODO: #4 Implement EngagementMetrics component here */}
        <EngagementMetrics data={data} />
      </div>
      <UserMetricsCard data={data} loading={loading} error={error} />
    </div>
  );
};
