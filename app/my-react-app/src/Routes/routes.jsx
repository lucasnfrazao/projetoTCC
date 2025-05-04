import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage.jsx';
import Cadastro from '../Cadastro/Cadastro.jsx';
import Login from '../Login/Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/registro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />

      {/* Protected route */}
      <Route
        path="/perfil"
        element={
          <PrivateRoute>
            {/* <Perfil /> */}
          </PrivateRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;