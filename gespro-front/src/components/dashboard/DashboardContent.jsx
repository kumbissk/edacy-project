import ListProduct from "../product/ListProduct";

export default function DashboardContent() {
  return (
    <main className="p-4 sm:p-6 lg:ps-72 lg:pe-8 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800">
            Produit en stock
          </h2>
          <p className="mt-2 text-2xl font-bold text-baseColor">120</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800">Valeur</h2>
          <p className="mt-2 text-2xl font-bold text-secondaryColor">
            FCFA 85,000
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800">Utilsateurs</h2>
          <p className="mt-2 text-2xl font-bold text-red-500">10</p>
        </div>
      </div>

      <div className="rounded-lg shadow-sm">
        <ListProduct />
      </div>
    </main>
  );
}
