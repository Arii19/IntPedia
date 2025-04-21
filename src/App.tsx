// src/App.tsx
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Procedures from './pages/Procedures';
import Schemas from './pages/Schemas';
import ConsultasSQL from './pages/ConsultasSQL';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#071419] text-[#D2E0E2]">
      <header className="bg-[#19191C] px-6 py-4 flex items-center shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-[#D2E0E2] mr-8">IntPedia</h1>
        <nav className="flex-1">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link
                to="/procedures"
                className={`hover:underline ${
                  location.pathname === '/procedures' ? 'font-bold underline' : ''
                }`}
              >
                Procedures
              </Link>
            </li>
            <li>
              <Link
                to="/schemas"
                className={`hover:underline ${
                  location.pathname === '/schemas' ? 'font-bold underline' : ''
                }`}
              >
                Schemas
              </Link>
            </li>
            <li>
              <Link
                to="/consultas"
                className={`hover:underline ${
                  location.pathname === '/consultas' ? 'font-bold underline' : ''
                }`}
              >
                Consultas SQL
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/schemas" element={<Schemas />} />
          <Route path="/consultas" element={<ConsultasSQL />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
