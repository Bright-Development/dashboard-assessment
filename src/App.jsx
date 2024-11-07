import React from "react";
import { Layout } from "./components/Layout";
import { DashboardView } from "./views/DashboardView";

export default function App() {
  return (
    <Layout>
      <DashboardView />
    </Layout>
  );
}
