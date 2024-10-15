import AdminLogin from "./AdminLogin";
import AdminDashborad from "./AdminDashboard";
import Notifications from "./Notifications";
import Report from "./Report";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="whole">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AdminLogin />}></Route>
            <Route path='/admin_dashboard' exact element={<AdminDashborad/>}></Route>
            <Route path='/notification' exact element={<Notifications />}></Route>
            <Route path='/report' exact element={<Report />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
