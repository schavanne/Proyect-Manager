import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import {AuthLayout} from './layouts/AuthLayout';
import { ProtectedLayout } from './layouts/ProtectedLayout';
import { ConfirmAccount } from './pages/ConfirmAccount';
import { ForgetPassword } from './pages/ForgetPassword';
import {Login} from './pages/Login';
import { RecoverPassword } from './pages/RecoverPassword';
import {Register} from './pages/Register';
import { Proyects } from './pages/Proyects';
import {Proyect} from './pages/Proyect';
import {ProyectAdd} from './pages/ProyectAdd';
import {ProyectEdit} from './pages/ProyectEdit';
import {ProyectProvider} from './context/ProyectsProvider'

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
  
      <Routes>
        <Route
          path='/'
          element={<AuthLayout/>}
          >
            <Route
              index
              element={<Login/>}
            />
            <Route
              path='register'
              element={<Register/>}
            />
            <Route
              path='forget-password'
              element={<ForgetPassword/>}
            />
            <Route
              path='recover-password/:token'
              element={<RecoverPassword/>}
            />
            <Route
              path='confirm/:token'
              element={<ConfirmAccount/>}
            />
            <Route
              path='*'
              element={<h1>404 Not Found</h1>}
            />
        </Route>
        {/* Rutas privadas*/}
        <Route path="/proyects" element={<ProtectedLayout />}>
          <Route index element={<Proyects />} />
          <Route path="create-proyect" element={<ProyectAdd />} />
          <Route path="edit-proyect/:id" element={<ProyectEdit />} />
          <Route path=":id" element={<Proyect/>}/>
        </Route>
      </Routes>
    
    </AuthProvider>
    </BrowserRouter>
  )
};

export default App;