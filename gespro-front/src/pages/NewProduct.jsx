import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import AddForm from "../components/product/AddForm";

const NewProduct = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen">
        <Header />
        <AddForm />
      </div>
    </div>
  );
};

export default NewProduct;
