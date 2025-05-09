import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {

    const confirmLogout = window.confirm("Voulez-vous vraiment vous déconnecter ?");
    if (!confirmLogout) return;

    localStorage.removeItem("token");

    alert("Déconnexion réussie !");

    navigate("/login");
  };

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-40">
      <div className="h-full p-4 overflow-y-auto">
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-left rounded-lg hover:bg-gray-100 text-gray-800"
          >
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </span>
            Dashboard
          </Link>

          <Link
            to="/new-product"
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-left rounded-lg hover:bg-gray-100 text-gray-800"
          >
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </span>
            Ajouter un produit
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-left rounded-lg hover:bg-gray-100 text-gray-800"
          >
            <span className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
            </span>
            Se déconnecter
          </button>
        </nav>
      </div>
    </aside>
  );
}
