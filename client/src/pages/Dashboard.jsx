import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <StatCard title="Total Articles" value="24" />
        <StatCard title="Total Views" value="12,450" />
        <StatCard title="Authors" value="8" />
        <StatCard title="Categories" value="6" />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;