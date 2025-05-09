import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardContent from "../components/dashboard/DashboardContent";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
