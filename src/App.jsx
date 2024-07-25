import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import RoutesDashboard from "./MainRoutesDashboard/RoutesDashboard";

function App() {
  return (
    <HashRouter hashType="hashbang">
      <Routes>
        <Route path="*" element={<RoutesDashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
