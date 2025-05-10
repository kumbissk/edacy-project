import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from '../../axios';

export default function AddForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("disponible");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", parseFloat(price));
    formData.append("status", status);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category_id", 1);

    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", { withCredentials: true });

      const response = await api.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },

      });
      // console.log("Produit ajouté :", response.data);
      setName("");
      setPrice("");
      setStatus("disponible");
      setDescription("");
      setImage("");

      alert("Produit ajouté!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur :", error.response.data);
    }
  };

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

              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-darkColor mb-1">
                    Nom du produit
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: Ordinateur portable"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkColor mb-1">
                    Prix (FCFA)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: 10000"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-darkColor mb-1">
                    Statut
                  </label>
                  <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Coller ici l'URL de l'image"
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
