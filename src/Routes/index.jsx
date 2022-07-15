import { Routes, Route } from "react-router-dom";
import { ExampleState } from "../Pages/ExampleState";
import { Home } from "../Pages/Home";
import { ExampleEffect } from "../Pages/ExampleEffect";
import { ExampleRef } from "../Pages/ExampleRef"
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example-state" element={<ExampleState />} />
      <Route path="/example-effect" element={<ExampleEffect />} />
      <Route path="/example-ref" element={<ExampleRef />} />
    </Routes>
  );
}
export default AppRoutes;
