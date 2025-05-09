import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../axios';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Erreur", error);
    }
  };

  const handleDeleteClick = (productId) => {
    setSelectedProduct(productId);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${selectedProduct}`);
      setProducts(products.filter((p) => p.id !== selectedProduct));
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    } finally {
      setShowConfirm(false);
      setSelectedProduct(null);
    }
  };

  const ConfirmDelete = ({ onClose, onConfirm }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirmer la suppression</h2>
        <p className="text-sm text-gray-600 mb-6">
          Êtes-vous sûr de vouloir supprimer ce produit ?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden">
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Liste des produits</h2>
              <Link
                to="/new-product"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-baseColor text-white hover:bg-hoverColor"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Ajouter un produit
              </Link>
            </div>

            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="ps-6 py-3 text-start text-xs font-semibold uppercase text-gray-800">Nom</th>
                  <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-800">Prix</th>
                  <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-800">Statut</th>
                  <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-800">Catégorie</th>
                  <th className="px-6 py-3 text-end"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="ps-6 py-3">
                      <div className="flex items-center gap-x-3">
                        <span className="inline-flex items-center justify-center size-9.5 rounded-full bg-white border border-gray-300">
                          <img
                            className="inline-block size-16 object-cover"
                            src={product.image}
                            alt={product.name}
                          />
                        </span>
                        <span className="block text-sm font-semibold text-gray-800">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className="block text-sm font-semibold text-gray-800">
                        {parseInt(product.price).toLocaleString()} FCFA
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-200 text-teal-800 rounded-full">
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-sm text-gray-500">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-1.5 text-end">
                      <Link
                        to={`/update-product/${product.id}`}
                        className="text-sm text-secondaryColor hover:underline px-2"
                      >
                        Modifier
                      </Link>
                      <button
                        onClick={() => handleDeleteClick(product.id)}
                        className="text-sm text-red-600 hover:underline px-2"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showConfirm && (
        <ConfirmDelete
          onClose={() => setShowConfirm(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ListProduct;
