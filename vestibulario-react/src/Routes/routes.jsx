import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage.jsx';
import Cadastro from '../Cadastro/Cadastro.jsx';
import Login from '../Login/Login.jsx';
import Perfil from '../Perfil/Perfil.jsx';
import UniversidadePage from '../Universidade/UniversidadePage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import VestibularesPage from '../VestibularesPage/VestibularesPage.jsx'
import styles from './Routes.module.css'

function AppRoutes() {
  return (
    <div className={styles.siteWrapper}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/universidade/:id" element={<UniversidadePage />} />
        <Route path="/vestibulares" element={<VestibularesPage />} />

        {/* Protected route */}
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />

      </Routes>
    </div>
  );
}

export default AppRoutes;