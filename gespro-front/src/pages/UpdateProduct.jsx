import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import UpdateForm from "../components/product/UpdateForm";

const UpdateProduct = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen">
        <Header />
        <UpdateForm />
      </div>
    </div>
  );
};

export default UpdateProduct;
