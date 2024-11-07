export const fetchMetrics = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Generate mock data
  const today = new Date();
  const data = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    return {
      date: date.toISOString().split("T")[0],
      activeUsers: Math.floor(Math.random() * 2000) + 1000,
      sessionLength: Math.random() * 20 + 10,
      engagement: Math.random() * 0.8 + 0.2,
    };
  });

  return { data };
};
