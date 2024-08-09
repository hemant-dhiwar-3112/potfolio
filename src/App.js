import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./items/Home";
import Rootbox from "./Rootbox";
import Project from "./items/Project";
import Contact from "./items/Contact";
import Skill from "./items/Skill";
import Homereact from "./react/Homereact";
import "./app.css";
import Passwordgen from "./react/genpass/Passwordgen";
import Currencyhook from "./react/currency/Currencycon";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootbox />}>
      <Route path="" element={<Home />}></Route>
      <Route path="Project" element={<Project />} />
      <Route path="Skill" element={<Skill />}></Route>
      <Route path="Contact" element={<Contact />}></Route>

      <Route path="Project/React-Project" element={<Homereact />} />
      
      <Route path="Project/React-Project/Password-generater" element={<Passwordgen />} />
      <Route path="Project/React-Project/Currency-converter" element={<Currencyhook />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
