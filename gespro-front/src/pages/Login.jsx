import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${API_URL}/login`, form);
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });
      // console.log(response.data);
      const token = response.data.token;

      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (err) {
      setError("Identifiants incorrects ou serveur injoignable.");
    }
  };

  return (
    <section className="flex min-h-screen flex-col justify-center bg-neutral-50">
      <h2 className="sr-only">Connexion Gespro</h2>
      <article className="mx-auto w-full max-w-[450px] rounded-md bg-white p-8 shadow-md">
        <hgroup>
          <h3 className="text-xl font-bold text-baseColor">Se connecter</h3>
          <p className="text-neutral-400">
            Veuillez saisir vos informations de connexion.
          </p>
        </hgroup>

        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-600 bg-red-100 px-2 py-1 rounded">{error}</p>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-darkColor">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Entrer votre email"
              className="w-full rounded-md border-2 p-1.5 text-darkColor placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-darkColor"
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
              value={form.password}
              onChange={handleChange}
              placeholder="Entrer votre mot de passe"
              className="w-full rounded-md border-2 p-1.5 text-darkColor placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-darkColor"
              required
            />
          </div>

          <div className="space-y-1.5">
            <button
              type="submit"
              className="w-full rounded-md border-2 border-baseColor bg-baseColor hover:bg-hoverColor px-4 py-2 text-sm font-medium text-neutral-100"
            >
              Se connecter
            </button>
            <Link to="/register">
              <button
                type="button"
                className="w-full mt-2 rounded-md border-2 border-darkColor bg-transparent px-4 py-2 text-sm font-medium text-darkColor"
              >
                Inscrivez-vous maintenant !
              </button>
            </Link>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
