export default function AddForm() {
  return (
    <main className="p-4 sm:p-6 lg:ps-72 lg:pe-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden">
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Ajouter un produit
                  </h2>
                </div>
              </div>

              <form className="px-6 py-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-darkColor mb-1">
                    Nom du produit
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: Ordinateur portable"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkColor mb-1">
                    Prix (FCFA)
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: 10000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkColor mb-1">
                    Statut
                  </label>
                  <select
                    name="status"
                    className="block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="disponible">Disponible</option>
                    <option value="rupture">En rupture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkColor mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    className="block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Décrivez le produit..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkColor mb-1">
                    Image du produit
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondaryColor hover:file:bg-blue-100"
                  />
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-baseColor text-white hover:bg-hoverColor"
                  >
                    Enregistrer le produit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
