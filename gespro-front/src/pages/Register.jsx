import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    prename: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });
      await axios.post("http://localhost:8000/api/register", formData);
      window.alert("Inscription réussie");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Veuillez réessayer.");
    }
  };

  return (
    <section className="flex min-h-screen flex-col justify-center bg-neutral-50">
      <h2 className="sr-only">Inscription Gespro</h2>
      <article className="mx-auto w-full max-w-[450px] rounded-md bg-white p-8 shadow-md">
        <hgroup>
          <h3 className="text-xl font-bold text-baseColor">S'inscrire</h3>
          <p className="text-neutral-400">
            Veuillez saisir vos informations de connexion.
          </p>
        </hgroup>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="space-y-2">
            <label htmlFor="prename" className="text-sm font-medium text-darkColor">
              Prénom
            </label>
            <input
              id="prename"
              name="prename"
              type="text"
              value={formData.prename}
              onChange={handleChange}
              className="w-full rounded-md border-2 p-1.5"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-darkColor">
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border-2 p-1.5"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-darkColor">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border-2 p-1.5"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-darkColor">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border-2 p-1.5"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password_confirmation" className="text-sm font-medium text-darkColor">
              Confirmer le mot de passe
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="w-full rounded-md border-2 p-1.5"
              required
            />
          </div>
          <div className="space-y-1.5">
            <button className="w-full rounded-md border-2 border-baseColor bg-baseColor text-white py-2">
              S'inscrire
            </button>
            <Link to="/login">
              <button type="button" className="w-full mt-2 rounded-md border-2 border-darkColor py-2">
                Vous avez déjà un compte ?
              </button>
            </Link>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Register;
