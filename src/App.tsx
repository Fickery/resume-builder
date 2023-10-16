import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Personal from "./pages/Personal";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Layout from "./component/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="personal" element={<Personal />} />
      <Route path="experience" element={<Experience />} />
      <Route path="education" element={<Education />} />
      <Route path="skills" element={<Skills />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
