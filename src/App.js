import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideNavbar from "./Navigation Bar/Side Navbar/SideNavbar";
import TopNavbar from "./Navigation Bar/Top Navbar/TopNavbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Landing from "./Pages/Landing/Landing";
import ManageTask from "./Pages/Manage Task/ManageTask";
import Settings from "./Pages/Settings/Settings";
import TaskBoard from "./Pages/Task Board/TaskBoard";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <TopNavbar></TopNavbar>
        <div className="flex">
            <Routes>
              <Route path="Landing" element={<Landing></Landing>}></Route>
              <Route path="/" element={<SideNavbar />}>
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Manage Task" element={<ManageTask />} />
                <Route path="Task Board" element={<TaskBoard />} />
                <Route path="Settings" element={<Settings />} />
              </Route>
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
