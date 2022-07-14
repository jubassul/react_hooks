import { Routes, Route } from "react-router-dom";
import { ExampleState } from "../Pages/ExampleState";
import { Home } from "../Pages/Home";
import {ExampleEffect} from "../Pages/ExampleEffect";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example-state" element={<ExampleState />} />
      <Route path="/example-effect" element={<ExampleEffect />} />
    </Routes>
  );
}
export default AppRoutes;
